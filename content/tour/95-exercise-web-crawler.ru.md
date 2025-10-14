---
title: "95. Упражнение: Веб-краулер (Web Crawler)"
date: 2025-10-12
categories: ["Tour of Go"]
description: "Изучите основы синтаксиса Go с практическими примерами"
tags: ["горутины", "каналы", "go синтаксис", "golang основы"]
keywords: "golang, go, упражнения на golang, обучение go, tour of go, mutex в go, обучение golang на примерах"
author: "GoCat Team"
weight: 95
draft: false
originalUrl: "https://go.dev/tour/concurrency/10"

---

В этом упражнении вы будете использовать средства конкурентности Go для распараллеливания веб-краулера.

Измените функцию Crawl, чтобы она загружала URL-адреса параллельно, не загружая один и тот же URL-адрес дважды.

Подсказка: вы можете хранить кэш уже загруженных URL-адресов в карте (map), но карты сами по себе не безопасны для конкурентного использования!

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
)

type Fetcher interface {
    // Fetch returns the body of URL and
    // a slice of URLs found on that page.
    Fetch(url string) (body string, urls []string, err error)
}

// Crawl uses fetcher to recursively crawl
// pages starting with url, to a maximum of depth.
func Crawl(url string, depth int, fetcher Fetcher) {
    // TODO: Fetch URLs in parallel.
    // TODO: Don't fetch the same URL twice.
    // This implementation doesn't do either:
    if depth <= 0 {
        return
    }
    body, urls, err := fetcher.Fetch(url)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Printf("found: %s %q\n", url, body)
    for _, u := range urls {
        Crawl(u, depth-1, fetcher)
    }
    return
}

func main() {
    Crawl("https://golang.org/", 4, fetcher)
}

// fakeFetcher is Fetcher that returns canned results.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
    body string
    urls []string
}

func (f fakeFetcher) Fetch(url string) (string, []string, error) {
    if res, ok := f[url]; ok {
        return res.body, res.urls, nil
    }
    return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher is a populated fakeFetcher.
var fetcher = fakeFetcher{
        "https://golang.org/": &fakeResult{
        "The Go Programming Language",
        []string{
            "https://golang.org/pkg/",
            "https://golang.org/cmd/",
        },
    },
    "https://golang.org/pkg/": &fakeResult{
        "Packages",
        []string{
            "https://golang.org/",
            "https://golang.org/cmd/",
            "https://golang.org/pkg/fmt/",
            "https://golang.org/pkg/os/",
        },
    },
    "https://golang.org/pkg/fmt/": &fakeResult{
        "Package fmt",
        []string{
            "https://golang.org/",
            "https://golang.org/pkg/",
        },
    },
    "https://golang.org/pkg/os/": &fakeResult{
        "Package os",
        []string{
            "https://golang.org/",
            "https://golang.org/pkg/",
        },
    },
}


{{< /go-playground >}} 
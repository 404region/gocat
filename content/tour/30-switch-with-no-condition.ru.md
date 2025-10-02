---
title: "30. Switch без условия"
date: 2025-09-29
categories: ["Tour of Go"]
weight: 30
draft: false
# bookComments: false
# bookSearchExclude: false
---

Switch без условия эквивалентен switch true.

Такая конструкция может быть удобным способом записи длинных цепочек if-then-else.

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "time"
)

func main() {
    t := time.Now()
    switch {
    case t.Hour() < 12:
        fmt.Println("Good morning!")
    case t.Hour() < 17:
        fmt.Println("Good afternoon.")
    default:
        fmt.Println("Good evening.")
    }
}


{{< /go-playground >}} 
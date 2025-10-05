---
title: "52. Литералы мап"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 52
draft: false
originalUrl: ""
---

[Литералы](https://ru.wikipedia.org/wiki/Литерал_%28информатика%29) мап похожи на литералы структур, но ключи являются обязательными.

{{< go-playground id="example1" >}}

package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m = map[string]Vertex{
    "Bell Labs": Vertex{
        40.68433, -74.39967,
    },
    "Google": Vertex{
        37.42202, -122.08408,
    },
}

func main() {
    fmt.Println(m)
}


{{< /go-playground >}} 
---
title: "53. Литералы мап, продолжение"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 53
draft: false
originalUrl: ""
---

Если вышестоящий тип является просто именем типа, вы можете опустить его в элементах литерала.

{{< go-playground id="example1" >}}

package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m = map[string]Vertex{
    "Bell Labs": {40.68433, -74.39967},
    "Google":    {37.42202, -122.08408},
}

func main() {
    fmt.Println(m)
}


{{< /go-playground >}} 
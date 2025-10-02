---
title: "35. Поля структуры"
date: 2025-09-30
categories: ["Tour of Go"]
weight: 35
draft: false
# bookComments: false
# bookSearchExclude: false
---
Доступ к полям структуры осуществляется через точку.

{{< go-playground id="example1" >}}
package main

import "fmt"

type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    v.X = 4
    fmt.Println(v.X)
}



{{< /go-playground >}} 
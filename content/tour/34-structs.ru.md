---
title: "34. Структуры"
date: 2025-09-29
categories: ["Tour of Go"]
weight: 34
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
  
Структура — это коллекция полей.

{{< go-playground id="example1" >}}
package main

import "fmt"

type Vertex struct {
    X int
    Y int
}

func main() {
    fmt.Println(Vertex{1, 2})
}



{{< /go-playground >}} 
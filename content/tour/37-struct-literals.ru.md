---
title: "37. Структурные литералы"
date: 2025-09-30
categories: ["Tour of Go"]
weight: 37
draft: false
# bookComments: false
# bookSearchExclude: false
---

Литерал структуры позволяет создать новое значение структуры, перечисляя значения её полей.

Можно указать только часть полей, используя синтаксис Имя:. Порядок именованных полей при этом не имеет значения.

Специальный префикс & возвращает указатель на структурное значение.

{{< go-playground id="example1" >}}

package main

import "fmt"

type Vertex struct {
    X, Y int
}

var (
    v1 = Vertex{1, 2}  // has type Vertex
    v2 = Vertex{X: 1}  // Y:0 is implicit
    v3 = Vertex{}      // X:0 and Y:0
    p  = &Vertex{1, 2} // has type *Vertex
)

func main() {
    fmt.Println(v1, p, v2, v3)
}


{{< /go-playground >}} 
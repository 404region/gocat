---
title: "37. Значения структуры"
date: 2025-09-30
categories: ["Tour of Go"]
weight: 37
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

При инициализации структуры, можно задавать ее значения, например с помощью [литералов](https://ru.wikipedia.org/wiki/Литерал_%28информатика%29).

Можно указать только часть полей, используя синтаксис Имя: значение.  
Порядок полей при этом не важен.

Специальный префикс & (амперсанд) возвращает указатель на страктуру.

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
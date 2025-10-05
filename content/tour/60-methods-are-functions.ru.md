---
title: "60. Методы - это функции"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 60
draft: false
originalUrl: "https://go.dev/tour/methods/2"
---

Запомните: метод - это просто функция с аргументом-получателем.

Ниже пример функции Abs, написанной как обычная функция, без изменения функциональности.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

type Vertex struct {
    X, Y float64
}

func Abs(v Vertex) float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := Vertex{3, 4}
    fmt.Println(Abs(v))
}



{{< /go-playground >}} 
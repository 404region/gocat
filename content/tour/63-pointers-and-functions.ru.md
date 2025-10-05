---
title: "63. Указатели и функции"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 63
draft: false
originalUrl: "https://go.dev/tour/methods/5"
---

Здесь мы видим методы Abs и Scale, переписанные как функции.

Снова попробуйте убрать * со строки 16. Видите ли вы, почему поведение меняется? Что еще нужно было изменить для компиляции примера?

(Если вы не уверены, переходите на следующую страницу.)
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

func Scale(v *Vertex, f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func main() {
    v := Vertex{3, 4}
    Scale(&v, 10)
    fmt.Println(Abs(v))
}


{{< /go-playground >}} 
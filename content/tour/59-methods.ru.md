---
title: "59. Методы"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 59
draft: false
originalUrl: "https://go.dev/tour/methods/1"
---

В Go нет классов. Однако вы можете определять методы для типов.

Метод — это функция со специальным аргументом-получателем.

Получатель указывается в собственном списке аргументов между ключевым словом func и именем метода.

В этом примере метод Abs имеет получатель типа Vertex с именем v.

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "math"
)

type Vertex struct {
    X, Y float64
}

func (v Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
}


{{< /go-playground >}} 
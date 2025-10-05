---
title: "61. Методы, продолжение"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 61
draft: false
originalUrl: "https://go.dev/tour/methods/3"
---

Вы также можете объявлять методы для неструктурных типов.

В этом примере мы видим числовой тип MyFloat с методом Abs.

Вы можете объявить метод только с получателем, тип которого определен в том же пакете, что и метод. Вы не можете объявить метод с получателем, тип которого определен в другом пакете (включая встроенные типы, такие как int).

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "math"
)

type MyFloat float64

func (f MyFloat) Abs() float64 {
    if f < 0 {
        return float64(-f)
    }
    return float64(f)
}

func main() {
    f := MyFloat(-math.Sqrt2)
    fmt.Println(f.Abs())
}


{{< /go-playground >}} 
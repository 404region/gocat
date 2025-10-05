---
title: "67. Интерфейсы"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 67
draft: false
originalUrl: "https://go.dev/tour/methods/9"
---

Тип интерфейса определяется как набор сигнатур методов.

Значение типа интерфейса может содержать любое значение, которое реализует эти методы.

Примечание: В примере кода на строке 22 есть ошибка. Vertex (тип значения) не реализует Abser, потому что метод Abs определен только для *Vertex (тип указателя).

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "math"
)

type Abser interface {
    Abs() float64
}

func main() {
    var a Abser
    f := MyFloat(-math.Sqrt2)
    v := Vertex{3, 4}

	a = f  // a MyFloat implements Abser
	a = &v // a *Vertex implements Abser

	// In the following line, v is a Vertex (not *Vertex)
	// and does NOT implement Abser.
	a = v

	fmt.Println(a.Abs())
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
    if f < 0 {
    return float64(-f)
    }
    return float64(f)
}

type Vertex struct {
    X, Y float64
}

func (v *Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}


{{< /go-playground >}} 
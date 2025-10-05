---
title: "65. Методы и косвенное обращение через указатели (2)"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 65
draft: false
originalUrl: "https://go.dev/tour/methods/7"
---

Аналогичное происходит и в обратном направлении.

Функции, которые принимают аргумент по значению, должны принимать значение конкретного типа:

var v Vertex
fmt.Println(AbsFunc(v))  // OK
fmt.Println(AbsFunc(&v)) // Ошибка компиляции!

в то время как методы с получателями по значению принимают либо значение, либо указатель в качестве получателя при вызове:

var v Vertex
fmt.Println(v.Abs()) // OK
p := &v
fmt.Println(p.Abs()) // OK

В этом случае вызов метода p.Abs() интерпретируется как (*p).Abs().


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

func AbsFunc(v Vertex) float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
    fmt.Println(AbsFunc(v))

	p := &Vertex{4, 3}
	fmt.Println(p.Abs())
	fmt.Println(AbsFunc(*p))
}


{{< /go-playground >}} 
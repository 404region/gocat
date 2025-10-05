---
title: "69. Значения интерфейсов"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 69
draft: false
originalUrl: ""
---

Внутренне значения интерфейсов можно рассматривать как кортеж из значения и конкретного типа:

(значение, тип)
Значение интерфейса содержит значение определенного базового конкретного типа.

Вызов метода на значении интерфейса выполняет метод с тем же именем на его базовом типе.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

type I interface {
    M()
}

type T struct {
    S string
}

func (t *T) M() {
    fmt.Println(t.S)
}

type F float64

func (f F) M() {
    fmt.Println(f)
}

func main() {
    var i I

	i = &T{"Hello"}
	describe(i)
	i.M()

	i = F(math.Pi)
	describe(i)
	i.M()
}

func describe(i I) {
    fmt.Printf("(%v, %T)\n", i, i)
}



{{< /go-playground >}} 
---
title: "66. Выбор получателя: значение или указатель"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 66
draft: false
originalUrl: "https://go.dev/tour/methods/8"
---

Есть две причины использовать получатель-указатель.

Первая - чтобы метод мог изменять значение, на которое указывает его получатель.

Вторая - чтобы избежать копирования значения при каждом вызове метода. Это может быть более эффективно, если получатель является большой структурой, например.

В этом примере и Scale, и Abs являются методами с типом получателя *Vertex, даже though метод Abs не нуждается в изменении своего получателя.

Как правило, все методы для данного типа должны иметь либо получатели по значению, либо получатели-указатели, но не их смесь. (Мы увидим почему в следующих нескольких страницах.)

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "math"
)

type Vertex struct {
    X, Y float64
}

func (v *Vertex) Scale(f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func (v *Vertex) Abs() float64 {
    return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
    v := &Vertex{3, 4}
    fmt.Printf("Before scaling: %+v, Abs: %v\n", v, v.Abs())
    v.Scale(5)
    fmt.Printf("After scaling: %+v, Abs: %v\n", v, v.Abs())
}


{{< /go-playground >}} 
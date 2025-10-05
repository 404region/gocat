---
title: "64. Методы и косвенное обращение через указатели"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 64
draft: false
originalUrl: "https://go.dev/tour/methods/6"
---

Сравнивая две предыдущие программы, вы могли заметить, что функции с аргументом-указателем должны принимать указатель:

var v Vertex
ScaleFunc(v, 5)  // Ошибка компиляции!
ScaleFunc(&v, 5) // OK

в то время как методы с получателями-указателями принимают либо значение, либо указатель в качестве получателя при вызове:

var v Vertex
v.Scale(5)  // OK
p := &v
p.Scale(10) // OK

Для вызова v.Scale(5), даже though v является значением, а не указателем, метод с получателем-указателем вызывается автоматически. То есть, для удобства, Go интерпретирует выражение v.Scale(5) как (&v).Scale(5), поскольку метод Scale имеет получатель-указатель.

{{< go-playground id="example1" >}}

package main

import "fmt"

type Vertex struct {
    X, Y float64
}

func (v *Vertex) Scale(f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func ScaleFunc(v *Vertex, f float64) {
    v.X = v.X * f
    v.Y = v.Y * f
}

func main() {
    v := Vertex{3, 4}
    v.Scale(2)
    ScaleFunc(&v, 10)

	p := &Vertex{4, 3}
	p.Scale(3)
	ScaleFunc(p, 8)

	fmt.Println(v, p)
}


{{< /go-playground >}} 
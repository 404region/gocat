---
title: "71. Nil значения интерфейсов"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 71
draft: false
originalUrl: ""
---


Nil значение интерфейса не содержит ни значения, ни конкретного типа.

Вызов метода на nil интерфейсе вызывает ошибку времени выполнения, потому что в кортеже интерфейса нет типа, указывающего, какой конкретный метод вызывать.

{{< go-playground id="example1" >}}
package main

import "fmt"

type I interface {
    M()
}

func main() {
    var i I
    describe(i)
    i.M()
}

func describe(i I) {
    fmt.Printf("(%v, %T)\n", i, i)
}



{{< /go-playground >}} 
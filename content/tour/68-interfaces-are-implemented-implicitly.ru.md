---
title: "68. Интерфейсы реализуются неявно"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 68
draft: false
originalUrl: ""
---

Тип реализует интерфейс путем реализации его методов. Нет явного объявления намерения, нет ключевого слова "implements".

Неявные интерфейсы разделяют определение интерфейса от его реализации, которая может затем появиться в любом пакете без предварительной договоренности.

{{< go-playground id="example1" >}}
package main

import "fmt"

type I interface {
    M()
}

type T struct {
    S string
}

// This method means type T implements the interface I,
// but we don't need to explicitly declare that it does so.
func (t T) M() {
    fmt.Println(t.S)
}

func main() {
    var i I = T{"hello"}
    i.M()
}



{{< /go-playground >}} 
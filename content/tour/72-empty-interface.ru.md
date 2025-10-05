---
title: "72. Пустой интерфейс"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 72
draft: false
originalUrl: ""
---

Тип интерфейса, который определяет нуль методов, известен как пустой интерфейс:

interface{}  

Пустой интерфейс может содержать значения любого типа. (Каждый тип реализует как минимум нуль методов.)

Пустые интерфейсы используются кодом, который обрабатывает значения неизвестного типа. Например, fmt.Print принимает любое количество аргументов типа interface{}.

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    var i interface{}
    describe(i)

	i = 42
	describe(i)

	i = "hello"
	describe(i)
}

func describe(i interface{}) {
    fmt.Printf("(%v, %T)\n", i, i)
}

{{< /go-playground >}} 
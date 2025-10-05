---
title: "70. Значения интерфейсов с nil базовыми значениями"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 70
draft: false
originalUrl: "https://go.dev/tour/methods/12"
---


Если конкретное значение внутри интерфейса само является nil, метод будет вызван с nil получателем.

В некоторых языках это вызвало бы исключение нулевого указателя, но в Go принято писать методы, которые корректно обрабатывают вызов с nil получателем (как метод M в этом примере).

Обратите внимание, что значение интерфейса, содержащее nil конкретное значение, само по себе не является nil.

{{< go-playground id="example1" >}}

package main

import "fmt"

type I interface {
    M()
}

type T struct {
    S string
}

func (t *T) M() {
    if t == nil {
        fmt.Println("<nil>")
        return
    }
    fmt.Println(t.S)
}

func main() {
    var i I

	var t *T
	i = t
	describe(i)
	i.M()

	i = &T{"hello"}
	describe(i)
	i.M()
}

func describe(i I) {
    fmt.Printf("(%v, %T)\n", i, i)
}


{{< /go-playground >}} 
---
title: "57. Замыкания функций"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 57
draft: false
originalUrl: "https://go.dev/tour/moretypes/25"
---

Функции в Go могут быть замыканиями. Замыкание — это значение функции, которое ссылается на переменные извне своего тела. Функция может обращаться к этим переменным и присваивать им значения; в этом смысле функция «привязана» к переменным.

Например, функция adder возвращает замыкание. Каждое замыкание привязано к своей собственной переменной sum.

{{< go-playground id="example1" >}}

package main

import "fmt"

func adder() func(int) int {
    sum := 0
    return func(x int) int {
        sum += x
        return sum
    }
}

func main() {
    pos, neg := adder(), adder()
        for i := 0; i < 10; i++ {
            fmt.Println(
            pos(i),
            neg(-2*i),
        )
    }
}
{{< /go-playground >}} 
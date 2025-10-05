---
title: "86. Горутины"
date: 2025-10-02
categories: ["Tour of Go"]
weight: 86
draft: false
originalUrl: ""
---

Горутина — это легковесный поток, управляемый средой выполнения Go.

go f(x, y, z)

запускает новую горутину, выполняющую

f(x, y, z)

Вычисление f, x, y и z происходит в текущей горутине, а выполнение f — в новой горутине.

Горутины выполняются в одном адресном пространстве, поэтому доступ к общей памяти должен быть синхронизирован. Пакет sync предоставляет полезные примитивы, хотя они нечасто понадобятся вам в Go, поскольку существуют другие примитивы. (Смотрите следующий слайд.)

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 5; i++ {
    time.Sleep(100 * time.Millisecond)
    fmt.Println(s)
    }
}

func main() {
    go say("world")
    say("hello")
}



{{< /go-playground >}} 
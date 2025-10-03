---
title: "49. Range продолжение"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 49
draft: false
---

Вы можете пропустить индекс или значение, присвоив их символу _.

for i, _ := range pow
for _, value := range pow

Если вам нужен только индекс, вы можете опустить вторую переменную.

for i := range pow

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    pow := make([]int, 10)
    for i := range pow {
        pow[i] = 1 << uint(i) // == 2**i
    }
    for _, value := range pow {
        fmt.Printf("%d\n", value)
    }
}


{{< /go-playground >}} 
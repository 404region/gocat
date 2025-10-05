---
title: "58. Упражнение: Замыкание Фибоначчи"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 58
draft: false
originalUrl: "https://go.dev/tour/moretypes/26"
---

Давайте немного развлечемся с функциями.

Реализуйте функцию fibonacci, которая возвращает функцию (замыкание), возвращающую последовательные [числа Фибоначчи](https://en.wikipedia.org/wiki/Fibonacci_sequence) (0, 1, 1, 2, 3, 5, ...).

{{< go-playground id="example1" >}}

package main

import "fmt"

// fibonacci is a function that returns
// a function that returns an int.
func fibonacci() func() int {
}

func main() {
    f := fibonacci()
    for i := 0; i < 10; i++ {
        fmt.Println(f())    
    }
}


{{< /go-playground >}} 
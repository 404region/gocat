---
title: "9. Возвращение нескольких результатов"
date: 2025-09-23
categories: ["Tour of Go"]
weight: 9
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

Функция может возвращать любое количество результатов.

Пример: Функция swap возвращает две строки.


{{< go-playground id="example1" >}}
package main

import "fmt"

func swap(x, y string) (string, string) {
    return y, x
}

func main() {
    a, b := swap("hello", "world")
    fmt.Println(a, b)
}




{{< /go-playground >}} 
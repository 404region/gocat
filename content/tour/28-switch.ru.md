---
title: "28. Оператор switch"
date: 2025-09-28
categories: ["Tour of Go"]
weight: 28
# bookComments: false
# bookSearchExclude: false
---
Оператор switch — это более короткий способ записи последовательности операторов if-else. Он выполняет первый case, значение которого совпадает с условием.

Switch в Go похож на аналогичные операторы в C, C++, Java, JavaScript и PHP, но с отличием: Go выполняет только выбранный case, а не все последующие. Фактически, инструкция break, которая требуется в конце каждого case в других языках, в Go добавляется автоматически. 

Еще одно важное отличие: в Go значения в case не обязаны быть константами, а также не обязаны быть целыми числами.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "runtime"
)

func main() {
    fmt.Print("Go runs on ")
    switch os := runtime.GOOS; os {
    case "darwin":
        fmt.Println("macOS.")
    case "linux":
        fmt.Println("Linux.")
    default:
        // freebsd, openbsd,
        // plan9, windows...
        fmt.Printf("%s.\n", os)
    }
}


{{< /go-playground >}} 
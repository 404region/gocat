---
title: "25. Цикл if с краткой инструкцией"
date: 2025-09-27
categories: ["Tour of Go"]
weight: 25
# bookComments: false
# bookSearchExclude: false
---

Как и for, оператор if может начинаться с краткой инструкции, которая выполняется до проверки условия.

Переменные, объявленные в этой инструкции, доступны только до конца блока if.

(Попробуйте использовать v в последнем операторе return.)

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

func pow(x, n, lim float64) float64 {
    if v := math.Pow(x, n); v < lim {
        return v
    }
    return lim
}

func main() {
    fmt.Println(
        pow(3, 2, 10),
        pow(3, 3, 20),
    )
}



{{< /go-playground >}} 
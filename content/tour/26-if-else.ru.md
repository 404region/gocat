---
title: "26. Условие if с else"
date: 2025-09-24
categories: ["Tour of Go"]
weight: 26
# bookComments: false
# bookSearchExclude: false
---

Переменные, объявленные в краткой инструкции if, также доступны внутри всех блоков else.

(Оба вызова pow возвращают свои результаты до того, как начинается вызов fmt.Println в функции main.)

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

func pow(x, n, lim float64) float64 {
    if v := math.Pow(x, n); v < lim {
        return v
    } else {
        fmt.Printf("%g >= %g\n", v, lim)
    }
    // переменная v не доступна здесь
    // попытка вывести переменную v приведет к ошибке undefined: v
    // fmt.Println(v)

    return lim
}

func main() {
    fmt.Println(
        pow(3, 2, 10),
        pow(3, 3, 20),
    )
}



{{< /go-playground >}} 
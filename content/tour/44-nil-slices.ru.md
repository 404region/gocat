---
title: "44. Нулевые слайсы"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 44
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

Нулевым значением слайса является nil.

Нулевой слайс имеет длину и вместимость 0 и не имеет базового массива.

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    var s []int
    fmt.Println(s, len(s), cap(s))
    if s == nil {
        fmt.Println("nil!")
    }
}


{{< /go-playground >}} 
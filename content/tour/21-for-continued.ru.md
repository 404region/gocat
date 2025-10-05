---
title: "21. Цикл for (продолжение)"
date: 2025-09-27
categories: ["Tour of Go"]
weight: 21
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
Начальная и завершающая инструкции являются необязательными.

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    sum := 1    
    for ; sum < 1000; {
        sum += sum
    }
    fmt.Println(sum)
}


{{< /go-playground >}} 
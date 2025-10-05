---
title: "22. Цикл for заменяет while"
date: 2025-09-27
categories: ["Tour of Go"]
weight: 22
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
В Go цикл for заменяет while.

То, что в других языках делают через while, в Go пишут обычным for.

Для этого необходимо убрать начальную и завершающую инструкции, как в примере ниже.



{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    sum := 1
    for sum < 1000 {
        sum += sum
    }
    fmt.Println(sum)
}


{{< /go-playground >}} 
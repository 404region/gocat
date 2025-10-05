---
title: "48. Итерация Range"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 48
draft: false
originalUrl: ""
# bookComments: false
# bookSearchExclude: false
---

Форма range в цикле for выполняет итерацию по слайсу или карте.

При переборе слайса возвращаются два значения для каждой итерации. Первое - это индекс, а второе - копия элемента по этому индексу.

{{< go-playground id="example1" >}}
package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
    for i, v := range pow {
        fmt.Printf("2**%d = %d\n", i, v)
    }
}



{{< /go-playground >}} 
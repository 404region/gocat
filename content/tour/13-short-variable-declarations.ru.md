---
title: "13. Краткие объявления переменных"
date: 2025-09-24
categories: ["Tour of Go"]
weight: 13
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

Внутри функции краткая инструкция присваивания := может использоваться вместо объявления var с неявным типом.

Вне функции каждое выражение начинается с ключевого слова (var, func и так далее), поэтому конструкция := недоступна.

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    var i, j int = 1, 2
    k := 3
    c, python, java := true, false, "no!"
    
    fmt.Println(i, j, k, c, python, java)
}


{{< /go-playground >}} 
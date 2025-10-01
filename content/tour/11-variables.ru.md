---
title: "11. Переменные"
date: 2025-09-24
categories: ["Tour of Go"]
weight: 11
# bookComments: false
# bookSearchExclude: false
---

Оператор var объявляет список переменных; как и в списках аргументов функций, тип указывается последним.

Оператор var может использоваться на уровне пакета или функции. В этом примере мы видим оба варианта.

{{< go-playground id="example1" >}}
package main

import "fmt"

var c, python, java bool

func main() {
    var i int
    fmt.Println(i, c, python, java)
}


{{< /go-playground >}} 
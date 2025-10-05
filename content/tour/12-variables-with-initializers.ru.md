---
title: "12. Переменные с инициализацией"
date: 2025-09-24
categories: ["Tour of Go"]
weight: 12
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
  
Объявление var может включать инициализаторы — по одному для каждой переменной.

Если инициализатор присутствует, тип можно опустить; переменная примет тип инициализатора.

{{< go-playground id="example1" >}}
package main

import "fmt"

var i, j int = 1, 2

func main() {
    var c, python, java = true, false, "no!"
    fmt.Println(i, j, c, python, java)
}


{{< /go-playground >}} 
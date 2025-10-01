---
title: "7. Функции"
date: 2025-09-22
categories: ["Tour of Go"]
weight: 7
# bookComments: false
# bookSearchExclude: false
---
Функция может принимать ноль или более аргументов.

В этом примере функция add принимает два параметра типа int.

Обратите внимание, что тип указывается после имени переменной.

(Чтобы подробнее узнать о том, почему типы записываются именно так, ознакомьтесь со статьей [о синтаксисе объявлений в Go](https://go.dev/blog/declaration-syntax)).

{{< go-playground id="example1" >}}
package main

import "fmt"

func add(x int, y int) int {
    return x + y
}

func main() {
    fmt.Println(add(42, 13))
}



{{< /go-playground >}} 
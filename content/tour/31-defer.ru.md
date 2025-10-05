---
title: "31. Defer"
date: 2025-09-29
categories: ["Tour of Go"]
weight: 31
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
Оператор defer откладывает выполнение функции до момента выхода из окружающей функции.

Аргументы отложенного вызова вычисляются немедленно, но сам вызов функции не происходит до возврата из окружающей функции.

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    defer fmt.Println("world")

	fmt.Println("hello")
}


{{< /go-playground >}} 
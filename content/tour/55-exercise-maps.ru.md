---
title: "55. Упражнение: Мапа"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 55
draft: false
originalUrl: ""
---

Реализуйте функцию WordCount. Она должна возвращать мапу с количеством вхождений каждого "слова" в строке s. Функция wc.Test запускает набор тестов для предоставленной функции и выводит успех или неудачу.

Вам может пригодиться функция [strings.Fields](https://pkg.go.dev/strings#Fields).

{{< go-playground id="example1" >}}

package main

import (
    "golang.org/x/tour/wc"
)

func WordCount(s string) map[string]int {
    return map[string]int{"x": 1}
}

func main() {
    wc.Test(WordCount)
}


{{< /go-playground >}} 
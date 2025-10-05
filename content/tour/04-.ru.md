---
title: "4. Пакеты"
date: 2025-09-21
categories: ["Tour of Go"]
weight: 4
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

Каждая программа на Go состоит из пакетов.

Выполнение программы начинается с пакета main.

Данная программа (смотрите в песочнице ниже) использует пакеты с путями импорта "fmt" и "math/rand".

Согласно соглашению, имя пакета совпадает с последним элементом пути импорта.  
Например, пакет "math/rand" состоит из файлов, которые начинаются с инструкции package rand.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math/rand"
)

func main() {
    fmt.Println("My favorite number is", rand.Intn(10))
}

{{< /go-playground >}} 
---
title: "45. Создание слайса с помощью make"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 999
draft: false
# bookComments: false
# bookSearchExclude: false
---
Слайсы можно создавать с помощью встроенной функции make; это способ создания массивов динамического размера.

Функция make выделяет обнуленный массив и возвращает слайс, который ссылается на этот массив:

a := make([]int, 5)  // len(a)=5

Чтобы указать вместимость, передайте третий аргумент в make:

b := make([]int, 0, 5) // len(b)=0, cap(b)=5

b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    a := make([]int, 5)
    printSlice("a", a)

	b := make([]int, 0, 5)
	printSlice("b", b)

	c := b[:2]
	printSlice("c", c)

	d := c[2:5]
	printSlice("d", d)
}

func printSlice(s string, x []int) {
    fmt.Printf("%s len=%d cap=%d %v\n",
    s, len(x), cap(x), x)
}



{{< /go-playground >}} 
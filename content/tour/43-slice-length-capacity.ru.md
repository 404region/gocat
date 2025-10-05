---
title: "43. Длина и вместимость слайса"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 43
draft: false
originalUrl: ""
---

У слайса есть как длина, так и вместимость.

Длина слайса - это количество элементов, которые он содержит.

Вместимость слайса - это количество элементов в базовом массиве, начиная с первого элемента в слайсе.

Длину и вместимость слайса s можно получить с помощью выражений len(s) и cap(s).

Вы можете увеличить длину слайса, повторно его слайся, при условии, что у него есть достаточная вместимость. Попробуйте изменить одну из операций со слайсом в примере программы, чтобы выйти за пределы его вместимости, и посмотрите, что произойдет.

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    s := []int{2, 3, 5, 7, 11, 13}
    printSlice(s)

	// Slice the slice to give it zero length.
	s = s[:0]
	printSlice(s)

	// Extend its length.
	s = s[:4]
	printSlice(s)

	// Drop its first two values.
	s = s[2:]
	printSlice(s)
}

func printSlice(s []int) {
    fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}



{{< /go-playground >}} 
---
title: "47. Добавление элементов в слайс"
date: 2025-10-02
categories: ["Tour of Go"]
weight: 47
draft: false
---

Часто возникает необходимость добавлять новые элементы в слайс, и Go предоставляет для этого встроенную функцию append. Документация встроенного пакета описывает append.

func append(s []T, vs ...T) []T
Первый параметр s функции append - это слайс типа T, а остальные - значения T для добавления в слайс.

Результатом функции append является слайс, содержащий все элементы исходного слайса плюс предоставленные значения.

Если базовый массив s слишком мал для размещения всех заданных значений, будет выделен новый массив большего размера. Возвращаемый слайс будет указывать на вновь выделенный массив.

(Чтобы узнать больше о слайсах, прочитайте статью "Слайсы: использование и внутреннее устройство".)

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    var s []int
    printSlice(s)

	// append works on nil slices.
	s = append(s, 0)
	printSlice(s)

	// The slice grows as needed.
	s = append(s, 1)
	printSlice(s)

	// We can add more than one element at a time.
	s = append(s, 2, 3, 4)
	printSlice(s)
}

func printSlice(s []int) {
    fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}


{{< /go-playground >}} 
---
title: "84. Параметры типа"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 84
draft: false
originalUrl: "https://go.dev/tour/generics/1"
---


Функции в Go могут быть написаны для работы с несколькими типами с использованием параметров типа. Параметры типа функции указываются в квадратных скобках перед аргументами функции.

func Index[T comparable](s []T, x T) int

Это объявление означает, что s является срезом любого типа T, который удовлетворяет встроенному ограничению comparable. x также представляет значение того же типа.

comparable — это полезное ограничение, которое позволяет использовать операторы == и != со значениями типа. В этом примере мы используем его для сравнения значения со всеми элементами среза до тех пор, пока не будет найдено совпадение. Эта функция Index работает для любого типа, который поддерживает сравнение.

{{< go-playground id="example1" >}}


package main

import "fmt"

// Index returns the index of x in s, or -1 if not found.
func Index[T comparable](s []T, x T) int {
    for i, v := range s {
        // v and x are type T, which has the comparable
        // constraint, so we can use == here.
        if v == x {
            return i
        }
    }
    return -1
}

func main() {
    // Index works on a slice of ints
    si := []int{10, 20, 15, -10}
    fmt.Println(Index(si, 15))

	// Index also works on a slice of strings
	ss := []string{"foo", "bar", "baz"}
	fmt.Println(Index(ss, "hello"))
}

{{< /go-playground >}} 
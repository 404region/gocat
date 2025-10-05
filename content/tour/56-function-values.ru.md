---
title: "56. Функции как значения"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 56
draft: false
originalUrl: ""
---

Функции тоже являются значениями. Их можно передавать так же, как и другие значения.

Значения функций могут использоваться в качестве аргументов функций и возвращаемых значений.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

func compute(fn func(float64, float64) float64) float64 {
    return fn(3, 4)
}

func main() {
    hypot := func(x, y float64) float64 {
        return math.Sqrt(x*x + y*y)
    }
    fmt.Println(hypot(5, 12))

	fmt.Println(compute(hypot))
	fmt.Println(compute(math.Pow))
}

{{< /go-playground >}} 
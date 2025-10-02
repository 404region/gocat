---
title: "16. Преобразования типов  "
date: 2025-09-25
categories: ["Tour of Go"]
weight: 16
# bookComments: false
# bookSearchExclude: false
---

Выражение T(v) преобразует значение v к типу T.

Некоторые числовые преобразования:

var i int = 42
var f float64 = float64(i)
var u uint = uint(f)

Или, в более простой форме:

i := 42
f := float64(i)
u := uint(f)

В отличие от C, в Go присваивание между элементами разных типов требует явного преобразования. Попробуйте удалить преобразования float64 или uint в примере и посмотрите, что произойдет.
{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

func main() {
    var x, y int = 3, 4
    var f float64 = math.Sqrt(float64(x*x + y*y))
    var z uint = uint(f)
    fmt.Println(x, y, z)
}



{{< /go-playground >}} 
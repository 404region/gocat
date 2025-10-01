---
title: "15. Значения по умолчанию"
date: 2025-09-25
categories: ["Tour of Go"]
weight: 15
# bookComments: false
# bookSearchExclude: false
---

Переменные, объявленные без явного начального значения, получают значение по умолчанию.

Значения по умолчанию:

0 для числовых типов,  
false для логического типа и  
"" (пустая строка) для строк.

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    var i int
    var f float64
    var b bool
    var s string
    fmt.Printf("%v %v %v %q\n", i, f, b, s)
}


{{< /go-playground >}} 
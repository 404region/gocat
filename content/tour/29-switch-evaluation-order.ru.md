---
title: "29. Порядок выполнения switch"
date: 2025-09-28
categories: ["Tour of Go"]
weight: 29
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

В операторе switch условия case проверяются сверху вниз, выполнение прекращается при первом совпадении.

Например:

switch i {
case 0:
case f():
}

не вызовет функцию f, если i==0.

Примечание: Время в Go playground всегда начинается с 2009-11-10 23:00:00 UTC.  
Значение этой даты оставлено в качестве упражнения для читателя.

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "time"
)

func main() {
    fmt.Println("When's Saturday?")
    today := time.Now().Weekday()
    switch time.Saturday {
    case today + 0:
        fmt.Println("Today.")
    case today + 1:
        fmt.Println("Tomorrow.")
    case today + 2:
        fmt.Println("In two days.")
    default:
        fmt.Println("Too far away.")
    }
}

{{< /go-playground >}} 
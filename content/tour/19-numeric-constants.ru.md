---
title: "19. Числовые константы"
date: 2025-09-26
categories: ["Tour of Go"]
weight: 19
# bookComments: false
# bookSearchExclude: false
---
  
Числовые константы являются высокоточными значениями.

Нетипизированная константа принимает тип, требуемый контекстом.

Попробуйте также вывести needInt(Big).

(Тип int может хранить максимум 64-битное целое число, а иногда и меньше.)

{{< go-playground id="example1" >}}
package main

import "fmt"

const (
    // Create a huge number by shifting a 1 bit left 100 places.
    // In other words, the binary number that is 1 followed by 100 zeroes.
    Big = 1 << 100
    // Shift it right again 99 places, so we end up with 1<<1, or 2.
    Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
    func needFloat(x float64) float64 {
    return x * 0.1
}

func main() {
    fmt.Println(needInt(Small))
    fmt.Println(needFloat(Small))
    fmt.Println(needFloat(Big))
}



{{< /go-playground >}} 
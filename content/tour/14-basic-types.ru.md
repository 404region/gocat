---
title: "14. Краткие объявления переменных"
date: 2025-09-24
categories: ["Tour of Go"]
weight: 14
# bookComments: false
# bookSearchExclude: false
---
Базовые типы Go:

bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // псевдоним для uint8

rune // псевдоним для int32
// представляет Unicode кодпоинт

float32 float64

complex64 complex128

В примере показаны переменные нескольких типов, а также то, что объявления переменных могут быть сгруппированы в блоки, как и операторы импорта.

Типы int, uint и uintptr обычно имеют ширину 32 бита в 32-битных системах и 64 бита в 64-битных системах. Когда вам нужно целочисленное значение, следует использовать int, если только у вас нет конкретной причины использовать типы с определенным размером или беззнаковые целочисленные типы.
{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math/cmplx"
)

var (
    ToBe   bool       = false
    MaxInt uint64     = 1<<64 - 1
    z      complex128 = cmplx.Sqrt(-5 + 12i)
)

func main() {
    fmt.Printf("Type: %T Value: %v\n", ToBe, ToBe)
    fmt.Printf("Type: %T Value: %v\n", MaxInt, MaxInt)
    fmt.Printf("Type: %T Value: %v\n", z, z)
}


{{< /go-playground >}} 
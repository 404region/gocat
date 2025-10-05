---
title: "33. Указатели"
date: 2025-09-29
categories: ["Tour of Go"]
weight: 33
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
 
В Go есть указатели. Указатель (Pointer) содержит адрес памяти значения.

Тип *T является указателем на значение типа T. Его значение по умолчанию — nil.

var p *int

Оператор & возвращает указатель на свой операнд.

i := 42
p = &i

Оператор * обращается к значению, на которое ссылается указатель.

fmt.Println(*p) // читаем значение i через указатель p
*p = 21         // записываем значение i через указатель p

Эта операция называется "разыменованием" указателя.

В отличие от C, в Go нет арифметики указателей.
{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    i, j := 42, 2701

	p := &i         // point to i
	fmt.Println(*p) // read i through the pointer
	*p = 21         // set i through the pointer
	fmt.Println(i)  // see the new value of i

	p = &j         // point to j
	*p = *p / 37   // divide j through the pointer
	fmt.Println(j) // see the new value of j
}


{{< /go-playground >}} 
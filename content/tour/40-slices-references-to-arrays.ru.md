---
title: "40. Слайсы являются ссылками на массивы"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 40
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---

Слайс не хранит данные, а лишь ссылается на часть базового массива.  
Поэтому изменение элементов в сайлсе приводит к изменению соотвествующих элементов в массиве, от которого этот слайс образован.

Другие слайсы, основанные на том же массиве, увидят эти изменения.

В данном случае мы не меняем исходный массив names, а только слайс **b**, но тем не менее все слайсы (и **a** и **b**) видят и работают с этими изменениями.

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    names := [4]string{
    "John",
    "Paul",
    "George",
    "Ringo",
}
fmt.Println(names)

	a := names[0:2]
	b := names[1:3]
	fmt.Println(a, b)

	b[0] = "XXX"
	fmt.Println(a, b)
	fmt.Println(names)
}

{{< /go-playground >}} 
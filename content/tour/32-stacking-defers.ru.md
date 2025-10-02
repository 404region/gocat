---
title: "32. Накопление отложенных вызовов"
date: 2025-09-29
categories: ["Tour of Go"]
weight: 32
draft: false
# bookComments: false
# bookSearchExclude: false
---
Отложенные вызовы функций помещаются в стек. При возврате из функции ее отложенные вызовы выполняются в порядке "последним пришел — первым ушел".

Чтобы узнать больше об операторах defer, прочитайте [этот пост в блоге](https://go.dev/blog/defer-panic-and-recover).

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    fmt.Println("counting")

	for i := 0; i < 10; i++ {
		defer fmt.Println(i)
	}

	fmt.Println("done")
}


{{< /go-playground >}} 
---
title: "18. Константы"
date: 2025-09-26
categories: ["Tour of Go"]
weight: 18
# bookComments: false
# bookSearchExclude: false
---
  
Константы объявляются как переменные, но с использованием ключевого слова const.

Константы могут быть символьными, строковыми, логическими или числовыми значениями.

Константы нельзя объявлять с использованием синтаксиса :=.
{{< go-playground id="example1" >}}

package main

import "fmt"

const Pi = 3.14

func main() {
    const World = "世界"
    fmt.Println("Hello", World)
    fmt.Println("Happy", Pi, "Day") 

	const Truth = true
	fmt.Println("Go rules?", Truth)
}

{{< /go-playground >}} 
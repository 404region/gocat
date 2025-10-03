---
title: "41. Литералы слайсов"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 41
draft: false
# bookComments: false
# bookSearchExclude: false
---

[Литерал](https://ru.wikipedia.org/wiki/Литерал_%28информатика%29) слайса похож на литерал массива, но без указания длины.

Это литерал массива:

[3]bool{true, true, false}

А это создает такой же массив, а затем слайс, который ссылается на него:

[]bool{true, true, false}

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    q := []int{2, 3, 5, 7, 11, 13}
    fmt.Println(q)

	r := []bool{true, false, true, true, false, true}
	fmt.Println(r)

	s := []struct {
		i int
		b bool
	}{
		{2, true},
		{3, false},
		{5, true},
		{7, true},
		{11, false},
		{13, true},
	}
	fmt.Println(s)
}



{{< /go-playground >}} 
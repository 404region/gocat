---
title: "42. Значения по умолчанию для слайсов"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 42
draft: false
originalUrl: ""
---

При создании среза можно опускать верхнюю или нижнюю границы, используя значения по умолчанию.

По умолчанию нижняя граница равна 0, а верхняя — длине слайса.

Для массива

```go
var a [10]int
```

следующие выражения со слайсами эквивалентны:

```go
a[0:10]
a[:10] 
a[0:]
a[:]
```

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    s := []int{2, 3, 5, 7, 11, 13}

	s = s[1:4]
	fmt.Println(s)

	s = s[:2]
	fmt.Println(s)

	s = s[1:]
	fmt.Println(s)
}



{{< /go-playground >}} 
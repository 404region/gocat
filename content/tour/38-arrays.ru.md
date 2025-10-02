---
title: "38. Массивы"
date: 2025-09-30
categories: ["Tour of Go"]
weight: 38
draft: false
# bookComments: false
# bookSearchExclude: false
---

Массивы  
Тип `[n]T` представляет собой массив из `n` значений типа `T`.

Выражение

```go
var a [10]int
```

объявляет переменную **a** как массив из десяти целых чисел.

Длина массива является частью его типа, поэтому массивы нельзя изменять.  
Это может показаться ограничением, но не беспокойтесь: в Go предусмотрен удобный способ работы с массивами.
{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {   
    var a [2]string
    a[0] = "Hello"
    a[1] = "World"
    fmt.Println(a[0], a[1])
    fmt.Println(a)

	primes := [6]int{2, 3, 5, 7, 11, 13}
	fmt.Println(primes)
}


{{< /go-playground >}} 
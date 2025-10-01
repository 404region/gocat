---
title: "8. Функции (продолжение)"
date: 2025-09-23
categories: ["Tour of Go"]
weight: 8
# bookComments: false
# bookSearchExclude: false
---
Когда два или более последовательных именованных параметра функции имеют одинаковый тип, можно указать тип только для последнего из них.

В этом примере мы сократили
```go
x int, y int
```

до
```go
x, y int
```

{{< go-playground id="example1" >}}
package main

import "fmt"

func add(x, y int) int {
    return x + y
}

func main() {
    fmt.Println(add(42, 13)) 
}




{{< /go-playground >}} 
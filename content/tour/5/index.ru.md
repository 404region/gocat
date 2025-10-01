---
title: "5. Импорт"
date: 2025-09-22
categories: ["Tour of Go"]
weight: 5
# bookComments: false
# bookSearchExclude: false
---
Данный код группирует импорты в круглых скобках в виде блочного оператора импорта.

Также можно писать несколько отдельных операторов импорта, например:
```go
import "fmt"
import "math"
```

Однако использование блочного оператора импорта считается хорошим стилем.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
}

{{< /go-playground >}} 
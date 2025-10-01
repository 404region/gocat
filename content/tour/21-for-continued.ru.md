---
title: "19. "
date: 2025-09-24
categories: ["Tour of Go"]
weight: 19
# bookComments: false
# bookSearchExclude: false
---

{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
    sum := 1    
    for ; sum < 1000; {
    sum += sum
    }
    fmt.Println(sum)
}


{{< /go-playground >}} 
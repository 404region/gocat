---
title: "36. Указатели на структуры"
date: 2025-09-30
categories: ["Tour of Go"]
weight: 36
draft: false
# bookComments: false
# bookSearchExclude: false
originalUrl: ""
---
Доступ к полям структуры можно получить через указатель на структуру.

Чтобы получить доступ к полю X структуры через указатель p, можно написать (*p).X. Однако такая запись громоздка, поэтому язык позволяет использовать сокращенную запись p.X без явного разыменования.

{{< go-playground id="example1" >}}

package main

import "fmt"

type Vertex struct {
    X int
    Y int
}

func main() {
    v := Vertex{1, 2}
    p := &v
    p.X = 1e9
    fmt.Println(v)
}


{{< /go-playground >}} 
---
title: "51. Мапа (Map) "
date: 2025-10-01
categories: ["Tour of Go"]
weight: 51
draft: false
originalUrl: ""
---

Мапа (Map) сопоставляет ключи со значениями.

Нулевым значением мапы является nil. Nil мапа не содержит ключей, и в нее нельзя добавить новые ключи.

Функция make возвращает мапу заданного типа, инициализированную и готовую к использованию.

{{< go-playground id="example1" >}}

package main

import "fmt"

type Vertex struct {
    Lat, Long float64
}

var m map[string]Vertex

func main() {
    m = make(map[string]Vertex)
    m["Bell Labs"] = Vertex{
        40.68433, -74.39967,
    }
    fmt.Println(m["Bell Labs"])
}


{{< /go-playground >}} 
---
title: "75. Стрингер"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 75
draft: false
originalUrl: ""
---

Одним из самых распространенных интерфейсов является Stringer, определенный в пакете fmt.

type Stringer interface {
String() string
}

Стрингер - это тип, который может описать себя в виде строки. Пакет fmt (и многие другие) ищут этот интерфейс для вывода значений.

{{< go-playground id="example1" >}}
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) String() string {
    return fmt.Sprintf("%v (%v years)", p.Name, p.Age)
}

func main() {
    a := Person{"Arthur Dent", 42}
    z := Person{"Zaphod Beeblebrox", 9001}
    fmt.Println(a, z)
}

{{< /go-playground >}} 
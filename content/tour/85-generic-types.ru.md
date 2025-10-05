---
title: "85. Универсальные типы (Дженерики)"
date: 2025-10-02
categories: ["Tour of Go"]
weight: 85
draft: false
originalUrl: "https://go.dev/tour/generics/2"
---

Помимо универсальных функций, Go также поддерживает универсальные типы. Тип может быть параметризован с помощью параметра типа, что полезно для реализации универсальных структур данных.

Этот пример демонстрирует простое объявление типа для односвязного списка, содержащего значения любого типа.

В качестве упражнения добавьте некоторый функционал в эту реализацию списка.

{{< go-playground id="example1" >}}
package main

// List represents a singly-linked list that holds
// values of any type.
type List[T any] struct {
    next *List[T]
    val  T
}

func main() {
}


{{< /go-playground >}} 
---
title: "54. Изменение мапы"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 54
draft: false
originalUrl: ""
---

Добавление или обновление элемента в мапе m:

m[key] = elem

Получение элемента:

elem = m[key]

Удаление элемента:

delete(m, key)

Проверка наличия ключа с помощью присваивания с двумя значениями:

elem, ok = m[key]

Если ключ присутствует в m, ok будет true. Если нет, ok будет false.

Если ключа нет в мапе, то elem будет нулевым значением для типа элемента мапы.

Примечание: Если elem или ok еще не объявлены, вы можете использовать краткую форму объявления:

elem, ok := m[key]

{{< go-playground id="example1" >}}

package main

import "fmt"

func main() {
    m := make(map[string]int)

	m["Answer"] = 42
	fmt.Println("The value:", m["Answer"])

	m["Answer"] = 48
	fmt.Println("The value:", m["Answer"])

	delete(m, "Answer")
	fmt.Println("The value:", m["Answer"])

	v, ok := m["Answer"]
	fmt.Println("The value:", v, "Present?", ok)
}

{{< /go-playground >}} 
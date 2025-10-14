---
title: "93. Упражнение: Эквивалентные бинарные деревья - продолжение"
date: 2025-10-12
categories: ["Tour of Go"]
description: "Изучите основы синтаксиса Go с практическими примерами"
tags: ["горутины", "каналы", "go синтаксис", "golang основы"]
keywords: "golang, go, упражнения на golang, обучение go, tour of go"
author: "GoCat Team"
weight: 93
draft: false
originalUrl: "https://go.dev/tour/concurrency/8"

---

1. Реализуйте функцию Walk.

2. Протестируйте функцию Walk.

Функция tree.New(k) создает бинарное дерево со случайной структурой (но всегда отсортированное), содержащее значения k, 2k, 3k, ..., 10k.

Создайте новый канал ch и запустите обходчик:
```go
go Walk(tree.New(1), ch)
```

Затем прочтите и выведите 10 значений из канала. Это должны быть числа 1, 2, 3, ..., 10.

3. Реализуйте функцию Same, используя Walk, чтобы определить, содержат ли t1 и t2 одинаковые значения.

4. Протестируйте функцию Same.

Same(tree.New(1), tree.New(1)) должна возвращать true, а Same(tree.New(1), tree.New(2)) должна возвращать false.

Документацию по Tree можно найти [здесь](https://pkg.go.dev/golang.org/x/tour/tree#Tree).


{{< go-playground id="example1" >}}

package main

package main

import "golang.org/x/tour/tree"

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int)

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool

func main() {
}

{{< /go-playground >}} 
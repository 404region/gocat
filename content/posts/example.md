---
title: "Example"
date: 2025-09-16T09:40:53+03:00
# bookComments: false
# bookSearchExclude: false
draft: true
---
# Это заголовок первого уровня (H1)

Вступление к моей замечательной статье. **Этот текст будет жирным**.

## Подзаголовок (H2)

А вот это уже абзац обычного текста. Hugo невероятно быстрый!

*   Пункт списка 1
*   Пункт списка 2
*   Пункт списка 3

Вот пример [ссылки на сайт Hugo](https://gohugo.io).

![Это описание картинки](/images/my-image.jpg)

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go Котяра!")
}
```

content/
└── tour/
    ├── 1-welcome/
    │   └── index.ru.md
    ├── 2-basics/
    │   └── index.ru.md
    ├── 3-flowcontrol/
    │   └── index.ru.md
    └── _index.ru.md  <-- Главная страница раздела "Tour"


content/
└── tour/
    ├── 01-welcome.ru.md
    ├── 02-basics.ru.md
    ├── 03-flowcontrol.ru.md
    └── _index.ru.md


{{< go-playground id="example1" >}}
package main

import "fmt"

func main() {
fmt.Println("Привет от Go Котяры!")
fmt.Println("2 + 2 =", 2+2)
}
{{< /go-playground >}} 
---
title: "77. Ошибки"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 77
draft: false
originalUrl: ""
---

Программы на Go выражают состояние ошибки с помощью значений error.

Тип error - это встроенный интерфейс, похожий на fmt.Stringer:
```go
type error interface {
Error() string
}
```
(Как и с fmt.Stringer, пакет fmt ищет интерфейс error при выводе значений.)

Функции часто возвращают значение error, и вызывающий код должен обрабатывать ошибки, проверяя, равна ли ошибка nil.
```go
i, err := strconv.Atoi("42")
if err != nil {
fmt.Printf("couldn't convert number: %v\n", err)
return
}
fmt.Println("Converted integer:", i)
```
Nil ошибка означает успех; ненулевая ошибка означает неудачу.

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "time"
)

type MyError struct {
    When time.Time
    What string
}

func (e *MyError) Error() string {
    return fmt.Sprintf("at %v, %s",
    e.When, e.What)
}

func run() error {
    return &MyError{
    time.Now(),
    "it didn't work",
    }
}

func main() {
    if err := run(); err != nil {
        fmt.Println(err)
    }
}


{{< /go-playground >}} 
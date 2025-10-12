---
title: "90. Оператор Select"
date: 2025-10-12
categories: ["Tour of Go"]
description: "Изучите основы синтаксиса Go: объявление переменных, типы данных, константы и приведение типов с практическими примерами"
tags: ["горутины", "каналы", "go синтаксис", "golang основы"]
keywords: "golang, go, синтаксис golang, обучение go, tour of go, close в каналах, go каналы, конкурентность в go, оператор select в каналах"
author: "GoCat Team"
weight: 90
draft: false
originalUrl: "https://go.dev/tour/concurrency/5"

---
Оператор select позволяет горутине ожидать выполнения нескольких операций связи.

Select блокируется, пока одна из его ветвей не сможет выполниться, после чего выполняет эту ветвь.

Если несколько ветвей готовы, он выбирает одну из них случайным образом.

В данном примере оператор select используется на строке 8.



{{< go-playground id="example1" >}}
package main

import "fmt"

func fibonacci(c, quit chan int) {
    x, y := 0, 1
    for {
        select {
        case c <- x:
            x, y = y, x+y
        case <-quit:
            fmt.Println("quit")
            return
        }
    }
}

func main() {
    c := make(chan int)
    quit := make(chan int)
    go func() {
        for i := 0; i < 10; i++ {
            fmt.Println(<-c)
        }
        quit <- 0
    }()
    fibonacci(c, quit)
}

{{< /go-playground >}} 
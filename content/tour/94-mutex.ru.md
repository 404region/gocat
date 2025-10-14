---
title: "94. Мьютекс"
date: 2025-10-12
categories: ["Tour of Go"]
description: "Изучите основы синтаксиса Go с практическими примерами"
tags: ["горутины", "каналы", "go синтаксис", "golang основы"]
keywords: "golang, go, упражнения на golang, обучение go, tour of go, mutex в go"
author: "GoCat Team"
weight: 94
draft: false
originalUrl: "https://go.dev/tour/concurrency/9"

---

Мы видели, что каналы отлично подходят для общения между горутинами.

Но что, если нам не нужно общение? Что, если мы просто хотим убедиться, что только одна горутина может обращаться к переменной в данный момент времени, чтобы избежать конфликтов?

Эта концепция называется взаимным исключением (mutual exclusion), а традиционное название для структуры данных, которая его обеспечивает, — мьютекс.

Стандартная библиотека Go предоставляет взаимное исключение с помощью sync.Mutex и двух его методов:

Lock  
Unlock

Мы можем определить блок кода, который должен выполняться в режиме взаимного исключения, окружив его вызовами Lock и Unlock, как показано в методе Inc.

Мы также можем использовать defer, чтобы гарантировать разблокировку мьютекса, как в методе Value.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "sync"
    "time"
)

// SafeCounter is safe to use concurrently.
type SafeCounter struct {
    mu sync.Mutex
    v  map[string]int
}

// Inc increments the counter for the given key.
func (c *SafeCounter) Inc(key string) {
    c.mu.Lock()
    // Lock so only one goroutine at a time can access the map c.v.
    c.v[key]++
    c.mu.Unlock()
}

// Value returns the current value of the counter for the given key.
func (c *SafeCounter) Value(key string) int {
    c.mu.Lock()
    // Lock so only one goroutine at a time can access the map c.v.
    defer c.mu.Unlock()
    return c.v[key]
}

func main() {
    c := SafeCounter{v: make(map[string]int)}
    for i := 0; i < 1000; i++ {
        go c.Inc("somekey")
    }

	time.Sleep(time.Second)
	fmt.Println(c.Value("somekey"))
}

{{< /go-playground >}} 
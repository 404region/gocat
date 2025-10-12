---
title: "88. Буферизованные каналы"
date: 2025-10-12
categories: ["Tour of Go"]
description: "Изучите буферезированные каналы Go с примерами"
tags: ["переменные", "типы данных", "синтаксис", "golang основы"]
keywords: "golang, go, синтаксис golang, обучение go, tour of go, golang каналы, go каналы, конкурентность в go"
author: "GoCat Team"
weight: 88
draft: false
originalUrl: "https://go.dev/tour/concurrency/3"

---

Каналы могут быть буферизованными. Передайте длину буфера в качестве второго аргумента функции make для инициализации буферизованного канала:

```go
ch := make(chan int, 100)
```

Отправка в буферизованный канал блокируется только тогда, когда буфер полностью заполнен. Получение блокируется, когда буфер пуст.

Измените пример, чтобы переполнить буфер, и посмотрите, что произойдет.


{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "time"
)

/*
func main() {
    ch := make(chan int, 2)
    ch <- 1
    ch <- 2
    fmt.Println(<-ch)  // Освобождаем 1 слот
    fmt.Println(<-ch)  // Освобождаем 1 слот

    ch <- 3  // Теперь можно отправить ещё
	ch <- 4 
	
	 fmt.Println(<-ch)  // Освобождаем 1 слот
	 	 fmt.Println(<-ch)  // Освобождаем 1 слот
		 
    
    // Попытка переполнения:
    ch <- 4  // Блокировка - буфер снова заполнен
    // ch <- 5  // Если раскомментировать - deadlock!
	fmt.Println(<-ch)
	fmt.Println(<-ch)
}
*/
/*
func main() {
    ch := make(chan int)
    // ch <- 42  // Отправка (блокируется, пока кто-то не прочитает)
    fmt.Println(ch)
    //val := <-ch  // Получение (но выполнение сюда никогда не дойдет)
    //fmt.Println(val)
}*/

func worker(ch chan int) {
    val := <-ch
    fmt.Println(val)
}

func worker2(ch chan int) {
    val := <-ch
    fmt.Println(val)
}

func main() {
    ch := make(chan int)
    go worker(ch)
    ch <- 42
    time.Sleep(time.Second)
}

{{< /go-playground >}} 
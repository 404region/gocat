---
title: "91. Default в операторе select"
date: 2025-10-13
categories: ["Tour of Go"]
description: "Изучите основы синтаксиса Go: объявление переменных, типы данных, константы и приведение типов с практическими примерами"
tags: ["горутины", "каналы", "go синтаксис", "golang основы"]
keywords: "golang, go, синтаксис golang, обучение go, tour of go, конкурентность в go"
author: "GoCat Team"
weight: 91
draft: false
originalUrl: "https://go.dev/tour/concurrency/6"

---

Default в операторе select выполняется, если никакой другой case не готов к выполнению.

Используйте default для попытки отправки или получения без блокировки:

```go
select {
case i := <-c:
    // используем i
default:
    // получение из c вызвало бы блокировку
}
```

{{< go-playground id="example1" >}}

package main

import (
    "fmt"
    "time"
)

func main() {
    start := time.Now()
    tick := time.Tick(100 * time.Millisecond)
    boom := time.After(500 * time.Millisecond)
    elapsed := func() time.Duration {
        return time.Since(start).Round(time.Millisecond)
    }
    for {
        select {
        case <-tick:
            fmt.Printf("[%6s] tick.\n", elapsed())
        case <-boom:
            fmt.Printf("[%6s] BOOM!\n", elapsed())
            return
        default:
            fmt.Printf("[%6s]     .\n", elapsed())
            time.Sleep(50 * time.Millisecond)
        }
    }
}
{{< /go-playground >}} 
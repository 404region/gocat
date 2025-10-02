---
title: "23. Бесконечный цикл"
date: 2025-09-24
categories: ["Tour of Go"]
weight: 23
# bookComments: false
# bookSearchExclude: false
---

Если опустить условие цикла, он будет выполняться вечно. Такая запись является весьма компактной.

Несмотря на то, что цикл позиционируется как бесконечный, реально бесконечным он не будет.

Через некоторое время цикл будет остановлен по таймауту с выводом: timeout running program (превышено время выполнения).
{{< go-playground id="example1" >}}

package main

func main() {
    for {
    }
}


{{< /go-playground >}} 
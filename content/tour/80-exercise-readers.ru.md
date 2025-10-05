---
title: "80. Задание: Readers"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 80
draft: false
originalUrl: ""
---

Реализуйте тип Reader, который выдаёт бесконечный поток ASCII символа 'A'.

{{< go-playground id="example1" >}}

package main

import "golang.org/x/tour/reader"

type MyReader struct{}

// TODO: Add a Read([]byte) (int, error) method to MyReader.

func main() {
    reader.Validate(MyReader{})
}


{{< /go-playground >}} 
---
title: "82. Интерфейс Image"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 82
draft: false
originalUrl: ""
---
[Пакет image](https://pkg.go.dev/image#Image) определяет интерфейс Image:

package image

type Image interface {
    ColorModel() color.Model
    Bounds() Rectangle
    At(x, y int) color.Color
}

Примечание: возвращаемое значение Rectangle метода Bounds на самом деле является image.Rectangle, поскольку объявление находится внутри пакета image.

(Подробности смотрите в [документации](https://pkg.go.dev/image#Image).)

Типы color.Color и color.Model также являются интерфейсами, но мы проигнорируем это, используя предопределённые реализации color.RGBA и color.RGBAModel. Эти интерфейсы и типы определены в [пакете image/color](https://pkg.go.dev/image/color).

{{< go-playground id="example1" >}}


package main

import (
    "fmt"
    "image"
)

func main() {
    m := image.NewRGBA(image.Rect(0, 0, 100, 100))
    fmt.Println(m.Bounds())
    fmt.Println(m.At(0, 0).RGBA())
}

{{< /go-playground >}} 
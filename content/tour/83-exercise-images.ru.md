---
title: "83. Упражнение: Изображения"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 83
draft: false
originalUrl: ""
---

Помните [генератор изображений](https://go.dev/tour/moretypes/18), который вы писали ранее? Давайте создадим еще один, но на этот раз он будет возвращать реализацию image.Image вместо среза данных.

Определите свой собственный тип Image, реализуйте [необходимые методы](https://pkg.go.dev/image#Image) и вызовите pic.ShowImage.

Bounds должен возвращать image.Rectangle, например image.Rect(0, 0, w, h).

ColorModel должен возвращать color.RGBAModel.

At должен возвращать color; значение v из предыдущего генератора изображений соответствует color.RGBA{v, v, 255, 255} в этом.

{{< go-playground id="example1" >}}
package main

import "golang.org/x/tour/pic"

type Image struct{}

func main() {
    m := Image{}
    pic.ShowImage(m)
}



{{< /go-playground >}} 
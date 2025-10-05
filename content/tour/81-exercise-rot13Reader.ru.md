---
title: "81. Задание: rot13Reader"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 81
draft: false
originalUrl: ""
---

Распространённым шаблоном является io.Reader, который оборачивает другой io.Reader, modificруя поток данных тем или иным способом.

Например, функция gzip.NewReader принимает io.Reader (поток сжатых данных) и возвращает *gzip.Reader, который также реализует io.Reader (поток распакованных данных).

Реализуйте rot13Reader, который реализует io.Reader и читает из io.Reader, modificруя поток путём применения шифра подстановки rot13 ко всем буквенным символам.

Тип rot13Reader предоставлен вам. Сделайте его io.Reader, реализовав его метод Read.


{{< go-playground id="example1" >}}

package main

import (
    "io"
    "os"
    "strings"
)

type rot13Reader struct {
    r io.Reader
}

func main() {
    s := strings.NewReader("Lbh penpxrq gur pbqr!")
    r := rot13Reader{s}
    io.Copy(os.Stdout, &r)
}


{{< /go-playground >}} 
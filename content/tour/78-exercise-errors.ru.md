---
title: "78. Задание: Ошибки"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 78
draft: false
originalUrl: ""
---

Скопируйте вашу функцию Sqrt из предыдущего задания и измените ее так, чтобы она возвращала значение ошибки.

Sqrt должна возвращать ненулевое значение ошибки, когда получает отрицательное число, так как она не поддерживает комплексные числа.

Создайте новый тип

type ErrNegativeSqrt float64
и сделайте его ошибкой, добавив метод

func (e ErrNegativeSqrt) Error() string
чтобы вызов ErrNegativeSqrt(-2).Error() возвращал "cannot Sqrt negative number: -2".

Примечание: Вызов fmt.Sprint(e) внутри метода Error приведет к бесконечному циклу. Вы можете избежать этого, преобразовав e сначала: fmt.Sprint(float64(e)). Почему?

Измените вашу функцию Sqrt, чтобы она возвращала значение ErrNegativeSqrt при получении отрицательного числа.


{{< go-playground id="example1" >}}


package main

import (
    "fmt"
)

func Sqrt(x float64) (float64, error) {
    return 0, nil
}

func main() {
    fmt.Println(Sqrt(2))
    fmt.Println(Sqrt(-2))
}

{{< /go-playground >}} 
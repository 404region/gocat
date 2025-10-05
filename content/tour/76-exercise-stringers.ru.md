---
title: "76. Упражнение: Stringer"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 76
draft: false
originalUrl: ""
---

Заставьте тип IPAddr реализовать fmt.Stringer, чтобы адрес выводился в виде точечной четверки.

Например, IPAddr{1, 2, 3, 4} должен выводиться как "1.2.3.4".

{{< go-playground id="example1" >}}
package main

import "fmt"

type IPAddr [4]byte

// TODO: Add a "String() string" method to IPAddr.

func main() {
    hosts := map[string]IPAddr{
        "loopback":  {127, 0, 0, 1},
        "googleDNS": {8, 8, 8, 8},
    }
    for name, ip := range hosts {
        fmt.Printf("%v: %v\n", name, ip)
    }
}



{{< /go-playground >}} 
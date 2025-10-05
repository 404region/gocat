---
title: "46. Слайсы слайсов"
date: 2025-10-01
categories: ["Tour of Go"]
weight: 46
draft: false
originalUrl: ""
---

Слайсы могут содержать любой тип, включая другие слайсы.

{{< go-playground id="example1" >}}
package main

import (
    "fmt"
    "strings"
)

func main() {
    // Create a tic-tac-toe board.
    board := [][]string{
        []string{"_", "_", "_"},
        []string{"_", "_", "_"},
        []string{"_", "_", "_"},
    }

	// The players take turns.
	board[0][0] = "X"
	board[2][2] = "O"
	board[1][2] = "X"
	board[1][0] = "O"
	board[0][2] = "X"

	for i := 0; i < len(board); i++ {
		fmt.Printf("%s\n", strings.Join(board[i], " "))
	}
}



{{< /go-playground >}} 
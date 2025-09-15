+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
categories: [] # <-- Добавьте эту строку!
tags: []      # ... и эту, если нужны теги
+++

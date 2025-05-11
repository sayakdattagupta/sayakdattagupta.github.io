---
title: Home
---

[<img src="https://avatars.githubusercontent.com/u/105037211?v=4" style="max-width:20%;min-width:40px;float:right;border-radius:50%;" alt="Github repo" />](https://github.com/sayakdattagupta/sayakdattagupta.github.io)

# Sayak Dattagupta

## ...is no longer an internet peasant!

aka, this is **my** site. <br>
In an ever-growing internet full of slop, I have decided to cut to the chase and become [landed gentry on the internet](https://landchad.net/).

```assembly
global _start

section .data
msg db 'Hi!',0x0a
len equ $ - msg

section .text
_start:
    mov edx,len
    mov ecx,msg
    mov ebx,1
    mov eax,4
    int 0x80
    mov eax,1
    mov ebx,0
    int 0x80
```

Check out my [reading list!](reading/)

---
title: Home
---

[<img src="https://simpleicons.org/icons/github.svg" style="max-width:15%;min-width:40px;float:right;" alt="Github repo" />](https://github.com/sayakdattagupta/sayakdattagupta.github.io)

# Sayak Dattagupta

## ^ ...is no longer an internet peasant!

aka, this is **my** site <br>
In an ever-growing internet full of slop, it is **our** responsibility to populate it with decent content.

```assembly
section     .text

extern printf
global      _start

_start:

    mov     edx,len
    mov     ecx,msg
    mov     ebx,1
    mov     eax,4
    int     0x80

    mov     eax,1
    int     0x80

section     .data

msg     db  'Hi!',10
len     equ $ - msg
```

This page has Math, Science, Programming and my Thoughts.

Check this LaTeX compatibility out!

$${\sqrt {n}}\left(\left({\frac {1}{n}}\sum _{i=1}^{n}X_{i}\right)-\mu \right)\ {\xrightarrow {d}}\ N\left(0,\sigma ^{2}\right)$$

---
title: Home
---

[<img src="https://avatars.githubusercontent.com/u/105037211?v=4" style="max-width:20%;min-width:40px;float:right;border-radius:50%;" alt="Github repo" />](https://github.com/sayakdattagupta/sayakdattagupta.github.io)

# Sayak Dattagupta

## ...is no longer an internet peasant!

aka, this is **my** site <br>
In an ever-growing internet full of slop, I have decided to cut to the chase and become landed gentry on the internet.

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

_I don't know what any of that means._

This site has (will have) math, science, programming and my thoughts.

Check this LaTeX compatibility out!

$${\sqrt {n}}\left(\left({\frac {1}{n}}\sum _{i=1}^{n}X_{i}\right)-\mu \right)\ {\xrightarrow {d}}\ N\left(0,\sigma ^{2}\right)$$

_Again, I don't know what any of that means._

Check out my [reading list!](reading/)

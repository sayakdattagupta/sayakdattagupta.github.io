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
global      _start                              ; Entry point for the program

_start:                                         ; Start of the program

    mov     edx,len                             ; Calculate message length
    mov     ecx,msg                             ; Load address of message
    mov     ebx,1                               ; File descriptor (stdout)
    mov     eax,4                               ; System call number (sys_write)
    int     0x80                                ; Call kernel to display message

    mov     eax,1                               ; System call number (sys_exit)
    int     0x80                                ; Call kernel to exit program

section     .data

msg     db  'Hi!',10                    ; Our message with a newline
len     equ $ - msg                             ; Calculate length of message
```

This page has Math, Science, Programming and my Thoughts.

Check this LaTeX compatibility out!

$${\sqrt {n}}\left(\left({\frac {1}{n}}\sum _{i=1}^{n}X_{i}\right)-\mu \right)\ {\xrightarrow {d}}\ N\left(0,\sigma ^{2}\right)$$

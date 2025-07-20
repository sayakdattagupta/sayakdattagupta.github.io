---
title: Home
---

# Sayak Dattagupta

_"The internet was made for creating things, not just mindlessly scrolling."_  
— Luke Smith (I guess)

I am Sayak Dattagupta. Here are my [skills](skills/).

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

Check out the [books that I have read](reading/) and the [movies and TV shows I have watched](movies/).

## My Posts:

---
title: Home
---

# Sayak Dattagupta

*"The internet was made for creating things, not just mindlessly scrolling."*  
— Luke Smith

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

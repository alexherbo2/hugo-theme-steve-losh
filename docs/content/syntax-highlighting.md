# Syntax Highlighting

## Fenced code blocks

[GitHub flavored code fences][GitHub – Fenced code blocks] are supported with [Highlight].

**Example**

~~~ markdown
``` c
#include <stdio.h>

int main() {
  printf("Hello, World!\n");
  return 0;
}
```
~~~

## File-name in fenced code blocks

Place file-name in code blocks while hovering.

**Example**

~~~ markdown
`hello.c`

``` c
#include <stdio.h>

int main() {
  printf("Hello, World!\n");
  return 0;
}
```
~~~

[GitHub – Fenced code blocks]: https://github.github.com/gfm#fenced-code-blocks
[Highlight]: https://highlightjs.org

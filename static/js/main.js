DOMContentLoaded = (event) => {

  const content = document.querySelector('#content')

  const headings = content.querySelectorAll('h1[id], h2[id], h3[id], h4[id]')
  const links = content.querySelectorAll('a')
  const codes = content.querySelectorAll('code')
  const codeBlocks = content.querySelectorAll('pre code')

  // Linkify headings
  for (const heading of headings) {
    heading.innerHTML = `<a href="#${heading.id}">${heading.textContent}</a>`
  }

  // Time – Relative
  const times = content.querySelectorAll('time.relative')
  for (const time of times) {
    time.title = time.textContent
    time.textContent = moment(time.textContent).fromNow()
  }

  // Syntax highlighting
  for (const codeBlock of codeBlocks) {
    hljs.highlightBlock(codeBlock)
  }

  // Flavored Markdown ─────────────────────────────────────────────────────────

  // Cool Code Blocks
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  // Place file-name in fenced code blocks.
  //
  // ╭─┤ Markdown ├─────────────────╮
  // │                              │
  // │ `hello.c`                    │
  // │                              │
  // │ ``` c                        │
  // │ #include <stdio.h>           │
  // │                              │
  // │ int main() {                 │
  // │   printf("Hello, World!\n"); │
  // │   return 0;                  │
  // │ }                            │
  // │ ```                          │
  // │                              │
  // ╰──────────────────────────────╯
  for (const codeBlock of codeBlocks) {
    const paragraph = codeBlock.parentElement.previousElementSibling
    if (paragraph.nodeName !== 'P') {
      continue
    }
    if (paragraph.childNodes.length !== 1) {
      continue
    }
    const code = paragraph.childNodes[0]
    if (code.nodeName !== 'CODE') {
      continue
    }
    const filename = code.textContent
    codeBlock.parentElement.setAttribute('data-filename', filename)
    paragraph.remove()
  }

  // Convert <code> to <kbd>
  // Markdown: Press `Control` + `J` to open the _Console_.
  // HTML: <p>Press <kbd>Control</kbd> + <kbd>J</kbd> to open the <em>Console</em>.</p>
  for (const code of codes) {
    if (false === /^(.|F[1-9]|F1[0-2]|Shift|Control|Alt|Super|Backspace|Escape|Return|Space|Tab|Left|Right|Up|Down)$/.test(code.textContent))
      continue
    const key = document.createElement('kbd')
    key.textContent = code.textContent
    code.replaceWith(key)
  }

  // Colorize web colors – Hex triplet
  for (const code of codes) {
    if (false === /^#([0-9]|[a-z]){6}$/.test(code.textContent))
      continue
    const color = document.createElement('span')
    color.textContent = code.textContent
    color.style.color = code.textContent
    code.replaceWith(color)
  }

  // Convert isolated video links to videos
  for (const link of links) {
    if (false === (/.webm/.test(link.href) && link.parentElement.childNodes.length === 1))
      continue
    const video = document.createElement('video')
    video.setAttribute('controls', '')
    const source = document.createElement('source')
    source.src = link.href
    video.append(source)
    link.replaceWith(video)
  }

  // Convert isolated YouTube video links to embedded videos
  for (const link of links) {
    if (false === (/youtu.be/.test(link.href) && link.parentElement.childNodes.length === 1))
      continue
    const figure = document.createElement('figure')
    figure.classList.add('elastic')
    const frame = document.createElement('iframe')
    frame.width = 560
    frame.height = 315
    frame.setAttribute('frameborder', 0)
    frame.setAttribute('allowfullscreen', '')
    const identifier = link.href.match(/youtu.be.(.+)/)[1]
    frame.src = `https://youtube.com/embed/${identifier}`
    figure.append(frame)
    link.replaceWith(figure)
  }

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded)
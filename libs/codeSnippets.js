document.addEventListener('DOMContentLoaded', function () {
  // Initialize CodeMirror editors
  const htmlEditor = CodeMirror.fromTextArea(
    document.getElementById('html-editor'),
    {
      mode: 'xml',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      viewportMargin: Infinity
    }
  )

  const cssEditor = CodeMirror.fromTextArea(
    document.getElementById('css-editor'),
    {
      mode: 'css',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      viewportMargin: Infinity
    }
  )

  // Function to update preview
  function updatePreview () {
    const html = htmlEditor.getValue()
    const css = cssEditor.getValue()
    const preview = document.getElementById('preview')
    preview.innerHTML = html

    // Create a style element for CSS
    const style = document.createElement('style')
    style.textContent = css
    preview.appendChild(style)
  }

  // Function to resize editors
  function resizeEditors () {
    const editorContainers = document.querySelectorAll('.code-container')
    editorContainers.forEach(container => {
      const editor = container.querySelector('.CodeMirror')
      if (editor) {
        editor.style.height = 'auto'
        editor.style.height = editor.scrollHeight + 'px'
      }
    })
  }

  // Update preview on change
  htmlEditor.on('change', () => {
    updatePreview()
    resizeEditors()
  })
  cssEditor.on('change', () => {
    updatePreview()
    resizeEditors()
  })

  // Initial preview update and editor resize
  updatePreview()
  resizeEditors()

  // Resize editors on window resize
  window.addEventListener('resize', resizeEditors)
})

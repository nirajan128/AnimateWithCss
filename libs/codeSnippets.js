// Make sure the DOM is fully loaded before running your script
document.addEventListener('DOMContentLoaded', function () {
  // Initialize CodeMirror editors
  const htmlEditor = CodeMirror.fromTextArea(
    document.getElementById('html-editor'),
    {
      mode: 'xml',
      theme: 'monokai',
      lineNumbers: true
    }
  )

  const cssEditor = CodeMirror.fromTextArea(
    document.getElementById('css-editor'),
    {
      mode: 'css',
      theme: 'monokai',
      lineNumbers: true
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

  // Update preview on change
  htmlEditor.on('change', updatePreview)
  cssEditor.on('change', updatePreview)

  // Initial preview update
  updatePreview()
})

const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple project setup.</p>
</body>
</html>
`

const cssCode = `
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

p {
  color: #555;
}
`

// Reference to elements
const htmlTab = document.getElementById('html-tab')
const cssTab = document.getElementById('css-tab')

const htmlDisplay = document.getElementById('html')
const cssDisplay = document.getElementById('css')

const preview = document.getElementById('preview')

// Display the initial code
htmlDisplay.textContent = htmlCode
cssDisplay.textContent = cssCode

// Update preview with HTML content
preview.innerHTML = htmlCode

// Event listeners for tabs
htmlTab.addEventListener('click', () => {
  preview.innerHTML = htmlCode
})

cssTab.addEventListener('click', () => {
  const styleElement = document.createElement('style')
  styleElement.textContent = cssCode
  preview.innerHTML = htmlCode
  preview.appendChild(styleElement)
})

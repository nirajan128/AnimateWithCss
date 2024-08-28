import data from './data.js'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('content')
  const buttonOne = document.getElementById('buttonOne')
  const defaultText = document.getElementById('defaultText')

  console.log(data)

  // Event listener for button
  buttonOne.addEventListener('click', () =>
    displayModuleContent(0, container, defaultText)
  ) // Display Module 1
})

// Function to display content based on the selected module
function displayModuleContent (moduleIndex, container, defaultText) {
  // Hide the default text
  defaultText.style.display = 'none'

  // Start building the content string
  let changedContent = `<div class="container d-flex flex-column p-4 text-dark">`

  // Get the module data based on the moduleIndex
  const moduleData = data[moduleIndex]

  if (moduleData) {
    changedContent += `<h1>${moduleData.module}</h1>`

    // Loop through each lesson in the module
    moduleData.lesson.forEach(lessonItem => {
      changedContent += `<h2>${lessonItem.title}</h2>`

      // Loop through each section in the lesson
      lessonItem.section.forEach(section => {
        changedContent += `<h3>${section.heading}</h3>`

        // Loop through each content item in the section
        section.content.forEach(item => {
          // Check if the item is an object or a string
          if (typeof item === 'object') {
            changedContent += `<p><strong>${item.point}:</strong> ${item.description}</p>`
          } else {
            changedContent += `<p>${item}</p>`
          }
        })
      })
    })

    // Close the main container div
    changedContent += `</div>`

    // Set the innerHTML of the container to the generated content
    container.innerHTML = changedContent
  } else {
    container.innerHTML = `<p>Module not found.</p>`
  }
}

import data from './data.js'

const container = document.getElementById('content')
const buttonOne = document.getElementById('buttonOne')
const defaultText = document.getElementById('defaultText')

// Function to display content based on the selected module
function displayModuleContent (moduleIndex) {
  // Hide the default text
  defaultText.style.display = 'none'

  // Start building the content string
  let changedContent = `<div class="container d-flex flex-column justify-content-center mt-3 text-dark p-3 poppins-regular">`

  // Get the module data based on the moduleIndex
  const moduleData = data[moduleIndex]

  if (moduleData) {
    changedContent += `<h1>${moduleData.module}</h1>`

    // Loop through each lesson in the module
    moduleData.lesson.forEach(lessonItem => {
      // Loop through each section in the lesson
      lessonItem.section.forEach(section => {
        changedContent += `<h3 class="mt-3">${section.heading}</h3>`

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
    container.innerHTML = `<p>No module found</p>`
  }
}

// Event listeners for buttons
buttonOne.addEventListener('click', () => displayModuleContent(0)) // Display Module 1

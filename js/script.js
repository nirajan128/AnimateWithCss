import data from '../libs/data.js'

const container = document.getElementById('content')
const buttonOne = document.getElementById('buttonOne')
const buttonTwo = document.getElementById('buttonTwo')
const defaultText = document.getElementById('defaultText')

console.log(data)

/**
 * Selects index of lesson from data
 */
function selectLesson (lessonIndex) {
  defaultText.style.display = 'none'
  try {
    //gets the index from the lessonIndex
    const lessonData = data[lessonIndex]
    lessonIndex === 0
      ? introLessonDesign(lessonData)
      : otherLessonDesign(lessonData)
  } catch (error) {
    console.log('No data found')
  }
}

function introLessonDesign (lessonData) {
  console.log('lesson 1', lessonData)
  // Start building the content string
  let changedContent = `<div class="container d-flex flex-column justify-content-center mt-3 text-dark p-3 poppins-regular">`
  if (lessonData) {
    changedContent += `<h2 class="text-decoration-underline">${lessonData.title}</h2>`
    changedContent += `<div class="row">`

    //Applies row to first two element
    lessonData.section.forEach((eachSection, eachSectionIndex) => {
      if (eachSectionIndex < 2) {
        changedContent += `<div class="col-md-6 section mt-3 p-4 border-bottom">`
      } else {
        changedContent += `<div class="col-12 section mt-3 p-2 border-bottom">`
      }

      changedContent += `<h3>${eachSection.heading}</h3>`

      //Check if the data is an array
      if (Array.isArray(eachSection.content)) {
        eachSection.content.forEach(content => {
          changedContent += `<p>${content}</p>`
        })
      } else {
        changedContent += `<p>${eachSection.content}</p>`
      }

      changedContent += `</div>` //closing tag: col
    })

    changedContent += `</div>` //closing tag: row
  }
  changedContent += `</div>` //closing tag:container

  // Set the innerHTML of the container to the generated content
  container.innerHTML = changedContent
}

function otherLessonDesign (lessonData) {
  console.log('lesson2', lessonData)
  let changedContent = `<div class="container d-flex flex-column justify-content-center mt-3 text-dark p-3 poppins-regular">`
  if (lessonData) {
    changedContent += `<h2 class="text-decoration-underline">${lessonData.title}</h2>`

    //section
    lessonData.section.forEach(eachSection => {})
  }
  changedContent += `</div>`

  // Set the innerHTML of the container to the generated content
  container.innerHTML = changedContent
}

buttonOne.addEventListener('click', () => {
  selectLesson(0)
})
buttonTwo.addEventListener('click', () => {
  selectLesson(1)
})

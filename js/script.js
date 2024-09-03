import data from '../libs/data.js'

window.addEventListener('DOMContentLoaded', () => {
  const accordionBodyContainer = document.getElementById(
    'accordionBodyContainer'
  )
  const container = document.getElementById('content')
  const defaultText = document.getElementById('defaultText')

  let currentIndex = 0

  // Clear existing content (optional)
  accordionBodyContainer.innerHTML = ''

  //Create accordion body for each element in data array
  data.forEach((item, index) => {
    const accordionBody = document.createElement('div')
    accordionBody.classList.add('accordion-body')

    accordionBody.innerHTML = `
      <a href="#" id="button${index}" class="link-underline-dark text-dark">
        ${item.title}
      </a>
    `
    accordionBodyContainer.appendChild(accordionBody)
  })

  // Function to highlight the selected accordion body
  function highlightSelectedAccordion (index) {
    const accordionBodies = document.querySelectorAll('.accordion-body')
    accordionBodies.forEach((body, i) => {
      if (i === index) {
        body.style.backgroundColor = '#AFE1AF' // Highlight color for selected
      } else {
        body.style.backgroundColor = '' // Default color for others
      }
    })
  }

  /**
   * Selects index of lesson from data
   */
  function selectLesson (lessonIndex) {
    defaultText.style.display = 'none'
    currentIndex = lessonIndex //sets the current index to the lesson index
    try {
      const lessonData = data[lessonIndex]
      if (lessonData) {
        lessonIndex === 0
          ? introLessonDesign(lessonData)
          : otherLessonDesign(lessonData)

        highlightSelectedAccordion(lessonIndex) // Highlight the selected accordion item
      } else {
        console.error('No data found for the selected lesson')
      }
    } catch (error) {
      console.error('Error occurred while selecting lesson:', error)
    }
  }

  function generateSectionContent (section) {
    let sectionContent = `<h3>${section.heading}</h3>`
    if (typeof section.content === 'string') {
      sectionContent += `<p class="merriweather-regular">${section.content}</p>`
    } else if (Array.isArray(section.content)) {
      if (typeof section.content[0] === 'string') {
        sectionContent += drawSnippets(section.content)
      } else if (typeof section.content[0] === 'object') {
        section.content.forEach(item => {
          sectionContent += `<p class="merriweather-regular"><span class="fw-bold">${item.title}</span> : ${item.description}</p>`
        })
      }
    }
    return sectionContent
  }

  function introLessonDesign (lessonData) {
    console.log('lesson', lessonData)
    let changedContent = `<div class="container d-flex flex-column justify-content-center mt-3 text-dark p-3 poppins-regular">`
    if (lessonData) {
      changedContent += `<div class="d-flex justify-content-between mb-3"><a href="../index.html" class='btn bg-accent'>Home</a>
</div>`
      changedContent += `<div class="d-flex justify-content-between mb-3">
        <button id="prevButton" class="btn btn-secondary">Previous</button>
        <button id="nextButton" class="btn btn-primary">Next</button>
      </div>`

      changedContent += `<h2 class="text-decoration-underline">${lessonData.title}</h2>`
      changedContent += `<div class="row">`

      lessonData.section.forEach((eachSection, eachSectionIndex) => {
        changedContent +=
          eachSectionIndex < 2
            ? `<div class="col-md-6 section mt-3 p-4 border-bottom">`
            : `<div class="col-12 section mt-3 p-2 border-bottom">`

        changedContent += generateSectionContent(eachSection)
        changedContent += `</div>` // closing tag: col
      })

      changedContent += footer()

      changedContent += `</div>` // closing tag: row
    }
    changedContent += `</div>` // closing tag: container

    // Set the innerHTML of the container to the generated content
    container.innerHTML = changedContent

    // Add event listeners for navigation buttons
    document.getElementById('prevButton').addEventListener('click', () => {
      navigate(-1)
    })
    document.getElementById('nextButton').addEventListener('click', () => {
      navigate(1)
    })
  }

  function otherLessonDesign (lessonData) {
    console.log('lesson 2', lessonData)
    let changedContent = `<div class="container d-flex flex-column justify-content-center mt-3 text-dark p-3 poppins-regular">`
    if (lessonData) {
      changedContent += `<div class="d-flex justify-content-between mb-3"><a href="../index.html" class='btn bg-accent'>Home</a>
</div>`

      changedContent += `<div class="d-flex justify-content-between mb-3">
        <button id="prevButton" class="btn btn-secondary">Previous</button>
        <button id="nextButton" class="btn btn-primary">Next</button>
      </div>`

      changedContent += `<h2 class="text-decoration-underline">${lessonData.title}</h2>`
      changedContent += `<div class="row">`

      lessonData.section.forEach(eachSection => {
        changedContent += `<div class="col-12 section mt-3 p-2 border-bottom">`
        changedContent += generateSectionContent(eachSection)
        changedContent += `</div>` // closing tag: col
      })

      changedContent += `</div>` // row closing tag
      changedContent += footer()
    }
    changedContent += `</div>` // container closing tag

    // Set the innerHTML of the container to the generated content
    container.innerHTML = changedContent

    // Apply CodeMirror only to the snippets generated by this script
    document.querySelectorAll('.dynamic-snippet').forEach(textarea => {
      CodeMirror.fromTextArea(textarea, {
        mode: 'css',
        theme: 'monokai',
        lineNumbers: true,
        readOnly: true
      })
    })

    // Add event listeners for navigation buttons
    document.getElementById('prevButton').addEventListener('click', () => {
      navigate(-1)
    })
    document.getElementById('nextButton').addEventListener('click', () => {
      navigate(1)
    })
  }

  function drawSnippets (contentArray) {
    return contentArray
      .map(
        code =>
          `<textarea class='dynamic-snippet p-3'>${code.trim()}</textarea>`
      )
      .join('')
  }

  function navigate (direction) {
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < data.length) {
      selectLesson(newIndex)
    }
  }

  function footer () {
    return `<div class="container primary-color"> 
        <div class="row p-3">
          <div class="col-sm-12 col-lg-4 d-flex justify-content-center align-items-center">
            <p class ="source-code-pro fw-bold">@2024 AnimateWithCSS</p>
          </div>
          <div class="col-sm-12 col-lg-4 source-code-pro d-flex flex-column justify-content-center">
             <p class="fw-bold"> Want to Contribute? </p>
             <p>Vist our github repository, and follow the documentation for contrbutions. Click the icon below</p>
             <a href="https://github.com/nirajan128/AnimateWithCss"><img src='../images/github.png' alt='github' class='custom-img' /></a>

          </div>
          <div class="col-sm-12 col-lg-4 source-code-pro">
             <p class="fw-bold">About</p>
             <p>This website aims to teach css animation from baisc explaining each properties.
              Made using HTML, Bootstrap, CSS and JS the wbesite has a simple stack. <span class="secondary-color">If you want to view the source code or contribute click this link : <a href="https://github.com/nirajan128/AnimateWithCss" class="accent-text">CODE</a></span></P>
              <p class="fw-bold ">Designed and Developed by:<br>
                 <a href="https://github.com/nirajan128" class=" accent-color" >@Nirajan Shrestha</a><br>
                 <a href="https://github.com/safali56" class="accent-color" >@Safali BC Senchuri</a>
              </p>
          </div>
        </div>

      </div>`
  }

  // Attach event listeners to buttons dynamically
  for (let i = 0; i < data.length; i++) {
    document.getElementById(`button${i}`).addEventListener('click', () => {
      selectLesson(i)
    })
  }
})

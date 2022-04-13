// variables
const LS = JSON.parse(localStorage.getItem('theme'))
const button = document.getElementById('btn-toggle')
const body = document.body

// Event
button.addEventListener('click', () => {
  body.classList.toggle('dark')
  updateLocalStorage()
})

// Functions
function activeChecking() {
  let active

  if (body.classList == 'dark') {
    active = false
  } else {
    active = true
  }

  return active
}

function updateLocalStorage() {
  const active = activeChecking()

  localStorage.setItem('theme', active)
}

function setDefaultTheme() {
  if (LS === true) {
    body.classList.remove('dark')
  } else {
    body.classList.remove('dark')
    body.classList.add('dark')
  }
}

// Run Functions
setDefaultTheme()

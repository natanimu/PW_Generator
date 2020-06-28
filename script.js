const characterrange = document.getElementById("characterrange")

const characternumber = document.getElementById("characternumber")

const includeUppercaseElment = document.getElementById("includeUppercase")

const includeNumbersElment = document.getElementById("includeNumbers")

const includeSpecialElment = document.getElementById("includeSpecial")

const form = document.getElementById("passwordGeneratorFormID")

const passwordbox = document.getElementById('passwordbox')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

characternumber.addEventListener("input", synccharacternumber)

form.addEventListener("submit", e => {
    e.preventDefault()
    
    const characterAmount = characternumber.value
    const includeUppercase = includeUppercaseElment.checked
    const includeNumbers = includeNumbersElment.checked
    const includeSpecial = includeSpecialElment.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial)
    passwordbox.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSpecial) {
    let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSpecial) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

    
function synccharacternumber(e) {
    const value = e.target.value
    characternumber.value = value
}


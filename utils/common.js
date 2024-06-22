const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Helper function to get a string input from the user
const inputStringFromUser = query => {
  return new Promise(resolve => rl.question(query, resolve))
}

// Helper function to get an integer input from the user with validation
const inputIntegerFromUser = async query => {
  // if the no entered is negative or not a valid no like 'aba'
  // then it will print the msg
  while (true) {
    const input = await inputStringFromUser(query)
    const number = parseInt(input, 10)
    if (!isNaN(number) && number >= 0) {
      return number
    }
    console.log('Please enter a valid number.')
  }
}

module.exports = {
  inputStringFromUser,
  inputIntegerFromUser,
  closeInterface: () => rl.close()
}

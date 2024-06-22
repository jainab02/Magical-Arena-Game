const {
  inputIntegerFromUser,
  inputStringFromUser,
  closeInterface
} = require('./utils/common')
const Player = require('./src/player')
const Arena = require('./src/arena')

// Function to get player details from the user with validation
const inputNewPlayerDetails = async () => {
  const name = await inputStringFromUser("Enter the player's name: ")
  const health = await inputIntegerFromUser(`Enter ${name}'s health: `)
  const strength = await inputIntegerFromUser(`Enter ${name}'s strength: `)
  const attack = await inputIntegerFromUser(`Enter ${name}'s attack: `)

  return new Player(name, health, strength, attack)
}
// Main function to initialize the game
const main = async () => {
  console.log('Welcome to the Magical Arena Game!')

  const playerA = await inputNewPlayerDetails()
  const playerB = await inputNewPlayerDetails()

  const arena = new Arena()
  arena.battleFight(playerA, playerB)
  console.log('End Game, See you Again!!')

  closeInterface()
}

main()

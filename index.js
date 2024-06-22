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

  console.log('Enter details for Player A:')
  const playerA = await inputNewPlayerDetails()
  
  console.log('Enter details for Player B:')
  const playerB = await inputNewPlayerDetails()

  const arena = new Arena()
  arena.battleFight(playerA, playerB)
  const winner = playerA.isPlayerAlive() ? playerA : playerB
  console.log(`${winner.name} wins the match!`)
  console.log('End Game, See you Again!!')

  closeInterface()
}

main()

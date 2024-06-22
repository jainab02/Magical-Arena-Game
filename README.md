# Magical Arena Game

This is a simple command-line game where two players battle in a magical arena. Each player has attributes such as health, strength, and attack. Players take turns attacking each other until one player's health reaches zero.

# Problem Statement:

Design a Magical Arena. Every Player is defined by a “health” attribute, “strength” attribute and an “attack” attribute - all positive integers. The player dies if his health attribute touches 0. 
Any two player can fight a match in the arena. Players attack in turns. Attacking player rolls the attacking dice and the defending player rolls the defending dice. The “attack”  value multiplied by the outcome of the  attacking dice roll is the damage created by the attacker. The defender “strength” value, multiplied by the outcome of the defending dice is the damage defended by the defender. Whatever damage created by attacker which is in excess of the damage defended by the defender will reduce the “health” of the defender. Game ends when any players health reaches 0
Player with lower health attacks first at the start of a match. 

## How to Run

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies (if any).

### Usage

1. Run the game using the following command:

    ```bash
    node index.js
    ```

2. Follow the prompts to enter the details for Player A and Player B.
3. The game will simulate a battle between the two players and announce the winner.

### For Unit testing
 Running the Tests
    ```sh
    npm test
    ```


### Project Structure


\`\`\`
magical-arena/<br>
├── index.js<br>
├── src/<br>
│   ├── player.js<br>
│   ├── dice.js<br>
│   ├── arena.js<br>
└── util/<br>
    └── common.js<br>
\`\`\`

### Player Attributes

- **Name**: The name of the player.
- **Health**: The player's health points. The game ends when a player's health reaches zero.
- **Strength**: The player's strength attribute, which affects defense.
- **Attack**: The player's attack attribute, which affects the damage inflicted.

### Example Output

\`\`\`
Welcome to the Magical Arena Game!
Enter the player's name: Player A
Enter Player A's health: 50
Enter Player A's strength: 10
Enter Player A's attack: 10
Enter the player's name: Player B
Enter Player B's health: 50
Enter Player B's strength: 10
Enter Player B's attack: 10
Player A rolls 3, Player B rolls 4
Player A attacks with 30, Player B defends with 40
Player B takes 0 damage, health is now 50
Player B rolls 6, Player A rolls 2
Player B attacks with 60, Player A defends with 20
Player A takes 40 damage, health is now 10
...
Player A wins the match!
\`\`\`

### License

This project is licensed under the MIT License.

// Start here

// Step 1 - Welcome and introduction
alert("Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.")

let username = prompt('Type username')

if (username) {
  let welcomeUsername = 'Welcome to FastPizza ' + username + '!'
  alert(welcomeUsername)
  console.log(welcomeUsername)
}

// Step 2 - Food choice
let foodChoice = prompt(
  'What kind of food would you like today?\nChoose a number:\n1. Pizza\n2. Pasta\n3. Salad'
);

foodChoice = parseInt(foodChoice)

let selectedFood = ''
let selectedDish = ''
let price = 0

const pizzaPrices = {
  "ham/cheese pizza": 8,
  "cheese pizza": 7,
  "pepperoni pizza": 9
}

const pastaPrices = {
  "spaghetti bolognese": 10,
  "pasta carbonara": 11,
  "lasagna": 12
}

const saladPrices = {
  "caesar salad": 6,
  "egg salad": 5
}

// Step 3 - Subtype choice
// Pizza
if (foodChoice === 1) {
  alert("In the mood for pizza? You've got it!")
  selectedFood = 'pizza'

  let pizzaChoice = prompt('Would you like a \n1. Ham/Cheese Pizza\n2. Cheese Pizza\n3. Pepperoni Pizza').toLowerCase()
  if (pizzaChoice === '1' || pizzaChoice === 'ham/cheese pizza' || pizzaChoice === 'ham/cheese' || pizzaChoice === 'ham cheese') {
    selectedDish = 'Ham/Cheese Pizza'
    price = pizzaPrices["ham/cheese pizza"]
    alert('Ham/Cheese Pizza!')
  } else if (pizzaChoice === '2' || pizzaChoice === 'cheese pizza' || pizzaChoice === 'cheese') {
    selectedDish = 'Cheese Pizza'
    price = pizzaPrices["cheese pizza"]
    alert('Cheese Pizza!')
  } else if (pizzaChoice === '3' || pizzaChoice === 'pepperoni pizza' || pizzaChoice === 'pepperoni') {
    selectedDish = 'Pepperoni Pizza'
    price = pizzaPrices["pepperoni pizza"]
    alert('Pepperoni Pizza!')
  } else {
    alert('Invalid choice. Please choose a valid pizza type.');
  }

  // Pasta
} else if (foodChoice === 2) {
  alert('Pasta? Bellissimo!')
  selectedFood = 'pasta'

  let pastaChoice = prompt('Would you like \n1. Spaghetti Bolognese\n2. Pasta Carbonara\n3. Lasagna').toLowerCase()
  if (pastaChoice === '1' || pastaChoice === 'pasta bolognese' || pastaChoice === 'bolognese') {
    selectedDish = 'Spaghetti Bolognese'
    price = pastaPrices["spaghetti bolognese"]
    alert('Spaghetti Bolognese!')
  } else if (pastaChoice === '2' || pastaChoice === 'pasta carbonara' || pastaChoice === 'carbonara') {
    selectedDish = 'Pasta Carbonara'
    price = pastaPrices["pasta carbonara"]
    alert('Pasta Carbonara!')
  } else if (pastaChoice === '3' || pastaChoice === 'lasagna') {
    selectedDish = 'Lasagna'
    price = pastaPrices["lasagna"]
    alert('Lasagna!')
  } else {
    alert('Invalid choice. Please choose a valid pasta type.')
  }

  // Salad
} else if (foodChoice === 3) {
  alert('A salad? Great choice!')
  selectedFood = 'salad'

  let saladChoice = prompt('What kind of salad would you like?\n1. Caesar salad\n2. Egg salad').toLowerCase()
  if (saladChoice === '1' || saladChoice === 'caesar' || saladChoice === 'caesar salad') {
    selectedDish = 'Caesar salad'
    price = saladPrices["caesar salad"]
    alert('Caesar salad!')
  } else if (saladChoice === '2' || saladChoice === 'egg' || saladChoice === 'egg salad') {
    selectedDish = 'Egg salad'
    price = saladPrices["egg salad"]
    alert('Egg salad!')
  } else {
    alert('Invalid choice. Please choose a valid salad type.')
  }

} else {
  alert('Invalid choice. Please choose 1, 2, or 3.')
}

// Step 4 - Age
let age = prompt('Is this food for a child or an adult? Type your age:')
let size = ''

if (age <= '17') {
  size = 'kid\'s'
  price *= 0.60
  alert('Let\'s make it a kid\'s size!')
} else if (age >= '18') {
  size = 'adult'
  alert('One adult size coming up!')
}


// Step 5 - Order confirmation

let confirmation = confirm(`Alright ${username}. You have selected a ${selectedDish} in ${size} size. The price is $${price.toFixed(2)}. Would you like to place this order?`)

if (confirmation) {
  alert('Your order has been placed! Thank you!')
} else {
  alert('Order cancelled. Feel free to start again!')
}

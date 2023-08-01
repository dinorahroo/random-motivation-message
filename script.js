const question = ['what is your favorite type of flower and why?', 'where would you like to travel?', 'what is the last funniest thing you heard?', 'what is the best part of your favorite book?']
const action = ['run outside (or inside) like a gorilla', 'go for a swim', 'ask anyone how their day was', 'read for 20 minutes', 'take at least 10 photos of anything random']
function selectRandom(game) {
    return game[Math.floor(Math.random() * game.length)];
}

console.log (`today's writing prompt is '${selectRandom(question)}' and then go and ${selectRandom(action)}`)
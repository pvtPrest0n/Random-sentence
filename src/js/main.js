const phrases = ["He had a hidden stash underneath the floorboards in the back room of the house.", "The fish listened intently to what the frogs had to say.", "Her life in the confines of the house became her new normal.", "Nudist colonies shun fig-leaf couture.", "There was no ice cream in the freezer, nor did they have money to go to the store.", "Waffles are always better without fire ants and fleas.", "Despite multiple complications and her near-death experience", "Writing a list of random sentences is harder than I initially thought it would be.", "As he entered the church he could hear the soft voice of someone whispering into a cell phone."];

console.log(phrases);

function getRandomElement(arr) {
  const randomLine = Math.floor(Math.random() * arr.length);
  return arr[randomLine];
}
const randomElement = getRandomElement(phrases);

const button = document.querySelector(".button");
const phrase = document.querySelector(".phrase");

button.addEventListener("click", function () {
    smoothly(phrase, 'textContent', getRandomElement(phrases));
});

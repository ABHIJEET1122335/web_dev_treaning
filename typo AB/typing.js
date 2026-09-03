const words =
  "Apple, Book, Chair, Door, Elephant, Flower, Garden, House, Island, Jungle, Kite, Library, Mountain, Notebook, Ocean, Pencil, Queen, River, School, Teacher, Umbrella, Village, Window, Yellow, Zebra, Animal, Bicycle, Computer, Doctor, Engine, Family, Friend, Guitar, Hospital, Internet, Journey, Kitchen, Language, Market, Nature, Orange, Planet, Question, Rainbow, Science, Student, Television, University, Victory, Weather, Adventure, Beautiful, Courage, Delicious, Education, Freedom, Happiness, Important, Knowledge, Learning, Morning, Night, Opportunity, Peace, Quality, Respect, Success, Technology, Understanding, Wisdom, Amazing, Bright, Creative, Difficult, Easy, Famous, Generous, Honest, Intelligent, Kind, Lucky, Modern, Natural, Ordinary, Powerful, Quiet, Responsible, Strong, Talented, Useful, Active, Brave, Careful, Dangerous, Excited, Friendly, Great, Helpful, Interesting, Joyful, Keep, Listen, Move, Notice, Open, Play, Read, Speak, Travel, Understand, Visit, Write, Accept, Believe, Change, Discover, Enjoy, Forget, Grow, Hope, Imagine, Join, Know, Learn, Make, Need, Offer, Protect, Remember, Search, Teach, Use, Volunteer, Work, Achieve, Build, Create, Decide, Explore, Find, Give, Help, Improve, Invite, Jump, Kick, Laugh, Meet, Organize, Answer, Begin, Carry, Develop, Enter, Finish, Gather, Hold, Introduce, Lead, Manage, Prepare, Reach, Share, Solve, Think, Try, Win, Young, Zealous, Air, Beach, Cloud, Desert, Earth, Forest, Grass, Hill, Ice, Lake, Moon, Rain, Sky, Sun, Tree, Universe, Valley, Wind, Water, Bread, Cake, Cheese, Dinner, Egg, Fish, Grapes, Honey, Juice, Lemon, Milk, Noodles, Onion, Potato, Rice, Salt, Tomato, Vegetable, Yogurt, Breakfast, Airport, Bridge, Building, Castle, City, Country, Factory, Farm, Hotel, Museum, Office, Palace, Park, Restaurant, Road, Station, Street, Theater, Tower, Zoo, Art, Camera, Dance, Film, Game, History, Idea, Job, Music, News, Painting, Radio, Story, Team, Video, Website, World, Writing, Bus, Car, Driver, Flight, Helmet, Motorcycle, Passenger, Railway, Ship, Taxi, Train, Truck, Vehicle, Wallet, Watch, Bottle, Clock, Clothes, Glass, Key, Lamp, Mirror, Phone, Table, Towel, Backpack, Blanket, Candle, Carpet, Curtain, Desk, Fan, Pillow, Plate, Spoon, Toothbrush, Keyboard, Monitor, Mouse, Printer, Speaker, Tablet, Charger, Headphones, Software"
    .toLowerCase()
    .split(", ");

const wordeCound = words.length;
function addClass(el, name) {
  el.classList.add(name);
}
function removeClass(el, name) {
  el.classList.remove(name);
}

function rendomWord() {
  const rendomeIndex = Math.floor(Math.random() * wordeCound);
  return words[rendomeIndex];
}

function formatword(word) {
  // Added opening <span> before the join and closing </span> after it
  return `<div class='word'><span class="letter">${word.split("").join('</span><span class="letter">')}</span></div>`;
}
function newgame() {
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 300; i++) {
    document.getElementById("words").innerHTML += formatword(rendomWord());
  }
  addClass(document.querySelector(".word"), "current");

  addClass(document.querySelector(".letter"), "current");
}
document.getElementById("game").addEventListener("keyup", (ev) => {
  const key = ev.key;
  const currentword = document.querySelector(".word.current");
  const currentletter = document.querySelector(".letter.current");
  const expect = currentletter?.innerHTML || " ";
  const isletter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  console.log({ key, expect });
  if (isletter) {
    if (currentletter) {
      addClass(currentletter, key === expect ? "correct" : "incorrect");
      removeClass(currentletter, "current");
      addClass(currentletter.nextElementSibling, "current");
    }else{
      const incorrectLeter = document.createElement('span');
      incorrectLeter.innerHTML = key;
      incorrectLeter.className = 'letter incorret extrta'
      currentword.appendChild(incorrectLeter);
    }
  }
  if (isSpace) {
    if (expect !== " ") {
      const lettersToinvalidate = document.querySelectorAll(
        ".word.current .letter:not(.correct)",
      );
      lettersToinvalidate.forEach((letter) => {
        addClass(letter, "incorrect");
      });
    }
    removeClass(currentword, "current");
    addClass(currentword.nextSibling, "current");
    if (currentletter) {
      removeClass(currentletter, "current");
    }
    addClass(currentword.nextSibling.firstChild, "current");
  }
});
newgame();
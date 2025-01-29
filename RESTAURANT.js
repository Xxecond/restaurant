// Get elements
const sections = {
  dish: document.getElementById('dishSection'),
  meat: document.getElementById('meatSection'),
  cocktail: document.getElementById('cocktailSection'),
  accomplice: document.getElementById('accompliceSection'),
  selectedFood: document.getElementById('selectedDish'),
  backBtn: document.getElementById('backButton'),
  confirmBtn: document.getElementById('confirmButton'),
  imgContainer: document.getElementById('dishContainer'),
};

// Define image sources
const images = {
  dishes: {
    jollof: 'von.jpg',
    banku: 'b.jpg',
    yam: 'y.jpg',
    fufu: 'f.jpg',
    indomie: 'i.jpg',
    waakye: 'w.jpg',
    beans: 'b.jpg',
    plantain: 'p.jpg',
    konkonte: 'k.jpg',
  },
  meats: {
    sausage: 'dd.jpg',
    chicken: 'ee.jpg',
    tilapia: 'ff.jpg',
    goatMeat: 'gg.jpg',
    cowMeat: 'hh.jpg',
    egg: 'ii.jpg',
    salmon: 'jj.jpg',
  },
  cocktails: {
    coke: 'ww.jpg',
    shawarma: 'yy.jpg',
    appleJuice: 'zz.jpg',
    fanta: 'ss.jpg',
    vitamilk: 'kk.jpg',
  },
  accomplices: {
    okroStew: 'ab.jpg',
    tomatoeStew: 'bc.jpg',
    kontomireStew: 'gh.jpg',
    gardeneggStew: 'de.jpg',
    lightSoup: 'fg.jpg',
    groundnutSoup: 'ar.jpg',
    palmnutSoup: 'sd.jpg',
  },
};


// Initialize history
let history = [];
// Function to select dish
function selectDish(dish) {
  history.push(sections.dish);
  sections.dish.classList.add('hidden');
  const dishImage = document.createElement('img');
  dishImage.src = images.dishes[dish];
  dishImage.alt = `${dish} Image`;
  sections.imgContainer.appendChild(dishImage);
  sections.selectedFood.classList.remove('hidden');
  sections.meat.classList.remove('hidden');
  document.getElementById("backButton").classList.remove("hidden");
}


// Function to select meat
function selectMeat(meat) {
  history.push(sections.meat);
  sections.meat.classList.add('hidden');
  const meatImage = document.createElement('img');
  meatImage.src = images.meats[meat];
  meatImage.alt = `${meat} Image`;
  sections.imgContainer.appendChild(meatImage);
  sections.cocktail.classList.remove('hidden');
  sections.accomplice.classList.remove('hidden');
  sections.confirmBtn.classList.remove('hidden'); // Show confirm button when selecting meat
}

// Function to select cocktail
function selectCocktail(cocktail) {
  history.push(sections.cocktail);
  sections.cocktail.classList.add('hidden');
  const cocktailImage = document.createElement('img');
  cocktailImage.src = images.cocktails[cocktail];
  cocktailImage.alt = `${cocktail} Image`;
  sections.imgContainer.appendChild(cocktailImage);
  sections.accomplice.classList.remove('hidden');
}

// Function to select accomplice
function selectAccomplice(accomplice) {
  history.push(sections.accomplice);
  sections.accomplice.classList.add('hidden');
  const accompliceImage = document.createElement('img');
  accompliceImage.src = images.accomplices[accomplice];
  accompliceImage.alt = `${accomplice} accomplice`;
  sections.imgContainer.appendChild(accompliceImage);
}


function resetBackButton() {
  sections.backBtn.style.display = 'block'; // Show back button
  sections.backBtn.classList.remove('hidden'); // Ensure it's not hidden
}

// Function to go back
function goBack() {
sections.backBtn.style.display = 'none';
sections.backBtn.classList.add('hidden');
  if (history.length > 0) {
    const lastState = history.pop();
    switch (lastState) {
      case sections.dish:
        sections.dish.classList.remove('hidden');
        sections.selectedFood.classList.add('hidden');
        sections.meat.classList.add('hidden');
        sections.cocktail.classList.add('hidden');
        sections.accomplice.classList.add('hidden');
        sections.backBtn.style.display = 'none'; // Hide back button when going back to dish section
        sections.backBtn.classList.add('hidden'); // Add hidden class to back button
        sections.confirmBtn.classList.add('hidden');
        while (sections.imgContainer.children.length > 1) {
          sections.imgContainer.children[sections.imgContainer.children.length - 1].remove();
        }
        break;
      case sections.meat:
        sections.meat.classList.remove('hidden');
        sections.cocktail.classList.add('hidden');
        sections.accomplice.classList.add('hidden');
        sections.backBtn.style.display = 'block'; // Show back button when going back to meat section
        sections.backBtn.classList.remove('hidden'); // Remove hidden class from back button
        sections.confirmBtn.classList.add('hidden');
        if (sections.imgContainer.children.length > 2) {
          sections.imgContainer.children[sections.imgContainer.children.length - 1].remove();
        }
        break;
      case sections.cocktail:
        sections.cocktail.classList.remove('hidden');
        sections.accomplice.classList.add('hidden');
        sections.backBtn.style.display = 'block'; // Show back button when going back to cocktail section
        sections.backBtn.classList.remove('hidden'); // Remove hidden class from back button
        sections.confirmBtn.classList.add('hidden');
        if (sections.imgContainer.children.length > 3) {
          sections.imgContainer.children[sections.imgContainer.children.length - 1].remove();
        }
        break;
      case sections.accomplice:
        sections.accomplice.classList.remove('hidden');
        sections.backBtn.style.display = 'block'; // Show back button when going back to accomplice section
        sections.backBtn.classList.remove('hidden'); // Remove hidden class from back button
        sections.confirmBtn.classList.remove('hidden');
        if (sections.imgContainer.children.length > 4) {
          sections.imgContainer.children[sections.imgContainer.children.length - 1].remove();
        }
        break;
    }
  }
}

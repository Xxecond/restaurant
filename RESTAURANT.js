const sectOne = document.getElementById('sec-1');  
const dishPic = document.getElementById('dishImage');  
const selectedFood = document.getElementById('selectedDish');  
const backBtn = document.getElementById('backButton');  
const confirmBtn = document.getElementById('confirmButton');  
const dishStn = document.getElementById('dishSection');  
const meatStn = document.getElementById('meatSection');  
const cocktailStn = document.getElementById('cocktailSection');  
const accompliceStn = document.getElementById('accompliceSection');  
const imgContainer = document.getElementById('dishContainer');  
  
const dishImages = {  
  jollof: 'von.jpg',  
  banku: 'b.jpg',  
  yam: 'y.jpg',  
  fufu: 'f.jpg',  
  indomie: 'i.jpg',  
  waakye: 'w.jpg',  
  beans: 'b.jpg',  
  plantain: 'p.jpg',  
  konkonte: 'k.jpg'  
};  
  
const meatImages = {  
  sausage: 'dd.jpg',  
  chicken: 'ee.jpg',  
  tilapia: 'ff.jpg',  
  goatMeat: 'gg.jpg',  
  cowMeat: 'hh.jpg',  
  egg: 'ii.jpg',  
  salmon: 'jj.jpg',  
};  
  
const cocktailImages = {  
  coke: 'ww.jpg',  
  shawarma: 'yy.jpg',  
  appleJuice: 'zz.jpg',  
  fanta: 'ss.jpg',  
  vitamilk: 'kk.jpg'  
};  
  
const accomplicesImages = {  
  okroStew: 'ab.jpg',  
  tomatoeStew: 'bc.jpg',  
  kontomireStew: 'gh.jpg',  
  gardeneggStew: 'de.jpg',  
  lightSoup: 'fg.jpg',  
  groundnutSoup: 'ar.jpg',  
  palmnutSoup: 'sd.jpg',  
};  
  
let history = [];  
function selectDish(dish) {  
  history.push(dishStn);  
  dishStn.classList.add("hidden");  
  dishPic.src = dishImages[dish];
  
  const dishImage = document.createElement("img");  
  dishImage.src = dishImages[dish];  
  dishImage.alt = `${dish} Image`;  
  imgContainer.appendChild(dishImage); 
  selectedFood.classList.remove("hidden");  
  meatStn.classList.remove("hidden");   
  backBtn.classList.remove("hidden");  
};  

function selectMeat(meat) {  
  history.push(meatStn);  
  meatStn.classList.add("hidden");  
  const meatImage = document.createElement("img");  
  meatImage.src = meatImages[meat];  
  meatImage.alt = `${meat} Image`;  
  imgContainer.appendChild(meatImage);  
  cocktailStn.classList.remove("hidden"); 
  confirmBtn.classList.add("hidden");  
  backBtn.classList.remove("hidden");
}

function selectCocktail(cocktail) {  
  history.push(cocktailStn);  
  cocktailStn.classList.add("hidden");  
  const cocktailImage = document.createElement('img');  
  cocktailImage.src = cocktailImages[cocktail];  
  cocktailImage.alt = `${cocktail} Image`; 
  imgContainer.appendChild(cocktailImage);  
  backBtn.classList.remove("hidden"); 
  confirmBtn.classList.remove("hidden");  
  accompliceStn.classList.remove("hidden");
};  
  


function selectAccomplice(accomplice) {  
  history.push(accompliceStn);  
  accompliceStn.classList.add("hidden");  
  const accompliceImage = document.createElement("img");  
  accompliceImage.src = accomplicesImages[accomplice];  
  accompliceImage.alt = `${accomplice} accomplice`;  
  imgContainer.appendChild(accompliceImage);  
  confirmBtn.classList.add("hidden");
  backBtn.classList.remove("hidden");
};  
  
function confirmOrder() {  
  alert("Thank you for your order!");  
}  
  
function goBack() {  
  if (history.length > 0) {  
   const lastState = history.pop();  
   switch (lastState) {  
    case dishStn:  
      dishStn.classList.remove("hidden");  
      selectedFood.classList.add("hidden");  
      meatStn.classList.add("hidden");  
      backBtn.classList.add("hidden");    
      break;  
    case meatStn:  
      meatStn.classList.remove("hidden");  
      cocktailStn.classList.add("hidden");  
      confirmBtn.classList.add("hidden");  
      const images = imgContainer.children;  
      if (images.length > 1) {  
       images[images.length - 1].remove();  
      }  
      break;  
    case cocktailStn:  
      cocktailStn.classList.remove("hidden");  
      const cocktailImages = imgContainer.children;  
      if (cocktailImages.length > 2) {  
       cocktailImages[cocktailImages.length - 1].remove();  
      }  
      break;  
   }  
  }  
}

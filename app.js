// const title = document.getElementsByTagName("li")
// console.log(title);

// const text = document.getElementById("title")
// console.log(text);


/*const nameEl = document.getElementById('name')



const names = [
  "Jasur",
  "Dostonbek",
  "Jo'rabek",
  "Munisaxon",
  "Murodil",
  "Shavkatbek",
  "Xurshidbek",
  "Abrorbek",
  "Begzod",
];

const colors = [
  "#1AACAC",
  "#FACBEA",
  "#445D48",
  "#D80032",
  "#FFB000",
  "#FF3FA4",
  "#9400FF",
  "#D2DE32",
  "#F6635C",
];

const randomNumberNames = Math.trunc(Math.random() * names.length)
const randomNumberColor = Math.trunc(Math.random() * colors.length)

nameEl.textContent = names[randomNumberNames];
nameEl.style.color = colors[randomNumberColor]*/

const titleEL = document.getElementById("title")
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const backColor = document.getElementById("body")

const randomN1 = Math.trunc(Math.random() * 6) + 1
const randomN2 = Math.trunc(Math.random() * 6) + 1

image1.src = `./img/image-${randomN1}.png`
image2.src = `./img/image-${randomN2}.png`

if(randomN1 > randomN2){
    titleEL.textContent = "Player 1 Win !";
    backColor.style.backgroundColor = "red"
}else if(randomN2 > randomN1){
    titleEL.textContent = "Player 2 Win !"
    backColor.style.backgroundColor = "blue"
}else{
    titleEL.textContent = "DRAW !"
    backColor.style.background = "linear-gradient(90deg, blue, red)"
}
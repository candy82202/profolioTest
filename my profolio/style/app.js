const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()} `);
}

//這裡要記得自己動畫裡面最後一個字的id設定什麼，再套用上去
const lastWord = document.querySelector("#zhSeventh");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition:all 1s ease;opacity:0;pointer-even:none";
});

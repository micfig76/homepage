console.log("Cześć!");
let NaglowekPomocniczy = document.querySelector(".NaglowekPomocniczy");
let przycisk = document.querySelector(".przycisk");

przycisk.addEventListener("click", () => {
    NaglowekPomocniczy.remove();
});

console.log(przycisk);
let kagebunshin = document.querySelector(".kagebunshin");
let btn_kagebunshin = document.querySelector(".btn-kagebunshin");

btn_kagebunshin.addEventListener("click", () => {
  for (let i = 0; i < 100; i++) {
    let naruto = document.createElement("img");
    naruto.classList.add("naruto");
    naruto.style.cssText = `position:absolute; top:${Math.floor(Math.random() * 100) + 1}%;
    left :${Math.floor(Math.random() * 100) + 1}%;`;

    naruto.src = "naruto.png";
    kagebunshin.appendChild(naruto);
  }
});
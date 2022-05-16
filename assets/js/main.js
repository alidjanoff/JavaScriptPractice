/* ------------------------------- START TASKS ------------------------------ */

// Start Task 1
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  alert("Tapşırıq yerinə yetirildi !");
});
// End Task 1

// Start Task 2
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("mouseover", () => {
  alert("Tapşırıq yerinə yetirildi !");
});
// End Task 2

// Start Task 3
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("dblclick", () => {
  alert("Tapşırıq yerinə yetirildi !");
});
// End Task 3

// Start Task 4
let box = document.querySelector(".redBox");
box.addEventListener("mouseout", () => {
  alert("Tapşırıq yerinə yetirildi !");
});
// End Task 4

// Start Task 5
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
  let inp5 = document.querySelector("#task5").value;
  alert(inp5);
});
// End Task 5

// Start Task 6
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
  document.querySelector("#task6").value = "Afərin";
});
// End Task 6

// Start Task 7
let btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
  document.querySelector("#task7Img").src = "./assets/images/2.jpg";
});
// End Task 7

// Start Task 8
let inp8 = document.querySelector("#task8");
inp8.addEventListener("click", () => {
  alert(inp8.value);
});
// End Task 8

// Start Task 9
let inp9 = document.querySelector("#task9");
inp9.addEventListener("click", () => {
  inp9.value = "Afərin";
});
// End Task 9

// Start Task 10
let inp10 = document.querySelector("#task10");
inp10.onfocus = inp10Focus;
inp10.onblur = inp10Blur;
function inp10Focus() {
  inp10.value = "Afərin";
}
function inp10Blur() {
  inp10.value = "Buraya click-et";
}
// End Task 10

// Start Task 11
let inp11 = document.querySelector("#task11");
inp11.addEventListener("click", () => {
  inp11.value = "Afərin";
});
// End Task 11

// Start Task 12
let inp12 = document.querySelector("#task12");
inp12.addEventListener("click", () => {
  inp12.disabled = true;
});
// End Task 12

// Start Task 13
let task13 = document.querySelector("#task13Img");
task13.addEventListener("mouseover", () => {
  document.querySelector("#task13Img").src = "./assets/images/2.jpg";
});
task13.addEventListener("mouseout", () => {
  document.querySelector("#task13Img").src = "./assets/images/1.jpg";
});
// End Task 13

// Start Task 14
let btn14 = document.querySelector("#btn14");
btn14.addEventListener("click", () => {
  document.querySelector("#task14").style = "width: 500px; color: red;";
});
// End Task 14

// Start Task 15
let btn15Off = document.querySelector("#btn15Off");
let btn15On = document.querySelector("#btn15On");
btn15Off.addEventListener("click", () => {
  document.querySelector("#task15").style = "display: none;";
});
btn15On.addEventListener("click", () => {
  document.querySelector("#task15").style = "display: block;";
});
// End Task 15

// Start Task 16
let btn16 = document.querySelector("#btn16");
btn16.addEventListener("click", () => {
  document.querySelector("#task16").style =
    "width: 500px; height: 100px; border: 2px solid purple; color: red;";
});
// End Task 16

// Start Task 17
let btn17On = document.querySelector("#task17On");
let btn17Off = document.querySelector("#task17Off");
btn17On.style.display = "none";
btn17Off.addEventListener("click", () => {
  btn17On.style.display = "";
  btn17Off.value = "Artıq bura deaktivdir";
  btn17Off.disabled = true;
  turn();
});
function turn() {
  btn17On.addEventListener("click", () => {
    btn17On.style.display = "none";
    btn17Off.value = "Deaktiv Et";
    btn17Off.disabled = false;
  });
}
// End Task 17

// Start Task 18
let btn18 = document.querySelector("#task18");
btn18.addEventListener("click", () => {
  btn18.value++;
});
// End Task 18

// Start Task 19
let btn19 = document.querySelector("#btn19");
let inp19 = document.querySelector("#task19");
btn19.addEventListener("click", () => {
  task19.style = "transform: translateY(45px); transition: 0.4s ease-in-out;";
  btn19.style = "transform: translateY(-40px);";
});
// End Task 19

// Start Task 20
let btn20 = document.querySelector("#btn20");
let inp20 = document.querySelector("#task20");
btn20.addEventListener("click", () => {
  inp20.value = "Mənim class name-im:" + " " + btn20.className;
});
// End Task 20

// Start Task 21
let btn21 = document.querySelector("#btn21");
btn21.addEventListener("click", () => {
  let task21 = document.querySelector("#task21").value;
  let inp21 = document.querySelector("#inp21").value;
  document.querySelector("#inp21").value = task21;
  document.querySelector("#task21").value = inp21;
});
// End Task 21

// Start Task 22
let btn22 = document.querySelector("#btn22");
let inp22 = document.querySelector("#task22");
document.querySelector("#answ22").disabled = true;
btn22.addEventListener("click", () => {
  inp22.value.trim();
  document.querySelector("#answ22").value = inp22.value ** 2;
  inp22.value = "";
});
// End Task 22

// Start Task 23

let btn23 = document.querySelector("#btn23");
document.querySelector("#answ23").disabled = true;

btn23.addEventListener("click", () => {
  let inp23 = document.querySelector("#task23");
  inp23.value.trim();
  if (isNaN(inp23.value)) {
    alert("Yalnız rəqəm daxil edilə bilər !");
  } else if (inp23.value == " ") {
    alert("Xana boş ola bilməz !");
  } else {
    document.querySelector("#answ23").value = inp23.value ** 2;
  }
  inp23.value = "";
});

// End Task 23

// Start Task 24
let btn24 = document.querySelector("#btn24");
btn24.addEventListener("click", () => {
  btn24.disabled = true;
  btn24.style = "cursor: not-allowed;";
});
// End Task 24

/* -------------------------------- END TASKS ------------------------------- */

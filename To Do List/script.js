const inputbox = document.getElementById("input-task");
const UL_list = document.getElementById("lists");

function addtask() {
  if (inputbox.value === "") {
    alert("You must write something!! You dumb ass!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    UL_list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  savedata();
}

UL_list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

inputbox.addEventListener(
  "keydown",
  function (e) {
    if (e.key === "Enter") {
      if (inputbox.value === "") {
        alert("You must write something!! You dumb ass!!");
      } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        UL_list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      }
      inputbox.value = "";
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", UL_list.innerHTML);
}

function showtask() {
  UL_list.innerHTML = localStorage.getItem("data");
}

showtask();

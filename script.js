let userinput = document.getElementById("userinput");
let op = document.getElementById("output");
let tbody = document.querySelector("#tbody");
let tbody1 = document.querySelector("#tbody1");
let displayButton = document.querySelector("#display");
let Input = document.querySelector("#inputtext");
const err = document.getElementById("error");

console.log(displayButton);

let InputArray = new Array();

displayButton.addEventListener("click", displayAll);

function displayAll() {
  let record = Input.value;

  if (!record) {
    return;
  }

  InputArray.push(record);
  document.querySelector("#inputtext").value = "";
  userinput.innerHTML = InputArray;
  InputArray = InputArray[0].split(" ");
  console.log(InputArray);
  let size = InputArray.length;

  let flag = false;
  if (InputArray.length > 10) {
    flag = true;
    err.innerHTML = "Problem array length should be less or equal than 10.";
    Input.value = "";
    return;
  }
  main(size);
}

// Main function is use to create table
function main(size) {
  let left = [];

  left.push(InputArray[0]);
  left[0] = InputArray[0];
  for (let i = 1; i < size; i++) {
    left.push(Math.max(left[i - 1], InputArray[i]));
  }

  let right = new Array(size).fill(0);
  right[size - 1] = InputArray[size - 1];
  for (let i = size - 2; i > 0; i--) {
    right[i] = Math.max(right[i + 1], InputArray[i]);
  }

  let add = 0;
  let watercontainer = new Array(size);
  for (let i = 0; i < size; i++) {
    let value = Math.min(left[i], right[i]) - InputArray[i];
    if (value > 0) {
      add += value;
    }

    watercontainer[i] = value;
  }

  let unit = add > 1 ? "Units" : "Unit";

  op.innerHTML = `${add} ${unit}`; // use to show number of units

  // 72-87 line code is use to show wall

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      let td = document.createElement("td");

      tr.append(td);
      let value = size - InputArray[j];

      if (i >= value) {
        td.classList.add("tank");
      }

      td.id = "t1" + i + "-" + j;
      tbody.append(tr);
    }
  }

  // 89-100 line code is to show how much water contain

  for (let j = 0; j < size; j++) {
    if (watercontainer[j] <= 0) {
      continue;
    } else {
      let startindex = size - Math.min(right[j], left[j]);
      let endindex = size - InputArray[j];

      for (let i = startindex; i < endindex; i++) {
        let store = document.getElementById("t1" + i + "-" + j);
        store.classList.add("water");
      }
    }
  }

  // *********************output table******************************
  // below code is only to show the water contain

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      let td = document.createElement("td");

      tr.append(td);

      td.id = "t2" + i + "-" + j;
      tbody1.append(tr);
    }
  }

  for (let j = 0; j < size; j++) {
    if (watercontainer[j] <= 0) {
      continue;
    } else {
      let startindex = size - Math.min(right[j], left[j]);
      let endindex = size - InputArray[j];

      for (let i = startindex; i < endindex; i++) {
        let store = document.getElementById("t2" + i + "-" + j);
        store.classList.add("water");
      }
    }
  }
}

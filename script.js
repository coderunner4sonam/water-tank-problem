let userinput = document.getElementById("userinput");
let op = document.getElementById("output");
let tbody = document.querySelector("tbody");

let size = 10;
let InputArray = [2, 8, 9, 6, 0, 9, 4, 5, 2, 7];
// let InputArray=new Array(size);

// for(let i=0;i<size;i++){
//     InputArray[i]= prompt("enter values")
// }

for (let i = 0; i < size; i++) {
  document.write(InputArray[i] + " ");
}

let left = [];

left.push(InputArray[0]);
left[0] = InputArray[0];
for (let i = 1; i < size; i++) {
  left.push(Math.max(left[i - 1], InputArray[i]));
}
console.log(left);

let right = new Array(10);
right[size - 1] = InputArray[size - 1];
for (let i = size - 2; i >= 0; i--) {
  right[i] = Math.max(right[i + 1], InputArray[i]);
}
console.log(right);

let add = 0;
for (let i = 0; i < size; i++) {
  add += Math.min(left[i], right[i]) - InputArray[i];
}

console.log(add);

op.innerHTML += add;

for (let i = 0; i < size; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < size; j++) {
    let td = document.createElement("td");
    tr.append(td)
   let value= size-InputArray[j]//9-2

   if(i>=value){
    td.classList.add("tank")
   }
   
   if(InputArray[j]==0){
    td.classList.add("water")
   }
  tbody.append(tr);
}
}


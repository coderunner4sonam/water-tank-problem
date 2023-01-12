let userinput = document.getElementById("userinput");
let op = document.getElementById("output");
let tbody = document.querySelector("#tbody");

let tbody1 = document.querySelector("#tbody1");
console.log(tbody)
console.log(tbody1)

let size = 10;
let InputArray = [2, 8, 0, 6, 0, 9, 4, 5, 2, 7];
console.log(InputArray);
// let InputArray=new Array(size);

// for(let i=0;i<size;i++){
//     InputArray[i]= prompt("enter values")
// }
userinput.innerHTML += InputArray;
// for (let i = 0; i < size; i++) {
//   document.write(InputArray[i] + " ");
// }

let left = [];

left.push(InputArray[0]);
left[0] = InputArray[0];
for (let i = 1; i < size; i++) {
  left.push(Math.max(left[i - 1], InputArray[i]));
}
console.log(left);

let right = new Array(10).fill(0);
console.log(right)
right[size - 1] = InputArray[size - 1];
for (let i = size - 2; i > 0; i--) {
  right[i] = Math.max(right[i + 1], InputArray[i]);
}
console.log(right);

let add = 0;
let watercontainer=new Array(10);
for (let i = 0; i < size; i++) {
  let value= Math.min(left[i], right[i]) - InputArray[i];
    if(value>0){
      add+=value;
    
    }
    console.log(value)
    watercontainer[i]=value;
}
console.log(watercontainer);
console.log(add);

// op.innerHTML += add;

for (let i = 0; i < size; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < size; j++) {
    let td = document.createElement("td");

    tr.append(td);
    let value = size - InputArray[j]; //9-2

    if (i >= value) {
      td.classList.add("tank");
    }
    // 2, 8, 0, 6, 0, 9, 4, 5, 2, 7
    // 0  1  2  3  4  5   6  7  8  9
    //  td.classList.add(i + "-" + j) // for check
    td.id="t1" + i + "-" + j
    tbody.append(tr);
  }
}

for(let j=0;j<size;j++){

    if(watercontainer[j]<=0){
      continue;
    }
    else{
     let startindex=size-Math.min(right[j],left[j]);
     let endindex=size-InputArray[j];

      for(let i=startindex;i<endindex;i++){
         let store= document.getElementById("t1" +i + "-" + j)
         store.classList.add("water");
      }
    }

}

// *********************output table******************************
console.log(tbody1);

for (let i = 0; i < size; i++) {
  let tr = document.createElement("tr");
  for (let j = 0; j < size; j++) {
    let td = document.createElement("td");

    tr.append(td);
    
    td.id="t2" +i + "-" + j
    tbody1.append(tr); 
    console.log(i , j)
  }

}

for(let j=0;j<size;j++){

  if(watercontainer[j]<=0){
    continue;
  }
  else{
   let startindex=size-Math.min(right[j],left[j]);
   let endindex=size-InputArray[j];

    for(let i=startindex;i<endindex;i++){
       let store= document.getElementById("t2" +i + "-" + j)
       store.classList.add("water");
    }
  }

}





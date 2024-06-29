// TASK # 01


let arr = [1, 2, 3, 4, 5];


arr.splice(0, 2); 



arr.push(6, 7, 8); 
// console.log(arr);



 using a for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// // TASK # 02

let arr = [1,2,3,4,5];
for( let i=0; i< arr.length; i++)
    {
    if(arr[i] % 2 === 0 )
        {
            console.log(i);
        }
}


// TASK # 03

let arr = [3,4,5];

arr.unshift(1,2);


arr.pop();

for(i=0 ; i<=arr.length;i++){
    console.log(arr[i]);
}


// TASK # 04


let arr = [1, 2, 3, 4, 5];


for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    console.log(arr[i]);
  }
}

// TASK # 05


let arr = [1,2,3,4,5];

let index= arr.indexOf(3);
// console.log(index);

arr.splice(index);

for(i=0;i<= arr.length;i++){
    console.log(arr[i]);
}




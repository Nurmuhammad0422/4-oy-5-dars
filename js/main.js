1 - Vazifa;
// 1-.
const arr = [
  {
    id: 1,
    name: "Botir",
    age: 20,
    hobby: "Football",
  },
  {
    id: 2,
    name: "Anvar",
    age: 22,
    hobby: "Basketball",
  },
  {
    id: 3,
    name: "Shohrux",
    age: 20,
    hobby: "Football",
  },
  {
    id: 4,
    name: "Akram",
    age: 22,
    hobby: "Basketball",
  },
];
function getHobbies(arr) {
  return arr.map((item) => [item.age, item.hobby]).flat();
}
console.log(getHobbies(arr));
// 2-.
const nums = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(nums));
// 3-.
const numbers = [22, 112, 3, 4, 222, 123, 43];

function addMaxToFirstElement(arr) {
  const max = Math.max(...arr);
  const newArr = [...arr];
  newArr[0] += max;
  return newArr;
}

console.log(addMaxToFirstElement(numbers));
// 4-.
function addNameToArr(arr) {
  const name = prompt("Ism kiriting:");
  const exists = arr.some((item) => item === name);
  if (!exists) arr.push(name);
  return arr;
}

console.log(addNameToArr(["Akram", "Botir", "Nurmuhammad"]));
// 5-.
function collectNumbers() {
  let nums = [];
  let num;
  do {
    num = prompt("Son kiriting (Yakunlash uchun bo'sh qoldiring):");
    if (num) nums.push(Number(num));
  } while (num);
  return nums.reverse();
}

console.log(collectNumbers());

// 2-VAZIFA
// 1-.
let person = {
  name: "Abdulloh",
  age: 19,
  job: "Logistic company",
  interest: "game",
  hobby: "sleep",
  number: "+998944683325",
  username: "AU",
};
for (let key in person) {
  console.log(`${key} - ${person[key]}`);
}
// 2-.
const person1 = {
  name: "Abdulloh",
  age: 19,
};

const person2 = {
  hobby: "Volleybol",
  interest: "Sleep",
};

const mergedPerson = Object.assign({}, person1, person2);
console.log(mergedPerson);
// 3-.
function addOneToEnd(arr) {
  const lastValue = arr[arr.length - 1];
  arr.push(lastValue + 1);
  return arr;
}

const number1 = [1, 2, 3, 4];
console.log(addOneToEnd(number1));
// 4-.
function processArray(arr) {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  if (arr[0] % 2 === 0) {
    arr.unshift(sum);
  } else {
    arr.push(sum);
  }
  return arr;
}

const number = [2, 3, 4];
console.log(processArray(number));
// 5-.
function swapFirstAndLast(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}

const number2 = [1, 2, 3, 4, 5];
console.log(swapFirstAndLast(number2));
// 6-.
function recursivePrompt(arr = []) {
  if (arr.length === 6) return arr;
  const word = prompt("So'z kiriting:");
  arr.push(word);
  return recursivePrompt(arr);
}

console.log(recursivePrompt());

// 3-VAZIFA
// 1-.
function createArrayBySize() {
  const size = parseInt(prompt("Array hajmini kiriting:"), 10);
  const arr = [];

  for (let i = 0; i < size; i++) {
    const id = i + 1;
    const name = prompt("Ismni kiriting:");
    arr.push({ id, name });
  }

  console.log(arr);
}

createArrayBySize();
// 2-.
function uniqueArray(arr1) {
  return [...new Set(arr1)];
}

const arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
console.log(uniqueArray(arr1));
// 3-.
function findIndexInArray(arr) {
  const num = parseInt(prompt("Sonni kiriting:"), 10);
  const index = arr.indexOf(num);
  return index !== -1 ? index : "Son topilmadi";
}

const arr2 = [88, 75, 342, 21, 45, 67];
console.log(findIndexInArray(arr2));
// 4-.
function removeFromArray(arr2) {
  const num = parseInt(prompt("Sonni kiriting:"), 10);
  const index = arr2.indexOf(num);

  if (index !== -1) {
    arr2.splice(index, 1);
  }

  console.log(arr2);
}

const arr3 = [88, 75, 342, 21, 45, 67];
removeFromArray(arr3);
// 5-.
function maxPairSum(arr4) {
  let maxSum = -Infinity;

  for (let i = 0; i < arr4.length - 1; i++) {
    for (let j = i + 1; j < arr4.length; j++) {
      const sum = arr4[i] + arr4[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}

const arr4 = [1, 2, 3, 4, 5];
console.log(maxPairSum(arr4));

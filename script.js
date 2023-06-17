let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];


// ...................Map function..........................

arr.map(PrintDeveloperbyMap)

function PrintDeveloperbyMap(value) {
    if(value.profession === "developer")
    console.log(value.name)
}
  

// ...................forEach function..........................

arr.forEach(PrintDeveloperbyForEach);

function PrintDeveloperbyForEach(value) {
    if(value.profession === "developer")
    console.log(value.name)
}
  

//...................Adding object to array ..........................

function addData(Arr, obj) {
    Arr.push(obj);
    console.log(Arr); //printing newArray
}

//Creating Object
let employee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }

  addData(arr, employee);

  
// ...................remove object ..........................

console.log(arr.filter(removeAdmin));

function removeAdmin(value){  //object remove function
  if(value.profession !== "admin"){
      return value;
  }
}



// ...................Concatinate 2 Array..........................

  function concatenateArray(arr, newArray) { // array concating
    mergeArray = arr.concat(newArray);
    console.log(mergeArray);
  }
  
  //newArray create
  let newArray = [
    { id: 4, name: "Adarsh", age: "22", profession: "PhotoGrapher" },
    { id: 5, name: "Swapnil", age: "23", profession: "Business man" },
    { id: 6, name: "Satyam", age: "21", profession: "Design Engineer" },
  ]

  let mergeArray = []; 
  //concate function
  concatenateArray(arr, newArray);

 // ...................END..........................


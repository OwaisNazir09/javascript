//stack and heap memory 
// premitive data types stack memory non premitive types uses heap memory
//In stackk you a copy of an elemnt where in heap you get refrence means your new values will be change its all initial valuus
//e.g
let a ="owais dar"
let b = a
console.log(a)
console.log(b)

// you can see the values of both will be sakme even if you change the value of b
b = "inayat khaalel" 
console.log(b)



// Heap: Non-primitive data types (objects)
let user = {
    name: "owais dar",
    rollno: 272
};

// Both user and user2 reference the same object in the heap.
let user2 = user;

// Modifying the object through user2 affects user as well.
user2.name = "inayat rouf";

console.log(user.name);  // Output: inayat rouf
console.log(user2.name); // Output: inayat rouf
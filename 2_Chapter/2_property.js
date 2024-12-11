let person = {name : "manikandan"};

//only print the person inside keys only
for(let key in person){
    console.log(key);
}

//lets print only values within array
console.log(Object.keys(person));

//get the object PrototypeOf person
let objectBase = Object.getPrototypeOf(person);
console.log(objectBase);

// it is return object(PropertyDescriptor) to attached toString
let descriptor=  Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

//



let car = { 
    type: "Honda", 
    model: "Civic", 
    color: "Blue"   
};
    
console.log(typeof car);  
// Output: "object"
    
car.type = "Toyota";    
console.log(car); // Output: { type: 'To yota', model: 'Civic', color: 'Blue' }
    

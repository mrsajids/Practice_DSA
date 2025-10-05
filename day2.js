// Count how many times each letter appears
const str = "my name is khan what is your name"
const count = {}

for (let index = 0; index < str.length; index++) {
    const element = str[index];
    // console.log(count[element]);
    
    if(count[element])
        count[element]= count[element]+1;
    else 
        count[element]= 1;
    
        
}
console.warn(count);

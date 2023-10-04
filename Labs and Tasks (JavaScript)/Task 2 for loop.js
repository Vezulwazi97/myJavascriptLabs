let first = Number(prompt('Enter first number'))
let second =Number(prompt('Enter second number'))

if(!Number.isNaN(first) && !Number.isNaN(second) && first > second){
for (i=first; i>=second; i=i-10){
    console.log(i);
}
}
else{
    alert('Not Valid')
}
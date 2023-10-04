let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (let display of numbers){
    console.log(display);
}

for (let display of numbers){
     if(display%2 === 0){
    console.log(display);
}
}

for (let display of numbers){
     if(display > 10 && display < 60){
        console.log(display);}
}
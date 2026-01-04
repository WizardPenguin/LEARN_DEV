// break keywork

// continue keyword 

for(let i = 1; i<=5; i++){
    if(i===4){
        break;
    }
    console.log(i);
}
console.log("broken");
for(let i = 1; i<6; i++){
    if(i===4){
        continue;
    }
    console.log(i);
}
console.log("sorry skipped (continue)");

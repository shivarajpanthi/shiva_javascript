let marks = "70";
switch (true) {
    case marks < 40:
        console.log("fail");
        break;
    case marks > 40:
        console.log("pass");
        break;
    default:
        console.log("first division");
        break;
}

let i = 1
for (i; i < 6; i += 2) {
    console.log(i);
}

let k = 0
do {
    console.log(k);
    k++;
}while(k<5)
console.log("Hello world.");

document.getElementById("root").innerHTML = 'Merhaba';

let i = 1;
while (i<10) {
    
    const element = document.createElement("div");
    element.innerHTML = i;
    document.getElementById("root").append(element);
    console.log(i);
    i = i +1;
}

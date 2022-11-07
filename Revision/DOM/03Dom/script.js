let red = document.getElementsByClassName("color")[0];
let cyan= document.getElementsByClassName("color")[1];
let violet = document.getElementsByClassName("color")[2];
let orange = document.getElementsByClassName("color")[3];
let pink = document.getElementsByClassName("color")[4];

let center = document.querySelector(".center");



// console.log(window.getComputedStyle(redColor));

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};


// console.log(getBackgroundColor(pinkColor));


const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChanger(red, getBackgroundColor(red));
magicColorChanger(cyan, getBackgroundColor(cyan));
magicColorChanger(violet, getBackgroundColor(violet));
magicColorChanger(orange, getBackgroundColor(orange));
magicColorChanger(pink, getBackgroundColor(pink));



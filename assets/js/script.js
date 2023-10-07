let i = 0;//current slide
let j = 4;//total slides

const dots = document.querySelectorAll(".dot-content button");
const images = document.querySelectorAll(".image-slider img");
// console.log(images)
console.log(dots);
function next()
{
    document.querySelector("#content" + (i + 1)).
        classList.remove("active");
    i = (j + i + 1) % j;
    document.querySelector("#content" + (i + 1)).
        classList.add("active");
    indicator(i + 1);
}

function prev()
{
    document.querySelector("#content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.querySelector("#content" + (i + 1)).classList.add("active");
}

function indicator(num)
{
    dots.forEach(function (dot)
    {
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-content button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
}

function dot(index)
{
    images.forEach(function (image)
    {
        image.classList.remove("active");
    });

    document.querySelector("#content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
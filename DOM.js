
const text = document.querySelector(".RedRoo");
const bluecolor = document.querySelector(".Bluetoo");
const changeColor = document.querySelector(".changeColor"); 

text.style.color = "red";
bluecolor.style.color = "blue";

const elem = document.createElement("div");
const Paragraph1 = document.createElement("p");
const elemText = document.createTextNode('This is a div');
Paragraph1.appendChild(elemText);
elem.appendChild(Paragraph1);
Paragraph1.style.color = "Red";
document.body.appendChild(elem);


const Heading3 = document.createElement("h3");
const BlueText = document.createTextNode('Hey im Blue!');
Heading3.appendChild(BlueText);
elem.appendChild(Heading3);
Heading3.style.color = "#89c4f4";
document.body.appendChild(elem);


const blackpink = document.createElement("div");
const Heading1 = document.createElement("h1");
const RedText = document.createTextNode("Im in a Div");
const RedText2 = document.createTextNode("Me TOO!")
const Paragraph2 = document.createElement("p");
Heading1.appendChild(RedText);
Paragraph2.appendChild(RedText2);
Heading1.style.color = "red";
Paragraph2.style.color = "red";
blackpink.style.backgroundColor = "pink"
blackpink.style.border = "thick solid"
blackpink.style.borderColor = "black"
blackpink.appendChild(Heading1)
blackpink.appendChild(Paragraph2)

document.body.appendChild(blackpink);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const buttons = document.querySelectorAll('button');
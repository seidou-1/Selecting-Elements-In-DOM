document.body; //document is the object and body is the property. This targets the body element.

document.title; //document is the object and title is the property. This targets the document title.

document.url; //document is the object and title is the property. This targets the document url.

//To target the nodes aka elements within the document, Methods are used.

//******There are a few ways to target them******

//getElementByID is a method
document.getElementByID ("The Element's ID");

//getElementsByClassName is a method
document.getElementsByClassName("The Element's Class");

//getElementsByTagName is a method
document.getElementsByTagName("The Element's HTML tag");

//This will return the results in the form of an *array*

//*********The above methods are a bit klunky There is a better way of targeting elements\nodes

//This option targets ONLY the first element it finds
document.querySelector("The Name Of The Element");

//This option targets ALL the elements it finds
document.querySelectorAll("The Name Of The Element")

//The selectors above allow you to pass multiple paramaters. So you can essentially target more than one element\node. This is the advantage over using the traditional "ByID", "ByClassName", and "ByTagName".``

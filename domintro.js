//stands for the document object model
//its a programming interface for web documents (html,xml>using python)
//it allows elements to be accesed and manipulate using js

/* the basic structure of the dom */
//the tree structure>>it represents the document in form of a tree structure with noded where each node represents a part of the documents (tags,attributes,selectors)
//the root node is the document object itself
//each node has a set of properties and methods that can be accesed and used to manipulate the document
//manipulation of these methods is done via js where you can add,remove,modify attributes in the document
//event--is a specific moment of occassion that happens with a specified target
//the dom offers something we call an event handler)this is where a particular function is called to execute once an event happens

//dom element by id
let myButton=document.getElementById("first")
let myParagraph=document.getElementById('new')
myButton.addEventListener("click",()=>{
    myButton.style.backgroundColor="green"
    myParagraph.style.color="green"
})

//create tags in html a button and a pargraph that when the window is loaded the color or the text is default black  when the buttonis clicked it checks whether the color of the pargraph is green else if its another color it changes the color to green else it returns red(default value)
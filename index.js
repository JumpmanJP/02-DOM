//Accessing Single Elements

let Newt = document.getElementById
('listTitle');
console.log(Newt);

let NewtItem = document.querySelector('ul li');
console.log(NewtItem);

/* Extra Code */
// Centers the title
Newt.style.textAlign = 'center';
// this changes the color to red
NewtItem.style.color = 'red';

// Accessing Multiple Items
// For acessing multiple elements e are going to use three methods:
//      getElementsByClassName,
//      getELementsByTagName, and
//      querySelectorAll.

let grocery = document.getElementsByClassName
('groceryItem');
console.log(grocery);
// console.log(grocery instanceof Array); false
// Nodelist is an objet that looks and acts like an array but is an object.

console.log(grocery[2]);
console.log(grocery.item(2));

// let liTag = document.getElementsByTagName('li');
// console.log(liTag);
let selectALL = document.querySelectorAll('ul li');
console.log(selectALL);

//DOM TREE AND NODES
// console.log(documet.body.childNodes);
console.log(document.body.children);


// Whitespace inside elements is considered as text, and text is considered as nodes. Comments are also considered as nodes.
// The childNodes property returns a collection of a node's child nodes, as a NodeList object.
// The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers. The index starts at 0.
/* List of properties:
1. first(Element)Child = used to get the first child element of a node. 
2. last(Element)Child = the last child element of a node. 
3. parent(Element) || parentNode = access a parent node of an element. 
4. next(Element)Sibling = the element next to the element already accessed.
5. previous(Element)Sibling gets for us the element previous to the element already accessed.
*/

let listDiv = document.getElementById('list');
// console.log(listDiv.firstElementChild);
console.log
(listDiv.firstElementChild.nextElementSibiling);

console.log
(listDiv.parentNode);
console.log
(listDiv.lastElementChild);
console.log
(listDiv.firstElementChild);

// Adding and Removing HTML content
//---------------------------------

// I can change the text on my DOM through these methods.
// innerText: Specifies the text content of the specified node
// innerHTML: Specifies the HTML content of an element
// Be careful when using innerHTML to set HTML content, because it removes the HTML content that is inside the element and adds the new one. 

//  console.log('liTag');

// liTag.forEach(element => {
//     console.log(element);
// });
let liTag = document.getElementsByTagName('li');

for(tag of liTag) {
    console.log(tag);
    tag.style.fontFamily = 'cursive';
}

document.getElementsByClassName('listItem') [4].innerText = 'Buy a new cauldron';

document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops';

// AddEventListener

document.getElementById('clickMe').addEventListener('click', (event) =>  {     // console.log(event)
    event.target.style.backgroundColor = 'lightBlue';
});

document.getElementById('listInput').addEventListener('keyup', (event) => {     // console.log(event)
    console.log(even.target.value);
})

// CREATEELEMENT() and APPENDCHILD();
// ----------------------------------

let newGrocery = document.createElement('li');

let groceryList = document.getElementById('groceryList');

// left side = parent node I want to append to --- right side = child I want to append

groceryList.appendChild(newGrocery);

newGrocery.innerText = 'Blueberries';

// let liTag = document.getElementsByTagName('li');
// // console.log(liTag):

// for(tag of liTag) {
//     // console.log(tag);
//     tag.style.fontFamily = 'cursive';
    // }

//Let's do that again, but with a different tag.
// I don't currently know that they bottom three items of my list are ingredients that I need to pick up from the store. Let's create an <h3> tag that says 'Grocery List'.
let groceryTitle = document.createElement('h3');
// Even though I have created an element, I didn't specify where I wanted it. We can use the appendChild() method to specify under which parent node we want to add it.
// First I need to grab the element I want to add my <h3>tag to.
let groceryDiv = document.getElementById('groceryDiv');
// Then I can append my newly created <h3>tag to my groceryDiv;
// left side = parent node I want to append to ---- right side = child I want to append
groceryDiv.appendChild(groceryTitle);
// In my browser, it won't look like I have changed anything. Open up the dev/inspect tools and under the ELEMENTS tab, navigate to the groceryDiv. Notice, we now have an empty <h3> tag nested underneath my <ul>.
// Let's add some text content to this.
groceryTitle.innerText = 'Grocery List';
// Great! But it's still underneath my list rather than above it. Let's change that!
groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);
// Syntax 
// node.insertBefore(newnode, existingnode)
// newnode: The node object you want to insert (Required)
// existingnode: The child node you want to insert the new node before. If set to null, the insertBefore method will insert the newnode at the end (Required)




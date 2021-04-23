console.log('it works');
let inputElement = document.getElementById('itemToBuy');
let colors = ['black', 'green', 'yellow', 'red'];



function addItem() {
    // console.log('i am inside the addItem');
    // read input, what is my input source?
    // input element, i need the id of the input element to access that element
    // use the value attribute of that element to read the value the user typed in
    console.log('inside the function');
    let inputItem = inputElement.value;



    let liElement = document.createElement('li');
    liElement.textContent = inputItem + ';';

    let doneElement = document.createElement('button');
    doneElement.textContent = 'done';

    doneElement.onclick = function changeStyle() {
        let condition = liElement.style.textDecoration === ''
        if (condition) {
            liElement.style.textDecoration = 'line-through';
        } else {
            liElement.style.textDecoration = '';
        }
    }

    let priorityElement = document.createElement('button');
    priorityElement.textContent = 'priority';

    // priorityElement.onclick = function changeColor() {
    //     console.log('color', liElement.style.color);

    //     let color = liElement.style.color;
    //     if (color === 'black' || color === '') {
    //         liElement.style.color = 'green';
    //     } else if (color === 'green') {
    //         liElement.style.color = 'yellow';
    //     } else if (color === 'yellow') {
    //         liElement.style.color = 'red';
    //     } else {
    //         liElement.style.color = 'black'
    //     }

    // }

    // This code does not work as it is :(
    // priorityElement.onclick = function changeColor() {
    //     let i = 0;
    //     function localFunction() {
    //         i++;
    //         if (i === colors.length) {
    //             i = 0;
    //         }
    //         let nextColor = colors[i];
    //         liElement.style.color = nextColor;
    //     }

    // }

    // Here is the working version of the above code
    (function localState() {
        let i = 0;
        priorityElement.onclick = function changeColor() {
            console.log('inside color')
            i++;
            if (i === colors.length) {
                i = 0;
            }
            let nextColor = colors[i];
            liElement.style.color = nextColor;

        }
    })() //This is called an IIFE (Immediately Invoked Function Expression)

    // localState(); When we use an IIFE, we don't need to call the function like this.


    liElement.appendChild(doneElement);
    liElement.appendChild(priorityElement);

    let ulElement = document.getElementById('shoppingList');
    ulElement.appendChild(liElement);

    inputElement.value = '';
}














// Note 1
// Assignments, things that contain the '=' (equal sign)
// in assignments, what is on the left hand side of the = sign
// and what is on the right hand side of the '=' sign mean different things
// what is on the left side of the = sign has to be a variable
// what is on the right side of the = sign can be both a variable or a  value like
// 'red', or 2, or [], {}, true, etc.

// ok color = 'red'; //this code is okay, because color is a variable
// ok color = anotherColor; // this code is also okay, both sides are variables
// x 'red' = color; // this code is not okay, left hand side must be a variable, 
// 'red' is not a variable


// Note 2
// This is an example of which variable's value changes after the assignment operation
// (inputElement.value) variable on the left side of the = sign 
// or (item) the variable on the right hand side ?

// first initialize the variables
// let item = 'cars';
// inputElement.value = 'apples';

// Then do the assignment, always the variable on the left hand side changes its value
// the variable on the right hand side remains unchanged
// inputElement.value = inputElement.value + 'hello'; // here the value/content of inputElement.value changes
// item = inputElement.value; // here the value/content of item changes, inputElement.value does NOT change, 
// because it is on the right side of the equation

// the final picture looks like this:
// item: 'apples'
// inputElement.value: 'apples';







// This time lets do the exercise the other way around
// Initialize the variables
// let item = 'cars';
// inputElement.value = 'apples';

// inputElement.value = item; // Change the value/content of inputElement.value
// the final picture shows that inputElement.value variable has changed its value whereas the item variable remained the same
// item: 'cars'
// inputElement.value: 'cars'


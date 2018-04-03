/*eslint-env browser*/

//STEP 1
/*Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.*/

/*function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}*/


//STEP 2
/*
Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.
*/
/*var myElement = document.getElementById("myButton");
myElement.onclick = function () {
    "use strict";
    window.alert("I have been clicked");
};*/


//STEP 3
/*Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.*/

/*
myButton.addEventListener("click", writeMessage);
function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}
*/


//STEP 4
/*Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function*/

/*myButton.addEventListener("click", function () {
    "use strict";
    window.alert("I have been clicked");
});*/


//STEP 5
/*Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.*/

/*document.addEventListener("DOMContentLoaded", init, false)
function init() {
        myButton.addEventListener("click", function () {
            window.alert("Hello World");
        };*/


//STEP 6

/*Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked on the link but prevents the browser from also redirecting to the Google site.*/

/*document.getElementById("redirect").addEventListener("click", function(event){
    "use strict";
    event.preventDefault();
    window.alert("You have clicked the link");
    
});*/


//STEP 7
/*Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the button should be disabled, and the text that the user input into the text box should be displayed within an alert box.*/
/*function myFunction() {
    var x = document.getElementById("myInput").value;
   window.alert(x.value);
}*/
    



//STEP 8

//STEP 9

//STEP 10

/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Tutorial Case

   Author:   Kevin Geary
   Date:     3/1/2012

   Filename: register.js

   Functions List:

   initPage()
      Adds an event handler to the registration form submit button
      when the page is opened.

   saveMemberInfo()
      Saves the values in the member registration form to fields in
      the memberInfo multi-valued cookie

*/

addEvent(window, "load", initPage, false);

function initPage() {

   //Add event handler to the Submit button
   document.getElementById("sbutton").onclick = saveMemberInfo;

   if (retrieveCookie( "lastName")) {

      var allInputs = document.getElementsByTagName("input");
      for (var i = 0; i < allInputs.length; i++) {
         if (allInputs[i].type == "text") {
            if (retrieveCookie( allInputs[i].id)) {
               allInputs[i].value = retrieveCookie(allInputs[i].id);
            }
         }
      }

      document.getElementById("state").selectedIndex = retrieveCookie("state");
 
      if (retrieveCookie("member1") == "true")
         document.getElementById("member1").checked = true
      else if (retrieveCookie("member2") == "true")
         document.getElementById("member2").checked = true;
   }

}


function saveMemberInfo() {

   // Set the cookie expiration date one year hence
   var expire = new Date();
   expire.setFullYear(expire.getFullYear() + 1);

   // Loop through all of the elements in the form
   var allFields = document.registerForm.elements;
   for (var i = 0; i < allFields.length; i++) {

      if (allFields[i].type == "text") {
         // Write input box value to a cookie
         writeCookie(allFields[i].id, allFields[i].value, expire);
      }

      if (allFields[i].nodeName == "SELECT") {
         // Write the index number of the selected option
         writeCookie(allFields[i].id, allFields[i].selectedIndex, expire);
      }

      if (allFields[i].type == "radio" || allFields[i].type == "checkbox") {
         // Write whether the button or checkbox was checked
         writeCookie(allFields[i].id, allFields[i].checked, expire);
      }

   }

   alert("Registration data saved");

}




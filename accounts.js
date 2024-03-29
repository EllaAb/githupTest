/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Tutorial Case

   Author:   Kevin Geary
   Date:     3/1/2012

   Filename: accounts.js


   Global Variables List:

   statAbbr	Contains an array of two-letter state or province abbreviations


   Functions List:

   retrieveMemberInfo()
      Retrieves membership information from the fields within the memberInfo
      cookie

*/


var stateAbbr = new Array(60);
    stateAbbr[0]="";
    stateAbbr[1]="AL";
    stateAbbr[2]="AK";
    stateAbbr[3]="AZ";
    stateAbbr[4]="AR";
    stateAbbr[5]="CA";
    stateAbbr[6]="CO";
    stateAbbr[7]="CT";
    stateAbbr[8]="DE";
    stateAbbr[9]="DC";
    stateAbbr[10]="FL";
    stateAbbr[11]="GA";
    stateAbbr[12]="HI";
    stateAbbr[13]="ID";
    stateAbbr[14]="IL";
    stateAbbr[15]="IN";
    stateAbbr[16]="IA";
    stateAbbr[17]="KS";
    stateAbbr[18]="KY";
    stateAbbr[19]="LA";
    stateAbbr[20]="ME";
    stateAbbr[21]="MD";
    stateAbbr[22]="MA";
    stateAbbr[23]="MI";
    stateAbbr[24]="MN";
    stateAbbr[25]="MS";
    stateAbbr[26]="MO";
    stateAbbr[27]="MT";
    stateAbbr[28]="NE";
    stateAbbr[29]="NV";
    stateAbbr[30]="NH";
    stateAbbr[31]="NJ";
    stateAbbr[32]="NM";
    stateAbbr[33]="NY";
    stateAbbr[34]="NC";
    stateAbbr[35]="ND";
    stateAbbr[36]="OH";
    stateAbbr[37]="OK";
    stateAbbr[38]="OR";
    stateAbbr[39]="PA";
    stateAbbr[40]="RI";
    stateAbbr[41]="SC";
    stateAbbr[42]="SD";
    stateAbbr[43]="TN";
    stateAbbr[44]="TX";
    stateAbbr[45]="UT";
    stateAbbr[46]="VT";
    stateAbbr[47]="VA";
    stateAbbr[48]="WA";
    stateAbbr[49]="WV";
    stateAbbr[50]="WI";
    stateAbbr[51]="WY";
    stateAbbr[52]="GU";
    stateAbbr[53]="MP";
    stateAbbr[54]="PR";
    stateAbbr[55]="AS";
    stateAbbr[56]="VI";
    stateAbbr[57]="AA";
    stateAbbr[58]="AE";
    stateAbbr[59]="AP";




/* Add new code below */


addEvent(window, "load", retrieveMemberInfo, false);

function retrieveMemberInfo() {

   if (retrieveCookie("lastName")) {

      // Retrieve the membership data
      var allSpans = document.getElementsByTagName("span");
      for (var i = 0; i < allSpans.length; i++) {
         var cValue = retrieveCookie( allSpans[i].id);
         if (cValue) allSpans[i].innerHTML = cValue;
      }

      // Retrieve the state abbreviation
      var stateIndex = retrieveCookie("state");
      document.getElementById("state").innerHTML = stateAbbr[stateIndex];

      // Retrieve the membership option

      if (retrieveCookie("member1") == "true") 
         document.getElementById("memberOption").innerHTML = "One year ($30)";
      else if (retrieveCookie("member2") == "true") 
         document.getElementById("memberOption").innerHTML = "Two year ($45)";

   } else {

      // Display text for nonmembers
      var nonMember = "You do not have an account with CycloCrossings. ";
      nonMember += "Join today and <a href='register.htm'>register</a> ";
      nonMember += "with us to receive discounts on all tours ";
      nonMember += "and merchandise.";

      document.getElementById("intro").innerHTML = nonMember;
      document.getElementById("accountTable").style.visibility = "hidden";

   } 

}










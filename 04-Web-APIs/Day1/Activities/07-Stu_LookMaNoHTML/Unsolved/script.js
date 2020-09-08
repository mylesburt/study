// Create your HTML Page via DOM Methods here! //

var tagName = confirm("Make me a website?");

if (tagName === true) {
    var tag = document.createElement(tagName);
    tag.textContent = "I DID IT!!!"
    document.body.appendChild(tag);
}

/*

&& tagName !== "h2" && tagName !== "p" && tagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var tag = document.createElement(tagName);
    tag.textContent = "I copied so much of this from the last exercise!" + tagName;
    document.body.appendChild(tag);
  }

  var nextTag = confirm("Would you like to add another tag?");
if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
    document.body.appendChild(secondTag);
  }
}

*/
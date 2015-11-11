"use strict";

document.write("Display message to the user");

var RegisteredUser = {
	"name": "Test Mann User",
	"email": "test@test.com",
	"password": "thepasswordislong",
	
};
var tempUser = RegisteredUser;


function checkEmail() {
	// Validate emailInput.value and confirm that the user has email addrs
};

function registerUser(){ //Register a new user to be displayed in JS section //Store in User-registry
	checkEmail(); //Checks if email addr are regex

	tempUser.name = document.getElementById("name").value;
	tempUser.email = document.getElementById("email").value;
	tempUser.password = document.getElementById("userPassword").value;

	localStorage.User = JSON.stringify(tempUser);
	document.write(tempUser);
};

var emailInput = document.getElementById("confirm-email");
document.getElementById("submit").addEventListener("input", registerUser, false);

var testText = "UserName: " + RegisteredUser.name + "<br/> Email: " + RegisteredUser.email + "<br/> UserPassword: " + RegisteredUser.password;
document.getElementById("jsParagraph").innerHTML = testText;

document.write("<br/>" + tempUser.name);
document.write("<br/> JS is done");









// DRAGGING  && Droppin -------------



var sourceContainerID = '';
var dragStart = function(e){
	// IE doesn't support text/plain
	try {
		e.dataTransfer.setData('text/plain', e.target.id);
	}
	catch (ex) {
		e.dataTransfer.setData('Text', e.target.id);
	}
	
	sourceContainerID = this.parentElement.id;
};

var dropped = function(e) {
	if (this.id !== sourceContainerID) {
		cancel(e);
		
		var id;
		
		try {
			id = e.dataTransfer.getData('text/plain');
		} catch (ex){
			id = e.dataTransfer.getData('Text');
		}
		e.target.appendChild(document.querySelector('#' + id));
	}
};

var cancel = function(e) {
	if (e.preventDefault){
		e.preventDefault();
	}
	if (e.stopPropagation){
		e.stopPropagation();
	}
	return false;
};


var	forEach = Array.prototype.forEach;

var selector = '[data-role="drag-drop-container"]';
var dc = document.querySelectorAll(selector); //'#target-container';

forEach.call(dc, function(c) {
	c.addEventListener('drop', dropped, false);
	c.addEventListener('dragenter', cancel, false);
	c.addEventListener('dragover', cancel, false);
});

var selector = '[draggable="true"]';
var ds = document.querySelectorAll(selector); //'#target-container';

forEach.call(ds, function(source) {
	source.addEventListener('dragstart', dragStart, false);
});






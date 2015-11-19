"use strict";
var taskList = [];
InitializePage();	


function InitializePage(){
	if(typeof(localStorage.taskItem) !== undefined) {
    // Code for localStorage/sessionStorage.
		var tempList = localStorage.getItem('taskList');
		taskList = JSON.parse(tempList);
			SetTaskList(taskList);
	} else {
    // Sorry! No Web Storage support..
	}

}

function SetTaskList(taskList){
	for (var i = 0; i < taskList.length; i++){
		AddTask(taskList[i]);
	}
	
	showTaskList();
}
function AddTask(taskName){
	var node = document.createElement("LI");
	var cb = document.createElement("input");
	cb.type = "checkbox";
	cb.id = taskName + "CB";
	node.appendChild(cb);
	var textnode = document.createTextNode(taskName);
	node.appendChild(textnode)
	$('#taskList').append(node);
	
	
	
	//Display the TaskList
	var tasker = document.getElementById("tasks");
	if(tasker.style.visibility==='hidden')
	{
		tasker.style.visibility='visible';
	}
	return false;
};

function UpdateLocalTaskList(addOrRemove, taskName){
	
}


document.write("Display message to the user");

var RegisteredUser = {
	"name": "Test Mann User",
	"phone": "49291959",
	"email": "test@test.com",
	"ageCategory": "Adult",
	"password": "thepasswordislong",
	
};

var tempUser = RegisteredUser;

function showTaskList(){
	var tasker = document.getElementById("tasks");
	if(tasker.style.visibility==='hidden')
	{
		tasker.style.visibility='visible';
	}
	else{
		
		tasker.style.visibility='hidden';
	}
};


$("#userRegister").submit(function() {
	tempUser.name = $("#name").val();
	tempUser.phone = $("#phone").val();
	tempUser.ageCategory = $("#ageCategory").val();
	tempUser.email = $("#email").val();
	tempUser.password = $("#userPassword").val();
	
	var qString = $(this).serialize();
	alert(qString);

	itsaSetup();
	return false;
});


function OnClickTaskAdd(){
	var temp = $("#newTask").val();
	AddTask(temp);
	taskList.push(temp);
	localStorage.taskList = JSON.stringify(taskList);
}

function OnClickTaskRemove(){
	var removeList = [];
	var taskListNodes = document.getElementById("taskList").childNodes;
	for (var i = 0; i < taskListNodes.length; i++){
		if (taskListNodes[i].childNodes[0].nodeValue){
			removeList.push(taskListNodes[i].childNodes[1].nodeValue);
			taskListNodes[i].pop();
			taskList.splice(i, 1);
		}
	}
}



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

// var emailInput = document.getElementById("confirm-email");
// document.getElementById("submit").addEventListener("input", registerUser, false);
function itsaSetup(){
	var testText = "UserName: " + tempUser.name + "<br/> Email: " + tempUser.email + "<br/> UserPassword: " + tempUser.password;
	document.getElementById("jsParagraph").innerHTML = testText;
}


document.write("<br/> JS is BUGFrEE!");









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






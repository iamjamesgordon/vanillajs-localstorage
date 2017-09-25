// JavaScript Document
window.onload = function() {
	
	"use strict";
	getStorage();
	
	
	/* ---------------------------------------------- */
	
	/* Auto type Function */
	
	function autoType() {
		
		/* Split copy into a array*/
		var bannerHeader = document.querySelector("#intro-copy").textContent.split('');
		
		/* Clearing the copy before the auto loop function starts */
		document.querySelector("#intro-copy").innerHTML = " ";
		
		var counter = -1;
		
		/* Set interval */
		setInterval(function() {
		
			if (counter < bannerHeader.length - 1) {
				counter++;
				document.querySelector("#intro-copy").innerHTML += bannerHeader[counter];
			} 
			
		}, 100);	
		
	} /* Auto Loop */
	
	/* Auto type Function */
	
	/* ---------------------------------------------- */
	
	/*Button functions*/
	
	function addUserProfile() {
		
		var userName = document.querySelector("#user-name").value;
		var userAge = document.querySelector("#user-age").value;
		var userColour = document.querySelector("#user-colour").value;
		
		var userObject = { "name": userName, "age": userAge, "colour": userColour };
		
		window.localStorage.setItem("userObject", JSON.stringify(userObject));
		getStorage();
	}
	
	function removeUserProfile() {
		window.localStorage.removeItem("userObject");
		getStorage();
	}
	
	/* ---------------------------------------------- */
	
	/*Get user function*/
	
	function getStorage() {
		
		if(window.localStorage.length > 0) {
			
			getUserProfile();
			document.querySelector("#storageClear").onclick = removeUserProfile;			
			autoType();
						
		} else {
			
			getUserForm();
			document.querySelector("#storageSave").onclick = addUserProfile;
			autoType();
				
		}
	}
	
	/* ---------------------------------------------- */
	
	/*Get User Profile*/
	
	function getUserProfile() {
		
		var userProfile = JSON.parse(window.localStorage.getItem("userObject"));
		
		document.getElementById("intro-copy").innerHTML = "Hi, Welcome Back " + userProfile.name;	
		document.getElementById("user-options").innerHTML = " ";
		document.getElementById("user-options").innerHTML += "<h1>Hi " + userProfile.name + ",</h1>";
		document.getElementById("user-options").innerHTML += "<h2>You are " + userProfile.age + " years old,</h2>";
		document.getElementById("user-options").innerHTML += "<p id='user-colour'>Your favourite colour is " + userProfile.colour + "</p>";
		document.getElementById("user-colour").style.color = userProfile.colour;
		document.getElementById("user-options").innerHTML += ' <button id="storageClear">Clear</button>';
		
	}
	
	/* ---------------------------------------------- */
	
	/*Get User Form*/
	
	function getUserForm() {
		
		document.getElementById("intro-copy").innerHTML = "Hi, I see you are a new user of our User Profile App.";
		document.getElementById("user-options").innerHTML = " ";
		document.getElementById("user-options").innerHTML += '<input id="user-name" type="text" placeholder="Your name">';
		document.getElementById("user-options").innerHTML += '<input id="user-age" type="text" placeholder="Your age">';
		document.getElementById("user-options").innerHTML += '<input id="user-colour" type="text" placeholder="Your favourite colour">';
		document.getElementById("user-options").innerHTML += '<button id="storageSave">Save</button>';
		
	}
	
	/* ---------------------------------------------- */
	
	/*Nav button functions*/
	
	document.querySelector("#skip-intro").onclick = function() {
		
		document.querySelector("#window-one-wrapper").style.opacity = 0;
		document.querySelector("#window-two-wrapper").style.opacity = 1;
		
	};

	
};
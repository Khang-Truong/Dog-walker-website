// scripts for the right column

function signIn() {
	if (document.getElementById('password').value == '') {
		alert('Please enter your password!');
	} else {
		alert("Welcome to Pet's House!");
	}
}
function subcribe() {
	if (document.getElementById('newsletter1').value == '') {
		alert('Please enter your email');
	} else {
		alert('Thank you for your subcribe. We will send news to you every week.');
	}
}

// script for project.html 

function overEffect() {
	document.getElementById('petsAreFriends').src = 'images/friends1.jpg';
}
function outEffect() {
	document.getElementById('petsAreFriends').src = 'images/friends.png';
}

// script for dogs.html

let chihuahua = document.getElementById('Chihuahua');
let puppies = document.getElementById('Puppies');
function onmouseChihuahua_bigImg() {
	chihuahua.style.height = '220px';
	chihuahua.style.width = '200px';
}
function onmouseChihuahua_normalImg() {
	chihuahua.style.height = '200px';
	chihuahua.style.width = '150px';
}
function onmousePuppies_bigImg() {
	puppies.style.height = '250px';
	puppies.style.width = '350px';
}
function onmousePuppies_normalImg() {
	puppies.style.height = '200px';
	puppies.style.width = '300px';
}

// script for cats.html

let twoCat = document.getElementById('twoCat');
let aCat = document.getElementById('aCat');
function onmouseTwoCat_bigImg() {
	twoCat.style.height = '250px';
	twoCat.style.width = '250px';
}
function onmouseTwoCat_normalImg() {
	twoCat.style.height = '200px';
	twoCat.style.width = '200px';
}
function onmouseaCat_bigImg() {
	aCat.style.height = '220px';
	aCat.style.width = '220px';
}
function onmouseaCat_normalImg() {
	aCat.style.height = '200px';
	aCat.style.width = '200px';
}

// script for tips.html 

window.onload = function () {
	let tipsDogs = document.getElementById('tipForDogs');
	tipsDogs.onmouseover = function () {
		tipsDogs.style.color = 'red';
		tipsDogs.style.fontWeight="bold";
	};
	tipsDogs.onmouseout = function () {
		tipsDogs.style.color = 'blue';
		tipsDogs.style.fontWeight="unset";
	};

	let tipsCats = document.getElementById('tipsForCats');
	tipsCats.onmouseover = function () {
		tipsCats.style.color = 'red';
		tipsCats.style.fontWeight="bold";
	};
	tipsCats.onmouseout = function () {
		tipsCats.style.color = 'blue';
		tipsCats.style.fontWeight="unset";
	};
};

// script for pet_sitter.html 

let arr1 = [
	['Vancouver', 10],
	['Burnaby', 7],
	['New Wesminster', 3],
	['Coquitlam', 5],
];
for (let i = 0; i < arr1.length; i++) {
	document.getElementById('locationOfPartner').innerHTML +=
		arr1[i][0] + ': ' + arr1[i][1] + ' houses.' + '<br>';
}
function calculate() {
	let choose = prompt(
		'Press 1, if you want to calculate fee for dog walkers.' +
			'\n' +
			'Press 2, if you want to calculate fee for pet sitters'
	);
	if (choose == '1') {
		let time = prompt('Enter your minutes');
		let result1;
		if (time <= 15) {
			result1 = 15;
		} else if (time > 15 && time <= 30) {
			result1 = 20;
		} else if (time > 30 && time <= 45) {
			result1 = 25;
		} else if (time > 45 && time <= 60) {
			result1 = 30;
		} else if (time > 60 && time <= 120) {
			result1 = 40;
		} else {
			alert('Sorry, 2 hours is the maximum time to take a walk with pets');
			result1 = 0;
		}
		alert('Your fee is $' + result1.toFixed(2));
	} else if (choose == '2') {
		let day = prompt('How many days do you decide to hire pet-sitters? ');
		let value = parseInt(day);
		alert('Your fee is $' + (value * 100).toFixed(2));
	}
}



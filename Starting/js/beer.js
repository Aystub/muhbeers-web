document.addEventListener('DOMContentLoaded', function() {

	/****************************************************
	*
	* Variables
	*
	****************************************************/

	var user;
	var rating = 0;
	var COLLECTION = "beers";

	var fileName = document.querySelector("#filename");
	var fileInput = document.querySelector("#file-input");
	var saveBtn = document.querySelector("#save-btn");
	var closeIcn = document.querySelector('#close');
	var form = document.querySelector('.form');
	var beerNameInput = document.querySelector("#beer-name");
	var wrapper = document.querySelector('#wrapper');
	var radioInputs = document.querySelectorAll('input[type="radio"]');
	var fab = document.querySelector(".fab");


	/****************************************************
	*
	* Auth Listener
	*
	****************************************************/

	


	/****************************************************
	*
	* Firebase Real Time Updates
	*
	****************************************************/





	/****************************************************
	*
	* UI Logic (Click listeners and the like)
	*
	****************************************************/


	fab.addEventListener("click", function(){
		form.style.display = "block";
		wrapper.classList.add('veil-abs');
	});


	closeIcn.addEventListener("click", function() {
		nukeForm();
		wrapper.classList.remove('veil-abs');
	});

	
	radioInputs.forEach((radioInput) => {
		radioInput.addEventListener("change", function() {
			rating = this.value;
		  	console.log('New star rating: ' + rating);
		});
	});

	fileInput.addEventListener("change", function(data) {
		fileName.innerText = this.files[0].name;
	})

	document.querySelector("#file").addEventListener("click", function() {
		document.querySelector("#file-input").click();
	});


	saveBtn.addEventListener("click", function() {
		var file = document.querySelector("#file-input").files[0];
		if (file) {
			
		} else {
			
		}
	});


	function nukeForm() {
		form.style.display = "none";
		beerNameInput.value = "";
		var radioInputs = document.querySelectorAll('input[type="radio"]');
		radioInputs.forEach((radioInput) => {
			radioInput.checked = false;
		});
		rating = 0;
		fileInput.files[0] = undefined;
		fileName.innerText = "";
	}


	/****************************************************
	*
	* UI Generation Methods
	*
	****************************************************/


	function generateBeerCard(name, rating, taster, URL) {
		var contentDiv = document.querySelector('#content-div');
		var className = "beer-image";
		if(!URL) {
			URL = "images/no-photo.svg";
			className = "no-image";
		}
		contentDiv.insertAdjacentHTML('afterbegin', '\
			<div class="beer-summary ' + name + '">\
				<div class="' + className + '" style="background-image: url(' + "'" + URL + "'" +');" >\
				</div>\
				<h3>' + name +'</h3>\
				<h4><b>Rating:</b> ' + rating + ' stars</h4>\
				<h4><b>Taster:</b> ' + taster + '</h4>\
			</div>');

	}

});
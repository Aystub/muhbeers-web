document.addEventListener('DOMContentLoaded', function() {

	// Check if user already has a session
	firebase.auth().onAuthStateChanged(function(firebaseUser) { 
		// User isn't logged in, away with them!
		if (firebaseUser) {
			window.location = "beers.html";
		} 
	});

	document.querySelector("#login").addEventListener("click", function(){
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			window.location = "beers.html";
		}).catch(function(error) {
			console.log("What have a done now...");
			console.log(error);
		})
	});

	console.log("The end of the beginning");
});
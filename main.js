/**
 * main.js
 * 
 * Written by Tom Hanks
 */

var audio;

function setVisible(id, vis) {
	modal = document.getElementById(id);
	if (vis) {
		modal.classList.remove("modal-hidden");
		modal.classList.add("modal-visible");
	} else {
		modal.classList.add("modal-hidden");
		modal.classList.remove("modal-visible");
	}
}

function showAudioModal() {
	closeModal();
	setVisible("modal-audio", true);
	//setVisible("modal", true);
}

function showSettingsModal() {
	closeModal();
	setVisible("modal-settings", true);
	//setVisible("modal", true);
}

function closeModal() {
	setVisible("modal-audio", false);
	setVisible("modal-settings", false);
	//setVisible("modal", false);
}

function goBack() {
	const urlParams = new URLSearchParams(window.location.search);
	window.location = urlParams.get("origin");
}

function playAudio(id) {
	if (audio) {
			audio.pause();
			document.getElementById("label-audio-1").classList.remove("audio-playing");
			document.getElementById("label-audio-2").classList.remove("audio-playing");
			document.getElementById("label-audio-3").classList.remove("audio-playing");
			document.getElementById("label-audio-4").classList.remove("audio-playing");
	}

	switch (id) {
	case 1:
		audio = new Audio("resources/beat_hazex_132_ty.mp3");
		document.getElementById("label-audio-1").classList.add("audio-playing");
		break;
	case 2:
		audio = new Audio("resources/beat_birds_129_ty.mp3");
		document.getElementById("label-audio-2").classList.add("audio-playing");
		break;
	case 3:
		audio = new Audio("resources/beat_morechaos_140_ty.mp3");
		document.getElementById("label-audio-3").classList.add("audio-playing");
		break;
	case 4:
		audio = new Audio("resources/beat_aphex_jerk_186_ty.mp3");
		document.getElementById("label-audio-4").classList.add("audio-playing");
		break;
	}

	audio.play();
}

function showImage(src) {
	document.getElementsByClassName("large-img")[0].classList.remove("hidden");
		document.getElementById("large-img-tag").setAttribute("style", "background-image:url('resources/" + src + "')");
		document.body.classList.add("no-scroll");

}

function hideImage() {
	document.getElementsByClassName("large-img")[0].classList.add("hidden");
		document.body.classList.remove("no-scroll");

}

function nullopt() {

}

window.addEventListener('scroll', function() {
  const hiddenElement = document.querySelector('.toc');
  const elementPosition = window.scrollY;

  // If the element is within the viewport (e.g., 75% of the way up the screen)
  if (elementPosition > 450) {
    hiddenElement.classList.add('visible-element');
  } else {
    hiddenElement.classList.remove('visible-element');
  }
});
document.querySelector('#radio').addEventListener('mouseenter', function () {
	radio.setAttribute('scale', '1.5 1.5 1.5');	
});

//scaledown when mouse is out off radio
document.querySelector('#radio').addEventListener('mouseleave', function () {
	radio.setAttribute('scale', '1 1 1');	
});

//Scale up button
document.querySelector('#button').addEventListener('mouseenter', function () {
	button.setAttribute('scale', '1.5 1.5 1.5');	
});

//scaledown button
document.querySelector('#button').addEventListener('mouseleave', function () {
	button.setAttribute('scale', '1 1 1');	
});

//Turn Covid on/off
var covid = false;
document.querySelector('#button').addEventListener('click', function () {
	var w1 = document.querySelector('#window1');
	var w2 = document.querySelector('#window2');
	var w3 = document.querySelector('#window3');
	var mortyS = document.querySelector('#mortyS');
	var mortyM = document.querySelector('#mortyM');
	
	
	if(covid == false){
		button.setAttribute('color', 'red');
		w1.setAttribute('material','shader: standard;roughness: 1; src: url(images/bars.jpg);');
		w2.setAttribute('material','shader: standard;roughness: 1; src: url(images/bars.jpg);');
		w3.setAttribute('material','shader: standard;roughness: 1; src: url(images/bars.jpg);');
		mortyM.setAttribute('visible', 'false');
		mortyS.setAttribute('visible', 'true');
		covid = true;
	}
	else{
		button.setAttribute('color', 'blue');
		w1.setAttribute('material','shader: standard;roughness: 1; src: url(images/outside.jpg);');
		w2.setAttribute('material','shader: standard;roughness: 1; src: url(images/outside.jpg);');
		w3.setAttribute('material','shader: standard;roughness: 1; src: url(images/outside.jpg);');
		mortyM.setAttribute('visible', 'true');
		mortyS.setAttribute('visible', 'false');
		covid = false;
	}

});


//turn music on/off
document.querySelector('#radio').addEventListener('click', function () {
	var entity = document.querySelector('[sound]');
	
	if(entity.components.sound.isPlaying == true) {
		entity.components.sound.pauseSound();
	} else {
		entity.components.sound.playSound();
	}
});

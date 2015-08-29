function moveEvent(e) {
	//alert(e.which); //for testing purposes only
	/ directions: left = 37, up = 38, right = 39, down = 40 /
    switch(e.which) {
        case 37:
            move("left", true);
			e.preventDefault();
            break;
            
        case 38:
            move("up", true);
			e.preventDefault();
            break;
            
        case 39:
            move("right", true);
			e.preventDefault();
            break;
            
        case 40:
            move("down", true);
			e.preventDefault();
            break;
    }
}

$(function(){
	$('html').keydown(function(e) {
		moveEvent(e);
	});
});


$(function hammerListener() {
	var options = {
		touchAction: "pan-x"
	};
	var mc = new Hammer(document.getElementById('game-field'), options);
	mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL});

	mc.on("swipeleft", function(ev) {
		alert("left swipe detected");
	});

	mc.on("swiperight", function(ev) {
		alert("right swipe detected");
	});	

	mc.on("swipeup", function(ev) {
		alert("up swipe detected");
	});	

	mc.on("swipedown", function(ev) {
		alert("down swipe detected");
	});	

});

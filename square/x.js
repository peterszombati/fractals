function ready() {

function square(layer, s, w, h, i) {
	if(i <= 0) {
		return;
	}
	i-=1;
	layer.lineWidth = Math.pow(2,i);
	layer.strokeRect(w/4 + s[0], h/4 + s[1], w/2, h/2);
	if (i <= 0) {
		return;
	}
	var positions = [];
	positions.push(s.slice());
	s[0]+=w/2;
	positions.push(s.slice());
	s[1]+=h/2;
	positions.push(s.slice());
	s[0]-=w/2;
	positions.push(s.slice());
	for (var i2 = 0; i2 < positions.length; i2++) {
		square(layer, positions[i2].slice(), w/2, h/2, i);
	}
}

function test(layer, color) {
	layer.beginPath();
	layer.fillStyle = color;
	var w = layer.canvas.width;
	var h = layer.canvas.height;

	square(layer, [0,0], w, h, 4);
}

test(document.getElementById('layer').getContext('2d'), '#000');
};

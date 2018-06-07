function ready() {

function carpet(layer, s, w, h, i) {
	if(i <= 0) {
		return;
	}
	i-=1;
	layer.fillRect(w/3 + s[0], h/3 + s[1], w/3, h/3);
	if (i <= 0) {
		return;
	}
	var positions = [];
	positions.push(s.slice());
	s[0]+=w/3;
	positions.push(s.slice());
	s[0]+=w/3;
	positions.push(s.slice());
	s[1]+=h/3;
	positions.push(s.slice());
	s[1]+=h/3;
	positions.push(s.slice());
	s[0]-=w/3;
	positions.push(s.slice());
	s[0]-=w/3;
	positions.push(s.slice());
	s[1]-=h/3;
	positions.push(s.slice());
	for (var i2 = 0; i2 < positions.length; i2++) {
		carpet(layer, positions[i2].slice(), w/3, h/3, i);
	}
}

function test(layer, color) {
	layer.beginPath();
	layer.fillStyle = color;
	var w = layer.canvas.width;
	var h = layer.canvas.height;

	carpet(layer, [0,0], w, h, 5);
}

test(document.getElementById('layer').getContext('2d'), '#000');
};
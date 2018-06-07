function ready() {

function koch(start, length, repeat, layer) {
	repeat -= 1;
	if (repeat > 1) {
		koch(start, length/3, repeat, layer);
		var x = line(start,0,length/3);
		x[2] -= 60;
		koch(x, length/3, repeat, layer);
		x = line(x,0,length/3);
		x[2] += 120;
		koch(x, length/3, repeat, layer);
		koch(line(start,0,2*length/3), length/3, repeat, layer);
	} else {
		line(start, 0, length, layer);
	}
}

function test(layer, color) {
	layer.beginPath();
	layer.strokeStyle = color;
	var w = layer.canvas.width;
	var h = layer.canvas.height;
	koch([10,h/2,90],w-20,5,layer);
	layer.stroke();
}

test(document.getElementById('layer').getContext('2d'), '#000');
};

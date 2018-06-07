function ready() {

function tree(start, a, b, c, id, i, layer) {
	i += 1;
	if(i > 8) {
		return;
	}

	var alength = 40 - i*2.5;
	var blength = 40 - i;
	var clength = 40 - i*2.5;
	var x = line(start, a, alength, layer);
	tree(x, a, b, c, 1, i, layer);

	x = line(start, b, blength, layer);
	tree(x, a, b, c, 2, i, layer);

	x = line(start, c, clength, layer);
	tree(x, a, b, c, 3, i, layer);
}

function test(layer, color) {
	layer.beginPath();
	layer.strokeStyle = color;
	var w = layer.canvas.width;
	var h = layer.canvas.height;
	var x = line([w / 2, h - 20, 0], 0, 45, layer);
	tree(x, -25, 0, 25, 2, 0, layer);
	layer.stroke();
}

test(document.getElementById('layer').getContext('2d'), '#f00');
};
function ready() {

function line(start, end, layer) {
	layer.moveTo(start[0],start[1]);
	layer.lineTo(end[0],end[1]);
}

function three(layer, start, w, h, i) {
	if (i <= 0) {
		return;
	}
	i-=1;

	line([w/2 + start[0],start[1]], [3*w/4+start[0],start[1]+h/2], layer);
	line([w/2 + start[0],start[1]], [w/4+start[0],start[1]+h/2], layer);
	line([3*w/4+start[0],start[1]+h/2], [w/4+start[0],start[1]+h/2], layer);

	three(layer, [w/4+start[0],start[1]+h/2], w/2, h/2, i);
	three(layer, start, w/2, h/2, i);
	three(layer, [w/2 + start[0],start[1]], w/2, h/2, i);
}

function test(layer, color) {
	layer.beginPath();
	layer.imageSmoothingEnabled= true;
	layer.strokeStyle = color;
	var w = layer.canvas.width - 20;
	var h = Math.pow(Math.pow(w,2)-Math.pow(w/2,2),0.5);
	var start = [10,10];
	line(start, [w+start[0],start[1]], layer);
	line(start, [w/2+start[0],start[1]+h], layer);
	line([w+start[0],start[1]], [w/2+start[0],start[1]+h], layer);
	three(layer, start, w, h, 6);

	layer.stroke();
}

test(document.getElementById('layer').getContext('2d'), '#000');
};
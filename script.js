const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function startPosition(e){
	drawing = true
	draw(e)
}

function endPosition(e){
	drawing = false
	ctx.beginPath()
}

function draw(e){
	if (drawing == true){
		ctx.lineWidth = document.getElementById("slider").value * 3
		var rect = canvas.getBoundingClientRect();
		ctx.lineTo(e.clientX-rect.left, e.clientY-rect.top)
		ctx.stroke()
		ctx.beginPath()
		ctx.moveTo(e.clientX-rect.left, e.clientY-rect.top)
	}
}

function changeColor(clicked_id){
	if (clicked_id == 'eraser'){
		ctx.strokeStyle = 'white'
	}
	else if (clicked_id == 'black_button'){
		ctx.strokeStyle = 'black'
	}
	else if (clicked_id == 'red_button'){
		ctx.strokeStyle = 'red'
	}
	else if (clicked_id == 'blue_button'){
		ctx.strokeStyle = 'blue'
	}
	else if (clicked_id == 'green_button'){
		ctx.strokeStyle = 'green'
	}
}

function clearCanvas(){
	ctx.rect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = 'white'
	ctx.fill()
	ctx.beginPath()
}

function saveImage(){
	const download = document.getElementById('download');
	var link = document.createElement('a');
	link.href = canvas.toDataURL();
    link.download = "whiteboard.png";
    link.click()
}

ctx.lineWidth = 3
ctx.lineJoin="round";
ctx.lineCap="round";
drawing = false

canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', endPosition)
canvas.addEventListener('mousemove', draw)

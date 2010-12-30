
function basicTest() {
	
	var stream = new MemoryStream();
	
	stream.on('data', function(data) {
		assert.equal(data.toString(), 'foo');
	});
	
	stream.write('foo');
}

function delayTest() {
	
	var stream = new MemoryStream();
	
	process.nextTick(function() {
		
		stream.on('data', function(data) {
			assert.equal(data.toString(), 'foo');
		});
		
		stream.resume();
	});
	
	stream.pause();
	stream.write('foo');
}
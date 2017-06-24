$(function() {
	
  // DOM is now ready

_500px.init({
	sdk_key: 'ae876fee34cc0833af5af7b59f53283b054bf707'
});

	$('#login').click(function(){
		_500px.login();
	});
	_500px.on('authorization_obtained', function(){
		$('#login').hide();
	});
	$('#local').click(function(){
		navigator.geolocation.getCurrentPosition(function(pos){
		var lat = pos.coords.latitude;
		var long = pos.coords.longitude;
		var searchOptions = {
			geo: lat + ',' + long + ',' + '25mi',
			only:'Landscapes',
			image_size: 3,
			rpp: 28,
			sort: 'highest_rating'
		}
		});
		console.log(searchOptions);
		_500px.api('/photos/search',searchOptions, function(resp){
			$('.image-results-view').show()
			var photos = resp.data.photos;
			for(var i =0; i < photos.length; i++){
				var newImg = $('<img>').
				attr('src',photos[i].image_url).
				addClass('image');
				$('.images').append(newImg);
			};
			});
		$('#get-location').on('click',function(event){
		loading.show();
		event.preventDefault();
		var longi = $('#longitude').val();
		var lati = $('#latitude').val();
		console.log(long, lati)
		var inputLocation = {
			geo: lati + ',' + longi + ',' + '25mi',
			only:'Landscapes',
			image_size: 3,
			rpp: 28,
			sort: 'highest_rating'
		}
		});
		console.log(inputLocation);
		_500px.api('/photos/search',searchOptions, function(resp){
			$('.image-results-view').show()
			var photos = resp.data.photos;
			for(var i =0; i < photos.length; i++){
				var newImg = $('<img>').
				attr('src',photos[i].image_url).
				addClass('image');
				$('.images').append(newImg);
			};
	});
			});
function SeeImageText(){
	if(document.documentElement.lang == "es"){
		return "Ver Imagen"
	} else {
		return "See Image"
	}
  }
  
  window.onload = function() {
	var url_string = window.location.href
	var url = new URL(url_string);
	var tbm = url.searchParams.get("tbm");
	
	if(tbm == "isch"){
		console.log("Image Search Detected: See Image Button Active");
		$(".rg_l").click(function(){
			setTimeout(function () {
				$(".see_image_button").remove()
				$(".irc_but_r > tbody > tr").append('<td><a class="i18192 r-iJUvebWamI4Y see_image_button" role="button"><span>'+SeeImageText()+'</span></a></td>');
				var image_url = $('div[style*="transform: translate3d(0px, 0px, 0px)"] > .irc_t > .irc_mic > .irc_mimg > a > img').attr('src');
				console.log("Updating see image link: "+image_url)
				$(".see_image_button").attr("href", image_url)
				console.log('%c       ', 'font-size: 100px; background: url('+image_url+') no-repeat; background-size: contain;');
			}, 300);
		});
	} else {
	  console.log("No image search active")
	}
  };
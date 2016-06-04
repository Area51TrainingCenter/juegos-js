	var facebookId=0;
	var nombreUsuario="";
	var leido=false;
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '822915474464976',
      xfbml      : true,
      version    : 'v2.3'
    });

	function onLogin(response) {
	  if (response.status == 'connected') {
	    FB.api('/me?fields=id', function(data) {
	      facebookId = data.id;
		  var url = "datos.php?id="+ facebookId;
		  var jqxhr = $.get(url,function(data) {
		  		leido=true;
				nombreUsuario = data;
		  });
	    });
	  } else {
	  	$("div").hide();
	  	$("div.nopermisos").show();
	  	/*FB.login(function(response) {
	      onLogin(response);
	    }, {});*/
	  }
	}

	FB.getLoginStatus(function(response) {
	  // Check login status on load, and if the user is
	  // already logged in, go directly to the welcome message.
	  if (response.status == 'connected') {
	    onLogin(response);
	  } else {
	    // Otherwise, show Login dialog first.
	    FB.login(function(response) {
	      onLogin(response);
	    }, {});
	    //{scope: 'user_friends, email'}
	  }
	});


    // ADD ADDITIONAL FACEBOOK CODE HERE
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

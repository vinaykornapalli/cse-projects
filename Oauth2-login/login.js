
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#info").css('display',"block")
    $("#username").text(profile.getName());
    $("#image").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      $("#loggedout").css("display" , "block");
    });
  }

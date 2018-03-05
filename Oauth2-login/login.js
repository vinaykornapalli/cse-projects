
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#username").text(profile.getName());
    $("#image").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
  }
  
window.fbAsyncInit = function () {
  FB.init({
    appId: '285285855520342',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v3.1'
  });

  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function loginFacebook() {
  FB.login(function (response) {
    if (response.authResponse) {
      console.log(response);
      // FB.api('/me', function (response) {
      //   console.log('Good to see you, ' + response.name + '.');

      //   document.getElementById("name").innerHTML = `Logado como ${response.name}`;
      // });
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  });
}
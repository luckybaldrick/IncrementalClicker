const facebook = {
    appId: 'YOUR FB APP ID GOES HERE',
    cookie: true,
    xfbml: true,
    version: 'v2.11',
    scope: 'email'
  };

  const google = {
    client_id: 'YOUR GOOGLE APP ID GOES HERE',
    scope: "https://www.googleapis.com/auth/plus.login"
  };
module.exports = {
  facebookConfig: facebook,
  googleConfig: google
}
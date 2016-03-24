var $ = require('jquery');

$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

$(function(){
  $('#signup').on('submit', function(event){
    event.preventDefault();
    var $form = $(this);
    var formData = $form.serialize();
    $.post('https://vivid-heat-4434.firebaseio.com');

  });
  $('#login').on('submit', function(event){
    event.preventDefault();

  });

});


var ref = new Firebase("https://vivid-heat-4434.firebaseio.com");
ref.createUser({email: "bobtony@firebase.com", password: "correcthorsebatterystaple"},
function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});

var ref = new Firebase("https://vivid-heat-4434.firebaseio.com");
ref.authWithPassword({email: "bobtony@firebase.com", password: "correcthorsebatterystaple"},
function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

{
  "rules": {
     ".read": "auth !== null",
     ".write": "auth !== null"
  }
}

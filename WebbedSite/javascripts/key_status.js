$(function() {
  window.keydown = {};
  
  //get the name of the key
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  //On button press/release, correct the keydown object 
  $(document).bind("keydown", function(event) {
    window.keydown[keyName(event)] = true;
  });
  
  $(document).bind("keyup", function(event) {
    window.keydown[keyName(event)] = false;
  });
});

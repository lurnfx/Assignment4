(function (window) {
    var helloSpeaker = new Object();
       var speakWord = "Hello";
     //  var helloSpeaker = new Object();

      helloSpeaker.speak = 
      function speak(names) {
      console.log(speakWord + " " + names);
    }

     window.helloSpeaker = helloSpeaker;

})(window);
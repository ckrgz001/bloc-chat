(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;
    Room.add = function (roomName){
        console.log("form input");
        console.log(roomName);
        rooms.$add({
            room:roomName
        });
    };
    return Room;
  }



  angular
    .module('bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();

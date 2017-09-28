(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.add = function(roomName){
            Room.add(roomName);
        };


    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

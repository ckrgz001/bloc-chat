(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.room = "which room";
        this.add = function(){
            Room.add(this.room);
            console.log("rooms");
            console.log(this.rooms);
        };


    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.create = function(shinroomName){
            Room.create(shinroomName);

        };
    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

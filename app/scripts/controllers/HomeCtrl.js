(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.add = Room.add();


    };

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

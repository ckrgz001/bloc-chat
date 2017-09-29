(function() {
    function HomeCtrl(Room, $uibmodal) {
        this.rooms = Room.all;
        this.add = function(){
            Room.add(this.room);
        }

        var modalInstance = $uibModal.open({
                templateUrl: '/templates/roommodal.html',
                backdrop: 'static',
                keyboard: false,
                controller:'RoomMdlCtrl as roomCtrl'
                });



    }

    angular
        .module('bloc-chat')
        .controller('HomeCtrl', ['$uibmodal','Room', HomeCtrl]);
})();

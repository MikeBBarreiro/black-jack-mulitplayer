(function(){
    'use strict';

    angular.module('hapi-auth')
        .controller('RoomsListCtrl', ['$scope', '$state', function($scope, $state){

            $scope.chat = function(msg){
                socket.emit('globalChat', msg);
                //alert(msg);
            };

            socket.on('bGlobalChat', function(data){
                //console.log(data);

                $('#messages').append('<div>' + data + '</div>');
            });
        }]);
})();

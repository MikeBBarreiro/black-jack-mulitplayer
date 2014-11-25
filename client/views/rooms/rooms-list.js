(function(){
    'use strict';

    angular.module('hapi-auth')
        .controller('RoomsListCtrl', ['$scope', '$state', function($scope, $state){
            $scope.chat = function(msg){
                socket.emit('globalChat', msg);
                //alert(msg);
            };

            socket.on('bGlobalChat', function(data){
                var name = data.username;
                //console.log(data);
                $('#messages').append('<div class="msgtxt">'+ name + data + '</div>');
                //$scope.clearChat();
                $scope.clearFade();
            });

            $scope.clearFade = function(){
                $('.msgtxt').fadeIn('slow').delay(20000).fadeOut('slow', function(){
                    $(this).remove();
                });
            };

        }]);
})();

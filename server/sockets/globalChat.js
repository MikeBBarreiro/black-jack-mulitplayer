'use strict';

module.exports = function(data){
    var socket = this;

    //console.log('message rc from client', data);

    socket.emit('bGlobalChat', data);
    socket.broadcast.emit('bGlobalChat', data);
};

var io = require('socket.io').listen(8888),
    ch = require('child_process');

io.sockets.on('connection', function (socket) {
    socket.on('ping', function (data) {
        var ping = ch.spawn('ping', [data]);
        ping.stdout.on("data", function (data) {
            socket.emit("pong", data.toString());
        });

    });
});

console.log('Socket app is running at port: 8888');

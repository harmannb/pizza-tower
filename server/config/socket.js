module.exports = function(app, server){
var io = require('socket.io').listen(server)
var player_arr = [];

io.sockets.on('connection', function(socket){

  socket.on('new_player_entered', function(playerdata){
    player_arr.push(playerdata);
  //  socket.emit('existing_players', player_arr);
  	// socket.broadcast.emit('new_player_entered', playerdata);
  	io.emit('existing_players', player_arr);
  })
  socket.on('key_pressed',function(chef){
    for(var i = 0; i < player_arr.length; i++){
      if(player_arr[i].socketid === chef.socketid){
        player_arr[i].X = chef.x;
        player_arr[i].stack = chef.stack;
      }
    }
    socket.broadcast.emit('key_pressed',chef);
  })

	});

}

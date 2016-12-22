anguapp.controller('welcomeCtrl',function($scope,$uibModal,$uibModalInstance,$location,gameFactory){

    $scope.startGame = function(){
    $scope.player.socketid = socket.id;
    $scope.player.X = Math.random() * 500;
    $scope.player.Y = 530;
    $scope.player.stack = [];
      socket.emit('new_player_entered', $scope.player);

      socket.on('existing_players', function(player_arr){
        $uibModalInstance.close();
        gameFactory.playgame(player_arr, $scope.player);
      })

      // socket.on('existing_players', function socketdata(player_arr){
      // 	gameFactory.existing_players(player_arr);
      // })

      // gameFactory.saveFormData($scope.player,function(){
      //   $location.path('/gamepage');
      //   //$uibModalInstance.close();
      // })
    }


})

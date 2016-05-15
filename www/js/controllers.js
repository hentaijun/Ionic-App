angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,loves) {
  $scope.loves=loves;
  $scope.seeMore = function(){
    for(var i=0;i<3;i++){
      $scope.loves.push({
        title: '烤言自助烧烤',
        body: '[天河等]午餐晚餐2选1，1人次，免费WiFi，免预约',
        src: 'img/美团Home1_r2_c2.jpg',
        page:'#',
        price_now:'59.9元',
        price_old:'79.9元'
      });
    }
  };
  $scope.share = function(item){
    alert("你分享了");
  };
})

.controller('ShopCtrl', function($scope,popData,$ionicPopover) {
  $scope.popData = popData;
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });


  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
//Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
})


.controller('MeCtrl', function($scope,$ionicPopup, $timeout) {
  // 触发一个按钮点击，或一些其他目标
  $scope.showPopup = function() {
    $scope.data = {}

    // 一个精心制作的自定义弹窗
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.wifi">',
      title: '请输入wifi密码',
      subTitle: 'Please use normal things',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>保存</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              //不允许用户关闭，除非他键入wifi密码
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        },
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
    $timeout(function() {
      myPopup.close(); //由于某种原因3秒后关闭弹出
    }, 5000);

    // 一个确认对话框
    $scope.showConfirm = function() {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Consume Ice Cream',
        template: 'Are you sure you want to eat this ice cream?'
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    };

    // 一个提示对话框
    $scope.showAlert = function() {
      var alertPopup = $ionicPopup.alert({
        title: 'Don\'t eat that!',
        template: 'It might taste good'
      });
      alertPopup.then(function(res) {
        console.log('Thank you for not eating my delicious ice cream cone');
      });
    };
  };
})

.controller('MoreCtrl',function($scope,$ionicSideMenuDelegate){
  //$scope.toggleLeftSideMenu = function(){
  //  $ionicSideMenuDelegate.toggleLeft();
  //}
})
.controller('FoodCtrl',function($scope,$ionicActionSheet){
  $scope.buttonData = "My button";
  $scope.showAction = function(){
      $ionicActionSheet.show({
        buttons:[
          { text:"<b>分享</b>"},
          { text:"移动"},
        ],
        destructiveText:'删除',
        titleText:'这是一个操作表',
        cancelText:'取消',
        buttonClicked:function(index){
          $scope.buttonData = "Share";
          return true;
        },
        cancel:function(){
          $scope.buttonData = "Bye Bye";
          return true;
        },
        destructiveButtonClicked:function(){
          $scope.hidden = true;
          return true;
        }

      });
    };
});




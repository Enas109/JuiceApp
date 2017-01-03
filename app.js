// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform,$rootScope,$location,$ionicModal,$ionicSlideBoxDelegate) {
    
    $rootScope.goto=function(url){
        $location.path(url)
    }
    
    
    $rootScope.activeIcon=function(index){
        $rootScope.active=index
    }
    
    $rootScope.myActiveSlide = 0;

      $rootScope.slidePrevious = function() {

        $ionicSlideBoxDelegate.previous();
      }

      $rootScope.slideNext = function() {

        $ionicSlideBoxDelegate.next();
      }
/**************** Details slidebox ***********/
//$rootScope.options = {
//  loop: false,
//  effect: 'fade',
//  speed: 500,
//}
//
//$rootScope.$on("$ionicSlides.sliderInitialized", function(event, data){
//  // data.slider is the instance of Swiper
//  $rootScope.slider = data.slider;
//});
//
//$rootScope.$on("$ionicSlides.slideChangeStart", function(event, data){
//  console.log('Slide change is beginning');
//});
//
//$rootScope.$on("$ionicSlides.slideChangeEnd", function(event, data){
//  // note: the indexes are 0-based
//  $rootScope.activeIndex = data.slider.activeIndex;
//  $rootScope.previousIndex = data.slider.previousIndex;
//})
/********************* menuModal category ******************/
    $rootScope.menu=[
        {id:"1", icon:"ion-android-home",name:"Home", location:"app/home"},
        {id:"2",icon:"ion-android-apps",name:"Categories", location:"app/categories"},
        {id:"3",icon:"ion-android-favorite",name:"Favorites", location:"app/favorite"},
        {id:"4",icon:"ion-android-cart",name:"Cart", location:"app/cart"},
        {id:"5",icon:"ion-ios-gear-outline",name:"Settings", location:"app/setting"},
        {id:"6",icon:"ion-log-out",name:"Logout", location:"login"}
        
    ]
/********************** Categories ******************/
    $rootScope.categories=[
        {id:"1",img:"/cat1.png",name:"Cakes",location:"app/iceCream"},
        {id:"2",img:"/cat2.png",name:"Cinabon",location:"app/iceCream"},
        {id:"3",img:"/cat3.png",name:"Fresh Juice",location:"app/iceCream"},
        {id:"4",img:"/cat4.png",name:"Ice Cream",location:"app/iceCream"},
        {id:"5",img:"/cat5.png",name:"Shakes",location:"app/iceCream"},
        {id:"6",img:"/cat6.png",name:"Waffels",location:"app/iceCream"},{id:"5",img:"/cat7.png",name:"Hot Beverages",location:"app/iceCream"},
        {id:"6",img:"/cat8.png",name:"Make your own cocktails",location:"app/iceCream"}
        
    ]
/********************** iceCream ******************/
        $rootScope.iceCream1=[
        {id:"1",img:"img/icecream1.png",price:"25 $"},
        {id:"2",img:"img/icecream2.png",price:"15 %"},
        {id:"3",img:"img/icecream3.png",price:"70 %"}
        
    ]
    $rootScope.iceCream2=[
        {id:"1",img:"img/icecream4.png",price:"25 %"},
        {id:"2",img:"img/icecream1.png",price:"25 $"},
        {id:"3",img:"img/icecream2.png",price:"15 $"}
        
    ]
/**************** start Details **********************/
    $rootScope.details=[
        {id:'1',img:"img/details1.png"},{id:'2',img:"img/details2.png"},{id:'3',img:"img/slide-box-img.png"}
    ]
    
/*********************** start menuModal *******************/
$ionicModal.fromTemplateUrl('templates/menuModal.html', {
    scope: $rootScope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $rootScope.menuModal = modal;
  });
  $rootScope.openmenuModal = function() {
    $rootScope.menuModal.show();
  };
  $rootScope.closemenuModal = function() {
    $rootScope.menuModal.hide();
  };
  // Cleanup the modal when we're done with it!
  $rootScope.$on('$destroy', function() {
    $rootScope.menuModal.remove();
  });
  // Execute action on hide modal
  $rootScope.$on('menuModal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $rootScope.$on('menuModal.removed', function() {
    // Execute action
  })
/********************** shareModal **********************/
   $ionicModal.fromTemplateUrl('templates/shareModal.html', {
    scope: $rootScope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $rootScope.shareModal = modal;
  });
  $rootScope.openshareModal = function() {
    $rootScope.shareModal.show();
  };
  $rootScope.closeshareModal = function() {
    $rootScope.shareModal.hide();
  };
  // Cleanup the modal when we're done with it!
  $rootScope.$on('$destroy', function() {
    $rootScope.shareModal.remove();
  });
  // Execute action on hide modal
  $rootScope.$on('shareModal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $rootScope.$on('shareModal.removed', function() {
    // Execute action
  })
/*************************** *****************************/
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

 .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
$ionicConfigProvider.backButton.text('').previousTitleText('');
  $stateProvider
  
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('login', {
    url: '/login',
        templateUrl: 'templates/login.html'
  })

  .state('signup', {
      url: '/signup',
          templateUrl: 'templates/signup.html'
    })
  
  .state('shipping', {
      url: '/shipping',
          templateUrl: 'templates/shipping.html'
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.iceCream', {
      url: '/iceCream',
      views: {
        'menuContent': {
          templateUrl: 'templates/iceCream.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.cocktails', {
      url: '/cocktails',
      views: {
        'menuContent': {
          templateUrl: 'templates/cocktails.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
        }
      }
    })
    .state('app.details', {
      url: '/details',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
        }
      }
    })
    .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'templates/setting.html',
        }
      }
    })
    .state('app.checkout', {
      url: '/checkout',
      views: {
        'menuContent': {
          templateUrl: 'templates/checkout.html',
        }
      }
    })
    .state('app.favorite', {
      url: '/favorite',
      views: {
        'menuContent': {
          templateUrl: 'templates/favorite.html',
        }
      }
    })
    .state('app.cart', {
      url: '/cart',
      views: {
        'menuContent': {
          templateUrl: 'templates/cart.html',
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

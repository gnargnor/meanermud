app.controller('LocationController', ['CreatorService', '$scope', '$http', '$location', 'UserService', function(CreatorService, $scope, $http, $location, UserService){
  // console.log('LocationController Hit');
  //
  var location = this;
  //
  // location.newLoc = CreatorService.newLoc;
  location.locationsObject = CreatorService.locationsObject;
  location.locationCreator = CreatorService.locationCreator;
  location.locationUpdater = CreatorService.locationUpdater;
  location.locationDeleter = CreatorService.locationDeleter;

  location.sightsObject = CreatorService.sightsObject;
  location.sightCreator = CreatorService.sightCreator;
  location.sightUpdater = CreatorService.sightUpdater;
  location.sightDeleter = CreatorService.sightDeleter;

  // location.newSight = function()
  // location.getLocations = CreatorService.getLocations;
  // location.editLocation = CreatorService.editLocation;
  //
  location.addSightView = false;
  location.editSightView = false;
  location.displayDescView = false;
  //
  location.newSight = function(){

    if (location.editSightView || location.displayDescView) {
      location.editSightView = false;
      location.displayDescView = false;
    }
    location.addSightView = true;
  };
  //
  // location.addSightToLoc = CreatorService.addSightToLoc;
  // location.displayDesc = CreatorService.displayDesc;
  //
  location.displayView = function(){

    if (location.editSightView || location.addSightView){
      location.editSightView = false;
      location.addSightView = false;
    }
    location.displayDescView = true;
  };
  //
  location.editSight = function(sight){

    if (location.addSightView || location.displayDescView) {
      location.addSightView = false;
      location.displayDescView = false;
    }
    location.editSightView = true;
  };
  //
  // location.updateSight = CreatorService.updateSight;
  //
  //
  //
  //
  location.messageObject = CreatorService.messageObject;

  // location.getLocations();

}]);

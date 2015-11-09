var app = angular.module('cardsApp', []);

app.controller('mainController', function($scope) {
  $scope.statusCards = [{
    title: "Assigned Tasks",
    cards: [{
      id: 1,
      text: 'Conversion of profile page on web and mobile app'
    }],
    sno: 1,
    id: 1,
    modal: false
  }, {
    title: "Completed Tasks",
    cards: [{
      id: 1,
      text: 'Import Hotel API in our current module'
    }, {
      id: 2,
      text: 'Transfer Server from WBS to rack management'
    }],
    sno: 2,
    id: 2,
    modal: false
  }, {
    title: "Pending Tasks",
    cards: [{
      id: 1,
      text: 'Commit changes of Dashboard and push to GIT'
    }, ],
    sno: 1,
    id: 3,
    modal: false
  }];

  $scope.addNewStatus = function() {
    $scope.statusCards.push({
      title: "Untitled Task",
      cards: [],
      sno: 0,
      id: $scope.statusCards.length + 1
    });
  };

  $scope.deleteAllStatus = function() {
    $scope.statusCards = [];
  };

  $scope.addNewCard = function(statusCard) {
    statusCard.sno += 1;
    statusCard.cards.push({
      id: statusCard.sno,
      text: "Untitled Text"
    });
  };

  $scope.deleteCard = function(statusCard, card) {
    statusCard.cards = statusCard.cards.filter(function(singleCard) {
      return singleCard.id !== card.id;
    });
  };

  $scope.editCardText = function(card) {
    card.text = prompt("Enter New Value", card.text);
  };

  $scope.editStatusCardTitle = function(statusCard) {
    var modalId = '#modal-' + statusCard.id;
    var messageId = '#message-input-' + statusCard.id;
    $(modalId).modal().modal('show');
    
    if(!statusCard.modal){
      statusCard.model = true;
      $(messageId).keypress(function(e) {
        if (e.which == 13) {
          $(modalId).modal('hide');
        }
      });
    }
  };

  $scope.deleteAllCards = function(statusCard) {
    statusCard.cards = [];
  };

  $scope.deleteList = function(statusCard) {
    $scope.statusCards = $scope.statusCards.filter(function(eachStatusCard) {
      return eachStatusCard.id !== statusCard.id;
    });
  };

});
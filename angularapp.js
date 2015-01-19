angular.module('myApp', [])
  .controller('controllerOne', ['$scope', function($scope) {
    this.itemlist = [
      {'id': 0, 'date': 'May 09', 'task': 'Kill Bill'}
    ];
    var counter = 0;
    this.enterItemToDo = function(item) {
      counter++;
      var enterItemFormat = {
        'id': counter, 
        'date': 'May 09', 
        'task': item
      };
      this.itemlist.push(enterItemFormat)
    }
    this.removeItemToDo = function(item) {
      for (var i = 0; i < this.itemlist.length; i++) {
        if (this.itemlist[i].id == item.id) {
          this.itemlist.splice(item.id, 1)
        }
      }
    };
  }])
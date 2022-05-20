var app = angular  
           .module("myModule", [])  
           .controller("myController", function ($scope) {  
               $scope.invoice = {  
                   items: [{  
                       qty: 5,  
                       description: 'Product-1',  
                       cost: 120  
                   }]  
               };  
               $scope.addItem = function () {  
                   $scope.invoice.items.push({  
                       qty: 1,  
                       description: '',  
                       cost: 0  
                   });  
               },  
  
          $scope.removeItem = function (index) {  
              $scope.invoice.items.splice(index, 1);  
          },  
  
          $scope.total = function () {  
              var total = 0;  
              angular.forEach($scope.invoice.items, function (item) {  
                  total += item.qty * item.cost;  
              })  
  
              return total;  
          }  
           });  
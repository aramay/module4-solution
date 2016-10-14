(function () {
'use strict';

angular.module('Data', []);

angular.module('Data')
.config(function () {
  console.log("Data config fired.");
}).
run(function () {
  console.log("Data run fired.");
});

})();

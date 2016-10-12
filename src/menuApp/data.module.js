(function () {
'use strict';

angular.module('data', []);

angular.module('data')
.config(function () {
  console.log("Data config fired.");
}).
run(function () {
  console.log("Data run fired.");
});

})();

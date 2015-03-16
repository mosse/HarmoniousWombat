angular.module('RecallJS')
  .factory('LearningAlgo', LearningAlgo);

function LearningAlgo(UserData) {
  // expose methods and properties to rest of app
  return {
    getProblems: getProblems
  };

  // simple function to pass along user's problems
  function getProblems() {
    var data = UserData.data;
    return data.problems;
  }

  // helper function to convert milliseconds to days
  var convertMStoDAYS = function(numMS) {
    return numMS / (1000 * 60 * 60 * 24);
  };
}
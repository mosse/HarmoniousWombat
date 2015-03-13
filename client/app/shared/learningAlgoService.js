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
}
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

  function calcAgeWeight(problem) {
    // identify number of days since last attempt
    var timeLastAttempt = problem.attempts.slice(-1)[0].timeSubmitted; // assuming last attempt is most recent
    var currTime = (new Date()).getTime(); // in milliseconds
    var daysSince = convertMStoDAYS(currTime - timeLastAttempt);

    // calculate weight
    return Math.pow(2, daysSince/5); // weight will double every five days
  }                                  // since the last attempt

  function calcProgressWeight(problem) {

    function calcAverageRating(attempts, numToAverage) {
      // identify the most recent ratings
      var recentAttempts = attempts.slice(-numToAverage);
      var ratings = recentAttempts.map(function(attempt){
        return attempt.rating;
      });

      // calculate the average of most recent ratings
      var sum = ratings.reduce(function(tot, curr){
        return tot + curr;
      });
      return sum / ratings.length;
    }
  }

  // helper function to convert milliseconds to days
  function convertMStoDAYS(numMS) {
    return Math.round(numMS / (1000 * 60 * 60 * 24));
  }
}
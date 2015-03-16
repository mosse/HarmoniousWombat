// TODO: Change the data model so that a user's problem ratings are mapped
//       to a float

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
    // helper function to calculate the average of the most recent ratings
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
      return sum / numToAverage; // NOTE: May be dividing by more than the number of attempts
                                 // which is what we want so that we aren't biased against seeing newer problems
    }
    // calculate and return weight
    var avgRating = calcAverageRating(problem.attempts, 10); // calculate avg rating of last 10 attempts
    return Math.pow(0.5, 5 * avgRating); // weight will halve every time the
                                         // average rating of past 10 increases by 0.2
  }

  // helper function to convert milliseconds to days
  function convertMStoDAYS(numMS) {
    return Math.round(numMS / (1000 * 60 * 60 * 24));
  }
}
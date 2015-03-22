angular.module('RecallJS')
  .factory('ProblemData', ProblemData);

function ProblemData($http, $window){

  return {
    addOwn: addOwn,
    removeOwn: removeOwn,
    create: create,
    getOwn: getOwn,
    getAll: getAll
  };

  function addOwn(problem){
    return $http({
      method: 'POST',
      url: '/problems/addOwn',
      data: {
        username: JSON.parse($window.localStorage.getItem('com.recalljs')).username,
        problem: problem
      }
    });
  }

  function removeOwn(problem){
    return $http({
      method: 'POST',
      url: '/problems/removeOwn',
      data: {
        username: JSON.parse($window.localStorage.getItem('com.recalljs')).username,
        problem: problem
      }
    });
  }

  function create(problem){
    return $http({
      method: 'POST',
      url: '/problems/create',
      data: problem
    });
  }

  function getOwn(){
    return $http({
      method: 'GET',
      url: '/problems/getOwn/'+JSON.parse($window.localStorage.getItem('com.recalljs')).username
    })
    .then(function (data) {
      return data.data.problems;
    });
  }

  function getAll(){
    return $http({
      method: 'GET',
      url: '/problems/getAll',
    })
    .then(function (data) {
      return data.data;
    });
  }

}


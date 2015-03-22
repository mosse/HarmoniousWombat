angular.module('RecallJS')
  .factory('ProblemData', ProblemData);

function ProblemData($http, UserData){

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
        username: UserData.data.username,
        problem: problem
      }
    });
  }

  function removeOwn(problem){
    return $http({
      method: 'POST',
      url: '/problems/removeOwn',
      data: {
        username: UserData.data.username,
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
      url: '/problems/getOwn/'+UserData.data.username
    })
    .then(function (data) {
      return data.data;
    });
  }

  function getAll(){
    return $http({
      method: 'GET',
      url: '/problems/getAll',
    })
    .then(function (data) {
      return data;
    });
  }

}


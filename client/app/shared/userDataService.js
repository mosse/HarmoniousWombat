angular.module('RecallJS')
  .factory('UserData', UserData);

function UserData() {
  return {
    data: null
  };
}
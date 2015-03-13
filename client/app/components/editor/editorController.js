angular.module('RecallJS')
  .controller('EditorController', function($scope){
    var egInput = 'GETINPUT';
    var egOutput = 'GETOUTPUT';
    var prompt = 'GETPROMPT';
    var funcName = 'GETFUNCNAME';

    CodeMirror(document.body, {
      value: "egInput",
      mode:  "javascript",
      linenumbers: true
    });
    CodeMirror(document.body, {
      value: "egOutput",
      mode:  "javascript",
      linenumbers: true
    });
    CodeMirror(document.body, {
      value: "functionName",
      mode:  "javascript",
      // theme: "solarized",
      linenumbers: true
    });
  });
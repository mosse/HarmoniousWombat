angular.module('RecallJS')
  .controller('EditorController', function($scope/*,LearningAlgo*/){
    // var problems = LearningAlgo.getProblems;
    var problems = [ { 
      title: 'Add Two Numbers',
      functionName: 'addNums',
      examples: [ 'addNums(10, 2) === 12 // returns true' ],
      attempts: [ [Object], [Object] ],
      tests: [ [Object], [Object] ] },
    { title: 'Subtract Two Numbers',
      functionName: 'subtractNums',
      examples: [ 'subtractNums(10, 2) === 8 // returns true' ],
      attempts: [ [Object], [Object] ],
      tests: [ [Object], [Object] ] } ]

    var example = problems[0].examples[0];
    var prompt = problems[0].title;
    var funcName = problems[0].functionName;

    CodeMirror(document.body, {
      value: example,
      mode:  "javascript",
      linenumbers: true
    });
  
    CodeMirror(document.body, {
      value: funcName,
      mode:  "javascript",
      // theme: "solarized",
      linenumbers: true
    });
  });
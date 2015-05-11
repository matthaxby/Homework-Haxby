var i = 0;
var answer = 0;
var answerSubtract = 100;
var logTest = [1, 2, 3, 4, 5];
var sumTest = [1, 2, 3];
var subtractTest = [10, 10, 10];
var largestTest = [1, 9, 7];
var smallestTest = [20, 19, 40];
var averageTest = [10, 20, 30];

var logAll = function(array) {
  while(i < array.length) {
    console.log(array[i]);
    i++;
  }
};


var sum = function(array) {
  while (i < array.length) {
    answer = answer + array[i];
    i++;
  }
  return answer;
};


var subtract = function(array) {
  while (i < array.length) {
    answerSubtract = answerSubtract - array[i];
    i++;
  }
  return answerSubtract;
};

var largest = function(array) {
  while (i < array.length) {
    if (array[i] > answer) {
      answer = array[i];
    }
    i++;
  }
  return answer;
};

var smallest = function(array) {
  while (i < array.length) {
    if (array[i] < answer) {
      answer = array[i];
    }
    i++;
  }
  return answer;
};

var average = function(array) {
  while (i < array.length) {
    answer = answer + array[i];
    i++;
  }
  return answer/array.length;
};

var test = [1, 2, 4, 8, 16, 32];
var fibTest = [1, 2];
var num;
var newArray;
var num1;
var num2;

var double = function(array, len) {
  for (i=0; i < array.length; i++) {
    num = array[i];
  }
  if (array.length < len) {
  array.push(num*2);
  return double(array, len++);
  }
  else {
    return array;
  }
};

console.log(double(test, 12));

var fibonacci = function(array, len) {
  for (i=0; i < array.length; i++) {
     num1 = array[i-1];
     num2 = array[i];
  }
  if (array.length < len) {
    array.push(num1+num2);
    return fibonacci(array, len++);
  }
  else {
    return array;
  }
};

console.log(fibonacci(fibTest, 8));

var prime = function(num) {
  var testnum = 2;
  while (testnum <= num/2) {
    if (num % testnum === 0) {
      return "not prime";
    }
    else {
      testnum++;
    }
  }
  return "prime";
};

console.log(prime(14));

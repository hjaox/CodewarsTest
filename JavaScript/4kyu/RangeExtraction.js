/*
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/javascript


A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
    let returnArr = [];
    let rangeList = [];
    
    list.forEach((num, i) => {
      let nextNum = list[i + 1];
      
      if(num + 1 === nextNum) {
        rangeList.push(num, nextNum);
      } else {
        if(rangeList.length > 2) {
          returnArr.push(`${rangeList[0]}-${rangeList.at(-1)}`);
        } else if(!rangeList.length) {
          returnArr.push(num)
        } else {
          returnArr.push(...rangeList);
        }
        
        rangeList = [];
      }
    })
    
    return returnArr.join();
  }
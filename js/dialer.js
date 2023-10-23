export default {
  reachableKeys,
  countPaths,
  listAcyclicPaths,
};

// ****************************

let dialpad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [, 0],
];

var nearbyKeys = [
  [4, 6],
  [6, 8],
  [7, 9],
  [4, 8],
  [3, 9, 0],
  [],
  [1, 7, 0],
  [2, 6],
  [1, 3],
  [2, 4],
];

// countPaths = memoize(countPaths);

function reachableKeys(startingDigit) {
  return nearbyKeys[startingDigit];
}

// function countPaths(startingDigit, hopCount) {
//   // TODO: given the digit/key to start from and
//   // the number of hops to take, return a count
//   // of all the possible paths that could be
//   // traversed

//   if (hopCount === 0) return 1;
//   var pathCount = 0;

//   for (let digit of nearbyKeys[startingDigit]) {
//     pathCount += countPaths(digit, hopCount - 1);
//   }
//   return pathCount;
// }

function countPaths(startingDigit, hopCount) {
  // Using Tabulation - Dynamic programming

  if (hopCount === 0) return 1;

  var priorPathCounts = Array(10).fill(1);
  for (let hops = 0; hops < hopCount; hops++) {
    var pathCounts = Array(10).fill(0);
    for (let digit = 0; digit <= 9; digit++) {
      for (let key of nearbyKeys[digit]) {
        pathCounts[digit] += priorPathCounts[key];
      }
    }

    priorPathCounts = pathCounts;
  }

  return priorPathCounts[startingDigit];
}

function listAcyclicPaths(startingDigit) {
  // TODO: given the digit/key to start from,
  // return a list of the distinct acyclic
  // paths that are possible to traverse
  //
  // e.g. [
  //   [4, 3, 8, 1, 6, 7, 2, 9],
  //   [4, 3, 8, 1, 6, 0],
  //   ...
  // ]

  var paths = [];

  var nextHops = nearbyKeys[startingDigit];

  for (let nextHop of nextHops) {
    let path = [startingDigit, nextHop];

    followPath(path, paths);
  }
  return paths;
}

function followPath(path, paths) {
  var nextHops = nearbyKeys[path[path.length - 1]];
  var forwardPathFound = false;

  for (let nextHop of nextHops) {
    if (!path.includes(nextHop)) {
      forwardPathFound = true;
      let nextPath = [...path, nextHop];
      followPath(nextPath, paths);
    }
  }

  // if no forward path is found again, push in the path
  // this will typically be done at the last recursive step
  if (!forwardPathFound) {
    paths.push(path);
  }
}

// function memoize(fn) {
//   var cache = {};

//   return function memoized(start, length) {
//     if (!cache[`${start}:${length}`]) {
//       cache[`${start}:${length}`] = fn(start, length);
//     }

//     return cache[`${start}:${length}`];
//   };
// }

// reachable keys

// var nearbyKeys = [];

// for (let [rowIdx, row] of dialpad.entries()) {
//   // find the column index
//   var colIdx = row.indexOf(startingDigit);

//   // this means we have found the column index of starting digit
//   if (colIdx != -1) {
// 	for (let rowMove of [-2, -1, 1, 2]) {
// 	  //  as long as you don't have the same row and col move since one can only be 1 or 2
// 	  for (let colMove of [-2, -1, 1, 2])
// 		if (Math.abs(rowMove) != Math.abs(colMove)) {
// 		  // if new row move is not out of bounds and if the new colmove is not out of bounds
// 		  // and the current move is not undefined.
// 		  if (
// 			rowIdx + rowMove >= 0 &&
// 			rowIdx + rowMove <= 3 &&
// 			colIdx + colMove >= 0 &&
// 			colIdx + colMove <= 2 &&
// 			dialpad[rowIdx + rowMove][colIdx + colMove] != undefined
// 		  ) {
// 			nearbyKeys.push(dialpad[rowIdx + rowMove][colIdx + colMove]);
// 		  }
// 		}
// 	}
//   }
// }

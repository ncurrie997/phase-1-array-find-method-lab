const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
]

function superbowlWin(array) {
  const winningYear = array.find(element => element.result === "W");

  if (winningYear === undefined) {
    
  return undefined;
} else {
    return winningYear.year
  }
}
// ---This is a result record that shows how results are being followed and their grading
// above 79 -> A
// between 60 and 79 -> B
// between 50 and 59 -> C
// between 40 and 49 -> D
// below 40 - E
let studentMarks = 79;
// grades
function grading () {
if (score>= 0 && score< 100 ){

  if (score > 79) {
    console.log('A');
  } 
  else if (score >= 60 && score <= 79) {
    console.log('B');
  } 
  else if (score >= 50 && score <= 59) {
    console.log('C');
  }
  else if (score >= 40 && score <= 49) {
    console.log('D');
  }
  else {
    console.log('E');
  }
}
}

askForScore();
/*
Program: Zuri I4G Internship Training
Exercise: FrontEnd Task 4B
Intern Name: Solomon Ibeh;
Slack Username: Solomon;
Repo URL: https://xolowapx.github.io/ZuriFrontEndTask4/ 
*/

function checkYuGiOh(n) {
    let multiples = [];

    for(let i=1; i<=n ; i++) {
        multiples.push(i)

         if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0) {
          multiples.push('yu')
        }
        else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0) {
          multiples.push('gi')
        }
        else if (i % 5 == 0 && i % 3 !== 0 && i % 2 !== 0) {
          multiples.push('oh')
        }
        else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0) {
          multiples.push('gi-oh')
        }
        else if (i % 5 == 0 && i % 3 !== 0 && i % 2 == 0) {
          multiples.push('yu-oh')
        }
        else if (i % 5 !== 0 && i % 3 == 0 && i % 2 == 0) {
          multiples.push('yu-gi')
        }
        else if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
          multiples.push('yu-gi-oh')
        }
        else {
          multiples.push(i)
        }

      }
      console.log(multiples);
  }

   checkYuGiOh("fizzbuzz is meh");

/*
Program: Zuri I4G Internship Training
Exercise: FrontEnd Task 4A
Intern Name: Solomon Ibeh;
Slack Username: Solomon;
Repo URL: https://xolowapx.github.io/ZuriFrontEndTask4/
*/

function convertFahrToCelcius(Fahr) {
    if (Fahr == null) {
    	console.log ('Kindly specify an actual number')
    }
    else if (typeof Fahr !== "string" && typeof Fahr !== "number" && !Array.isArray(Fahr)) {
        console.log(`${Fahr} is not a valid number but a/an ${typeof Fahr}.`);
    } else if (Array.isArray(Fahr)) {
        console.log(`${Fahr} is not a valid number but a/an array.`);
    } else {
        let Celsius = ((Fahr-32)*5)/9;
        console.log(Celsius.toFixed(4));
    }
}

convertFahrToCelcius(0);



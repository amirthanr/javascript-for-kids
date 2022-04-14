console.clear();

const time = new Date();
const hour = time.getHours();

let greeting;

if(hour < 12) {
  greeting = "Good Morning";
} else if (hour == 12) {
  greeting = "Good Afternoon";
} else if( hour < 19) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}

firstName = 'Akilavarshini';


console.log(greeting + ", " + firstName);


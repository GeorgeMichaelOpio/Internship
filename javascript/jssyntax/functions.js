console.log("Functions!");

function function_name() {
    //body of the function
}

//Fuction to get sum of two numbers
function add_two_nums(a, b) {
  const sum = a + b;
  console.log("Sum of two numbers is " + sum);
}

add_two_nums(10, 20);

//Returning function
function calculate_age() {
    const year_of_birth = 1990;
    const current_year = 2024;
    const age = current_year - year_of_birth;
    return age;
}

// Fuction inside a function (clojure)
const staff_member_details = () => {
    
    const head_teacher_details = () => {
        let head_teacher_password = '1234';
        //use variable head_teacher_password in function
    };

    const other_teacher_details = () => {
        let teachers_names = ['Teacher 1', 'Teacher 2', 'Teacher 3'];
    };

    //use staff_member_details function and other_teacher_details function
    return {};
}

staff_member_details();

/**

//switch case
switch (expression) {
    case expr1: {
        //statements
        break;
     }
     case expr2: {
        //statements
        break;
     }
     default: {
        //statements
        break;
     };
    }

    */

    
//Day of the week

const get_day_of_week = (day) => {
    switch (day) {
        case "Mon": {
            console.log("Monday");
            break;
        }
        case "Tue": {
            console.log("Tuesday");
            break;
        }
        case "Web": {
            console.log("Wednesday");
            break;
        }
        case "Thur": {
            console.log("Thursday");
            break;
        }
        case "Fri": {
            console.log("Friday");
            break;
        }
        case "Sat": {
            console.log("Saturday");
            break;
        }
        case "Sun": {
            console.log("Sunday");
            break;
        }
        default: {
            console.log("Invalid day");
            break;
        }
    }
}

get_day_of_week("Mon");
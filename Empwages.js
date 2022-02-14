//welcome to EMPWAGES
//uc1
{
    const IS_ABSENT = 0;

    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("UC1 - Employee is ABSENT");
    }
    else {
        console.log("UC1 - Employee is PRESENT");
    }
}
//uc2

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

{
    let empHrs = 0;
    empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;
        default:
            empHrs = 0;
    }
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC2 - Emp Wage: " + empWage);
}

//uc3

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
{
    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3 - Emp Wage: " + empWage, " Total Working Hours: " + empHrs);
}

//UC4
let NO_OF_WORKING_DAYS=20;
let empHours=0;
let dailyWage=0;
for(let day=0;day<NO_OF_WORKING_DAYS;day++){
    empHours = GetEmployeeWage(empCheck);
    dailyWage += empHours*WAGE_PER_HOUR;

}
console.log("UC4: Total wage is "+dailyWage);

//UC5
const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let totalWage=0;
while(totalWorkingDays<=MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    totalWage+=totalWorkingHours*WAGE_PER_HOUR;
}
console.log("UC5: Total wage is "+totalWage);

//UC6
const MAX_WORKING_HOURS=160;
const MAX_WORKING_DAYS=20;
let totalWorkingDays=0;
let totalWorkingHours=0;
let dailyWageArr=new Array();
let totalWage=0;
function calculateWage(emphours)
{
    return emphours*WAGE_PER_HOUR;
}
while(totalWorkingDays<=MAX_WORKING_DAYS && totalWorkingHours<=MAX_WORKING_HOURS)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    totalWorkingHours+=GetEmployeeWage(empCheck);
    totalWorkingDays++;
    let emphours = GetEmployeeWage(empCheck);
    let dailyWage= calculateWage(emphours);
    dailyWageArr.push(dailyWage);
}
dailyWageArr.forEach(wage => 
{
    totalWage=totalWage+wage;
});
console.log("UC6: Total wage is:-  "+totalWage+" Total HRS:- "+totalWorkingHours+" Total Days:- "+totalWorkingDays);

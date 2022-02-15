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

//UC7
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
function sum(dailyWage)
{
    totalWage+=dailyWage;
}
function totalWages(totalWage,dailyWage)
{
    return totalWage+dailyWage;
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
dailyWageArr.forEach(sum);
console.log("UC7-A: Total wage using foreach "+totalWage);
console.log("UC7-A: Total wage using reduce "+dailyWageArr.reduce(totalWages,0));

/*UC7-B:- Show the Day along with Daily Wage using Array map helper function */

let dailyCount=0;
function dailyWageCount(wage)
{
dailyCount++;
return dailyCount+"="+wage;
}
let dailyWageMap = dailyWageArr.map(dailyWageCount);
console.log("UC7-B: Daily wage map is:- "+ dailyWageMap);

/*UC7-C:- Show Days when Full time wage of 160 were earned using filter function */

function fullTimeWage(wage)
{
    return wage.includes("160");
}
let fulldayWage = dailyWageMap.filter(fullTimeWage);
console.log("UC7-C: Wage map when full time salary is earned:- "+fulldayWage);

/*UC7-D:- Find the first occurrence when Full Time Wage was earned using find function */

let firstOccurrence = dailyWageMap.find(fullTimeWage);
console.log("UC7-D: First occurence of full time wage:-  "+firstOccurrence);

/*UC7-E:- Check if Every Element of Full Time Wage is truly holding Full time wage */

console.log("UC7-E: Checking whether all elemets holding full time wage:- "+fulldayWage.every(fullTimeWage));

/*UC7-F:- Check if there is any Part Time Wage */

function partTimeWage(wage){
    return wage.includes("80");
}
console.log("UC7-F: Checking for part time wage:- "+dailyWageMap.some(partTimeWage));

/*UC7-G:- Find the number of days the Employee Worked */

function totalDaysWorked(wage,days)
{
    if (wage>0) days++;
    return days;
}
console.log("UC7-G: Total days worked:- "+dailyWageArr.reduce(totalDaysWorked,0));


/*UC8:- Store the Day and the Daily Wage along with the Total Wage.
        - Use Map to store Day wise Wage - Compute the total wage using the Map */

        const MAX_WORKING_HOURS = 160;
        const MAX_WORKING_DAYS = 20;
        let totalWorkingDays = 0;
        let totalWorkingHours = 0;
        let dailyWageArr = new Array();
        let totalWage = 0;
        let dailyWageMap = new Map();
        function calculateWage(emphours)
        {
            return emphours * WAGE_PER_HOUR;
        }
        function GetTotalWages(totalWage, dailyWage) 
        {
            return totalWage + dailyWage;
        }
        
        while (totalWorkingDays <= MAX_WORKING_DAYS && totalWorkingHours <= MAX_WORKING_HOURS) 
        {
            let empCheck = Math.floor(Math.random() * 10) % 3;
            totalWorkingHours += GetEmployeeWage(empCheck);
            totalWorkingDays++;
            let emphours = GetEmployeeWage(empCheck);
            let dailyWage = calculateWage(emphours);
            dailyWageArr.push(dailyWage);
            dailyWageMap.set(totalWorkingDays, dailyWage);
        }
        console.log(dailyWageMap);
        let totalEmpWage = Array.from(dailyWageMap.values()).reduce(GetTotalWages, 0);
        console.log("UC8: Total employee wage is:- " + totalEmpWage);

    
        //UC9
        let totalHours = Array.from(dailyEmpHoursMap.values()).reduce(GetTotal, 0);
            let totalWage = Array.from(dailyWageMap.values()).reduce(GetTotal, 0);
            console.log("Total hours worked: " + totalHours + " and total wage earned " + totalWage);
            let fullWorkingDays = new Array();
            let partWorkingDays = new Array();
            let nonWorkingDays = new Array();
            dailyEmpHoursMap.forEach((value, key, map) => {
                if (value == 8) fullWorkingDays.push(key);
                else if (value == 4) partWorkingDays.push(key);
                else nonWorkingDays.push(key);
            });
            console.log("Full working days " + fullWorkingDays);
            console.log("Part working days " + partWorkingDays);
            console.log("Non working days " + nonWorkingDays);
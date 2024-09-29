    //my DOM elements
    const basicSalary = document.getElementById("basicSalary");
    const benefits = document.getElementById("benefits");
    const submit = document.getElementById("btn");
    const responseTable = document.querySelector(".response");
    const myName = document.getElementById("name");
    const displayName = document.getElementById("input1");
    const displayGrossSalary = document.getElementById("input2");
    const displayTaxDeductions = document.getElementById("input3");
    const displayNhifDeductions = document.getElementById("input4");
    const displayNssfDeductions = document.getElementById("input5");
    const displayTotalDeductions = document.getElementById("input6");
    const displayNetSalary = document.getElementById("input7");

    //listens for click of submit button to execute code
    submit.addEventListener("click", function (event) {
      event.preventDefault();//prevent automatic submit

      //ensures input of name and basic salary before submition otherwise; alert
      if (myName.value.length === 0) {
        window.alert("Please enter your name");
      } else if (basicSalary.value.length === 0) {
        window.alert("Please enter your \n basic monthly salary");
      } else {
        //display response table on clicking submit button, and if required inputs are entered
        responseTable.style.display = "flex";
      }

      //begin to display results on response div
      // Uses Math.floor to round down values
      //Uses to.LocaleString to space and add commas nunbers by thousands
      displayName.innerHTML = myName.value; //adds Name to table
      displayGrossSalary.innerHTML = `Ksh. ${calculatesGrossSalary(
        basicSalary,
        benefits
      ).toLocaleString()}`;//adds gross salary to table
      displayTaxDeductions.innerHTML = ` Ksh. ${Math.floor(
        calculatesPaye(basicSalary, benefits)
      ).toLocaleString()}`;//adds tax deductions to table
      displayNhifDeductions.innerHTML = `Ksh. ${Math.floor(
        calaculatesNhifRate()
      ).toLocaleString()}`;//adds NHIF deductions to table
      displayNssfDeductions.innerHTML = `Ksh. ${Math.floor(
        calculstesNssfRate()
      ).toLocaleString()}`;//adds NSSF deductions to table
      displayTotalDeductions.innerHTML = `Ksh. ${Math.floor(
        calculatesTotaldeductions()
      ).toLocaleString()}`;//adds total deductions to table
      displayNetSalary.innerHTML = `Ksh. ${Math.floor(
        calculatesNetSalary()// adds calculated net salary to table
      ).toLocaleString()}`;
    });

    //takes basic salary and benefits as arguments to calculate gross salary
    function calculatesGrossSalary(basicSalary, benefits) {
      const myBasicSalary = Number(basicSalary.value); //stores the value of the basic salary input
      const myBenefits = Number(benefits.value);// stores the value of the benefits input

      return myBasicSalary + myBenefits;// sums up basic salary and benefits and returns gross salary
    }
    function calculatesPaye() {
      const myBasicSalary = Number(basicSalary.value);//stores the value of the basic salary input
      const myBenefits = Number(benefits.value);//stores the value of the benefits input
      let paye = 0;//decrares tax and assigns it zero

      //declares variable taxableIncome and assigns it to the result of calculatesGrossSalary function
      let taxableIncome = calculatesGrossSalary(basicSalary, benefits);//gross salary

      // calculate tax based on the taxable income enterd(basic salary + benefits)
      if (taxableIncome <= 24000) {
        paye = taxableIncome * 0.1;
      } else if (taxableIncome > 24000 && taxableIncome <= 32333) {
        paye = taxableIncome * 0.25;
      } else if (taxableIncome >= 32334 && taxableIncome <= 500000) {
        paye = taxableIncome * 0.3;
      } else if (taxableIncome >= 500001 && taxableIncome <= 800000) {
        paye = taxableIncome * 0.325;
      } else {
        paye = taxableIncome * 0.35;
      }
      return paye;//returns tax for the income entered
    }

    // calculates NHIF deductions
    function calaculatesNhifRate() {
      const grossSalary = calculatesGrossSalary(basicSalary, benefits); //calls calculatesGrossSalary function and assigns it to variable grossSalary
      let deduction = 0;//declares variable deduction and assigns it value 0

      //based on gross salary entered, returns NHIF payable
      if (grossSalary <= 5999) {
        deduction = 150;
      } else if (grossSalary > 5999 && grossSalary <= 7999) {
        deduction = 300;
      } else if (grossSalary >= 8000 && grossSalary < 12000) {
        deduction = 400;
      } else if (grossSalary >= 12000 && grossSalary < 15000) {
        deduction = 500;
      } else if (grossSalary >= 15000 && grossSalary < 20000) {
        deduction = 600;
      } else if (grossSalary >= 20000 && grossSalary < 25000) {
        deduction = 750;
      } else if (grossSalary >= 25000 && grossSalary < 30000) {
        deduction = 850;
      } else if (grossSalary >= 30000 && grossSalary < 35000) {
        deduction = 900;
      } else if (grossSalary >= 35000 && grossSalary < 40000) {
        deduction = 950;
      } else if (grossSalary >= 40000 && grossSalary < 45000) {
        deduction = 1000;
      } else if (grossSalary >= 45000 && grossSalary < 50000) {
        deduction = 1100;
      } else if (grossSalary >= 50000 && grossSalary < 60000) {
        deduction = 1200;
      } else if (grossSalary >= 60000 && grossSalary < 70000) {
        deduction = 1300;
      } else if (grossSalary >= 70000 && grossSalary < 80000) {
        deduction = 1400;
      } else if (grossSalary >= 80000 && grossSalary < 90000) {
        deduction = 1500;
      } else if (grossSalary >= 90000 && grossSalary < 100000) {
        deduction = 1600;
      } else {
        deduction = 1700;
      }
      return deduction;//returns NHIF deduction payable
    }

    // Calculates NSSF (6% of gross salary)
    function calculstesNssfRate() {
      const grossSalary = calculatesGrossSalary(basicSalary, benefits);

      deduction = grossSalary * 0.06;
      return deduction;//returns NSSF amount payable
    }

    function calculatesTotaldeductions() {
      //calculate  total deductions(sum of NHIF, NSSF and Taxes paid)

      //declares variables for deductions and calls respective functions; assigning their output to said variables
      const nhifDeductions = calaculatesNhifRate();
      const nssfDeductions = calculstesNssfRate();
      const taxDeductions = calculatesPaye();

      const totalDeductions = nhifDeductions + nssfDeductions + taxDeductions;
      return totalDeductions;// returns sum of all deductions
    }

    //calculate net salary by subtracting total deductions from the gross salary
    function calculatesNetSalary() {
      const grossSalary = calculatesGrossSalary(basicSalary, benefits);
      const totalDeductions = calculatesTotaldeductions();

      const netSalary = grossSalary - totalDeductions;
      return netSalary;
    }

    /*const print =  document.querySelector('#myButton')
print.addEventListener('click', printResult);


function printResult(){
  const table= document.querySelector('.response').outerHTML;
  const newWindow = window.open();
  newWindow.document.write(table);
  newWindow.document.close();

  
  newWindow.print();
}*/
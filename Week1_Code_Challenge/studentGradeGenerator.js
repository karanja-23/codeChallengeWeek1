      // My DOM elements 
      const score = document.getElementById("score");
      const submit = document.getElementById("btn");
      const myName = document.getElementById("name");
      const getName = document.getElementById("myName");
      const getGrade = document.getElementById("myGrade");
      const pop = document.getElementById("myMessage");
      const closePop = document.getElementById("close_btn");
      const message = document.getElementById("alert");

      //event listener for Submit button
      submit.addEventListener("click", function (event) {
        event.preventDefault();// stop form automatically submitting
        let grade = "";//empty variable for grade
        let result = ""; //empty varialble for remark

        // ensures that Student name and a valid score are entered before submittion
        if (myName.value.length === 0) {
          window.alert("Please enter your name");
        } else if (score.value > 100 || score.value < 0) {
          window.alert("Please enter a valid score!\n Between 0 and 100");
        } else {
          let storedName = myName.value;//stores the value of name input
          let storedScore = score.value; //stores the value of score input

          //assigns a grade base on the score input
          if (storedScore < 40) {
            grade = "E";
            result = "Oops!";//
          } else if (storedScore >= 40 && storedScore < 50) {
            grade = "D";
            result = "Work Harder!";
          } else if (storedScore >= 50 && storedScore < 60) {
            grade = "C";
            result = "Can do better!";
          } else if (storedScore >= 60 && storedScore < 80) {
            grade = "B";
            result = "Congratulations!";
          } else {
            grade = "A";
            result = "Excellent!";
          }
          pop.style.display = "block"; // displays the grade notification after clicking submit
          
          //prints values to the notification  div upon display
          message.innerHTML = `${result}`;
          getName.innerHTML = `Name: ${storedName} `;
          getGrade.innerHTML = `Grade: ${grade}`;
        }
      });
      //listens for click on close button and hides the notification div
      closePop.addEventListener("click", function () {
        pop.style.display = "none";
      });
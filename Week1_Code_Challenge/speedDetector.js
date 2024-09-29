        //my DOM elements
        const submit = document.getElementById("btn");
        const registrationNumber = document.getElementById("registration");
        const carSpeed = document.getElementById("speed");
        const message1 = document.getElementById("mess1");
        const message2 = document.getElementById("mess2");
        const message3 = document.getElementById("mess3");
        const showMessage = document.getElementById("printMessage");
        const closebutton = document.getElementById("close_btn");
  
        //event listener for submiting the form
        submit.addEventListener("click", function () {
          event.preventDefault();//prevent form from submitting automatically
          // ensures a value is entered on inputs before submittion
          if (registrationNumber.value.length === 0) {
            window.alert("Please enter your Car's \nreistration number!");
          } else if (carSpeed.value.length === 0) {
            window.alert("Please enter your speed!");
          }
          //stores the values of the inputs to be used in program
          const myRegistrationNumber = registrationNumber.value;
          const speed = carSpeed.value;
  
          //Assigns apropriate message and dimerit points based on speed entered
          function checksSpeed(speed) {
            let message = "";
  
            if (speed < 70) {
              message = "Okay";
            } else {
              const excessSpeed = speed - 70;
              const dimeritPoints = Math.floor(excessSpeed / 5);
  
              if (dimeritPoints <= 12) {
                message = `Points: ${dimeritPoints}`;
              } else if (dimeritPoints > 12) {
                message = `License revoked!`;
              }
            }
            return message;
          }
          // displays the result div after entering speed & registration number and submiting form
          showMessage.style.display = "block";
          //prints out respective messages based on speed entered, on the now visible notification div
          message1.innerHTML = `Registration No: ${myRegistrationNumber}`;
          message2.innerHTML = `Speed: ${speed}Km/hr`;        
          message3.innerHTML = `${checksSpeed(speed)}`;
          // listens for click on close button and hides notification div
          closebutton.addEventListener("click", function () {
            showMessage.style.display = "none";
          });
        });
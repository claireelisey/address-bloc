const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Current date and time",
                    "Exit"
                ]
            }
        ];
        this.contacts = [];
    }

    main(){
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
            switch(response.mainMenuChoice){
                case "Add new contact":
                    this.addContact();
                    break;
                case "Exit":
                    this.exit();
                    break;
                case "Current date and time":
                    this.getDate();
                    break;
                default:
                    console.log("Invalid input");
                    this.main();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
      clear(){
        console.log("\x1Bc");
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }
   
    exit(){
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

    getDate(){
        var currentdate = new Date();
        var hours = currentdate.getHours();
            if (hours > 12) hours -= 12
                var amPM = (currentdate.getHours()) > 12 ? (" PM"): (" AM")
                var datetime = (currentdate.getMonth()+1) + '/'
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " @ "
                + hours + ":"
                + currentdate.getMinutes() + amPM
                    console.log(`${datetime}`);
                    this.main();
    }

}
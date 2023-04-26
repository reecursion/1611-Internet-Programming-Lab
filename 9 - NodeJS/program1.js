var fs = require("fs");
var readline = require("readline");
fs.readFile("greetings.txt", "utf-8", (err, data) => {
            if (err){
                console.log('Error reading file: '+ err);
                return;
            }
            //Creating an array with the greetings
            const greetings = data.trim().split('\n');

            //Initialising readline interface
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question("What is your name? ", (name)=>{
                rl.close();
                const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
                console.log(`${randomGreeting}, ${name}`);
            });
        });



const chalk = require('chalk');
var readlineSync = require('readline-sync');
var username = readlineSync.question(chalk.yellowBright("Pick a username! "));
console.log(chalk.cyan("Welcome "+username));

var score = 0;

var ready = readlineSync.question("We are about to play a [DO YOU KNOW ME] quiz,\nCHOOSE THE OPTION NO. \nAre you ready?\nPRESS ENTER to continue\n");


//by array of objects method
var questions = [{
    question: chalk.blue("<1> Which food do I choose first?\n1. IceCream\n2. MoongDal Halwa\n[1or2?]"),
    answer : "2",
},{
    question: chalk.cyan("<2> Where would i like to go first?\n1. Andaman Is.\n2. Himalaya\n"),
    answer : "2",
},{
    question: chalk.magenta("<3> Which Hero I like the most?\n1. Amitabh Bachan\n2. Jim Carrey\n"),
    answer: "2",
},{
    question: chalk.yellow("<4> What is the color of Martian Manhunter's Cape?\n1. Blue\n2. Black"),
    answer: "1",
},{
    question: chalk.green("<5> Looney Tunes loves to eat what?\n 1. Carrot\n2. Honey"),
    answer: "1",
},{
    question: chalk.blueBright("BONUS QUESTION:\n<6> Which human being has claimed that he can turn invisible?('you can't see him')"),
    answer: "John Cena"
}]

function play(real, given){
    if(real === given){
        console.log(chalk.green("you're correct: <+1>"));
    score += 1;
}
else{
    console.log(chalk.red("You're Wrong: <-1>"));
    score -= 1;
}}


for(var i=0; i<questions.length; i++){
    var givenAns = readlineSync.question(questions[i].question+"\nAns: ");
    var realAnswer = questions[i].answer;
    play(realAnswer, givenAns);    
    console.log("------------------\n");
}
console.log(chalk.yellow(username+"'s Final Score: "+score));

var highScore = [{
    name: "Vaibhav",
    score: 5
},
{
    name: "sadi",
    score:3
},
{
    name: "Udi",
    score:1
}]
console.log("The high scores are like this")
for(var a=0; a<highScore.length; a++){
    console.log((a+1)+". "+highScore[a].name+"-------->"+highScore[a].score);
}
console.log("just send a ss of ur score & i'll add you on the list,\n Thanks for playing!")

//add replit.com/username/filename ?embed=1&output=1 #index.js for making it a live CLI app.
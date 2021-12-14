





const n=require("readline-sync")
var name=n.question("Enter your name")
console.log("Welcome"+name+"You know sonam kumari.")

var score=0
function introduction(question,answer){
    const usrename=n.question(question)
    if(usrename.toUpperCase()===answer.toUpperCase()){
        console.log("right your answer")
        score+=1
        console.log("score is ",+score)
    }else{
        console.log("wrong your answer.")
        score-=1
    }
}
var question=[{
    question:"what is my name",
    answer:"Sonam Kumari",
},{
    question:"where i leave",
    answer:"utter pradesh",
},{
    question:"what is my favourite song",
    answer:"hindi"
},{
    question:"what is my hobbes",
    answer:"dancing"
},{
    question:"what is my favourite pleace",
    answer:"mumbai"
}]

for(var i=0;i<question.length;i++){
    let  Question=question[i]
    introduction(Question.question,Question.answer)
}
console.log("your total score is",+score)
console.log(":I HOPE ARE YOU INJOY IN THIS GAME:")

const names = [ "Guadalupe", "Ollie","Aki"]
const events = "surprise"
const newArray = []
function writeCards(names, events){
     for (let i = 0; i < names.length; i++){
     const messages = (`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
     newArray.push(messages)
     }
     
     return newArray

    }

function countDown(){
    for (let countDown = 10; countDown < 11; countDown --){
        if (countDown === -1 ) {break;}
        console.log(countDown)
    }
}

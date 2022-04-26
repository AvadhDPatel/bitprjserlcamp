// start coding your function here!
date = new Date()

function running_late(date) {
    if (date >= "December 17, 1995 22:00:00") {    //checking the condition 
        return "It is still early!"     
    }
    else {
        return "It is late!"
    }
        
} 

exports.running_late = running_late;
// start coding your function here!
date = new Date()

function running_late(date) {
    if (date >= "December 17, 1995 03:24:00"){
        return "It is late!"
    }
    else{
        return "It is still early!"
    }
    
} 

exports.running_late = running_late;
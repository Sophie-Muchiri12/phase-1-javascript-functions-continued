function saturdayFun(activity='roller-skate'){

    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity = 'go to the office'){

    return `This Monday, I will ${activity}.`

}

function wrapAdjective(result = "*"){
   // let result = "*"
    return function(emphatic ="a hard worker"){
return `You are ${result}${emphatic}${result}!`
    }
}
        
    
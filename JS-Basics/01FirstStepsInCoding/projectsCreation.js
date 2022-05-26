function architectHours(input){
    let architechtName = (input[0]);
    let numberOfProjects = (input[1]);
    let numberOfHours = numberOfProjects * 3;
    let res = `The architect ${architechtName} will need ${numberOfHours} hours to complete ${numberOfProjects} project/s.`
    console.log(res);
}

architectHours(["Eduardo", 5]);
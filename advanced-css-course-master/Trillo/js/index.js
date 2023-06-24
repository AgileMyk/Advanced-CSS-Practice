const mike = {
    firstName : 'Mike',
    lastName : 'Hall',
    age: 2023 - 1984,
    job: 'dev-missionary',
    friends: ['Chad','Nich','Hannah','Nichole']
}

console.log(mike['firstName']);
console.log(mike.lastName);

const nameKey = 'Name';

console.log(mike.friends[2])
console.log(mike['last' + nameKey])
console.log(mike['first' + nameKey])

console.log(mike['friends'][1])

function question() { 
    let answer = prompt('Which property about Mike would you like to know?'); 

    if (!mike[answer]) {
        answer = prompt('That is not a valid property; please choose from firstName, lastName, job, age or friends');
        console.log(mike[answer])
    } else {
        console.log(mike[answer])
    }

}

//question()

console.log(`Mike has ${mike.friends.length} friends, his best friend being ${mike.friends[0]} `)

console.log(mike.friends.length)
console.log(mike.friends[0])
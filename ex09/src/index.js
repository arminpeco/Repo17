const _ = require('lodash');
    // only change code below this line
// users nested array with four objects starts here
    var users=[
        {       id: 1,
            firstName:"John",
            lastName:"Doe",
            age:24,
            gender:"male"
        },
        {
            id:2 ,
            firstName:"Jane",
            lastName:"Doe",
            age:5,
            gender:"female"
        },
        {
            id:3 ,
            firstName:"Jim",
            lastName:"Carrey",
            age:54,
            gender:"male"
        },
        {
                id:4 ,
            firstName:"Kate",
            lastName:"Winslet",
            age:40,
            gender:"female"
        }
    

    ]

// users nested array with four objects ends here
// getUser function - list of users starts here

function getUsers()
{
    var output="";
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        
    }
    return output;
}

function findUserById(id) {
    try{
        var user = _.find(users, { id:id });
        var iFindUser=user;
        return iFindUser;
        
    }catch(error){
            return `Cannot read property ${id}`;
            
    }
}

// getUser function - list of users ends here

    // only change code above this line
getUsers();
findUserById(1);
module.exports=findUserById;


const _ = require('lodash');
    // only change code below this line
// users nested array with four objects starts here
    var users=[
        {
            firstName:"John",
            lastName:"Doe",
            age:24,
            gender:"male"
        },
        {
            firstName:"Jane",
            lastName:"Doe",
            age:5,
            gender:"female"
        },
        {
            firstName:"Jim",
            lastName:"Carrey",
            age:54,
            gender:"male"
        },
        {
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

function findUser(lastName,gender) {
    try{
        var user = _.find(users, { lastName: lastName, gender: gender });
        var iFindUser=`${users.firstName}  ${users.lastName}  is  ${users.age}, ${users.gender}`;
        return iFindUser;
        
    }catch(error){
            return `Cannot read property ${users.firstName} of undefinfed`;
            
    }
}

// getUser function - list of users ends here

    // only change code above this line
getUsers();
findUser("John","male");
module.exports=findUser;


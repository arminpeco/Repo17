const MY_CAR ={
    wheels:4,
    cylinders:4,
    size:2.2
};

function main(myCar) {
    // only change code below this line
    const {cylinders,size}=myCar;
   
    return "cylinders: " + cylinders + " " + "size: "  +size;
    // only change code below this line

}
console.log(main(MY_CAR));
module.exports=main;
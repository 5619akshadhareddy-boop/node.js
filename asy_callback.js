function prepareFood(dish, callback){
    console.log(`cooking ${dish}...`);

    setTimeout(() => {
        console.log(`${dish} is ready!`);
        callback();
    }, 10000);
    }

    function serveFood(){
        console.log("serving food to customer.");
    }
    prepareFood("Biryani",serveFood);
    console.log("make an order");

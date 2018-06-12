var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    //  port 
    port:3306,
  
    //username
    user: "root",
  
    // password
    password: "password",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    afterConnect();
    
});

function start() {

    var options = [
      {
        type:"list",
        message:"Select an Option",
        name:"option",
        choices: [
          "Buy a Product",
          "Buy Multiple Units"
        ]
      }
    ];

    inquirer.prompt(options).then(function(response){

        switch(response.option) {
          
          case "Buy a Product":
    
            buyProduct();
    
          break;
    
          case "Buy Multiple Units":
    
            buyProduct();
    
          break;
          
        }
    
      });
    }

function afterConnect(){
    var query =  connection.query('SELECT * FROM product', function(err, res){
        if (err) throw err;
        // console.log(res);
      
        console.log("===================================================")
        for (let index = 0; index < res.length; index++) {
            printing(res[index]);
        }
        console.log("===================================================")
        start();
    });
 
}

function buyProduct() {

  var question = [
    {
      type:"input",
      message:"Which product would you like? slect product by ID",
      name:"product"
    },
    {
      type:"input",
      message:"how much quanitiy?",
      name:"amount"
    }
  ];

  inquirer.prompt(question)
  .then(function(response) {

    var product_id = parseInt(response.product);
    console.log(product_id);

    var count = parseInt(response.amount);
    console.log(count);

    connection.query("SELECT * FROM product WHERE id = "+product_id, function(err, res) {

      if(err){
        console.log(err)
      }
      else{
      
        if(parseInt(res[0].stock_quantity) > count){
          console.log("id", product_id)
          
          connection.query("UPDATE product SET ? WHERE ?",[
            {stock_quantity: parseInt(res[0].stock_quantity) - count}, {id: product_id}
            ],
            function(errs, results){
            console.log(results);
            if(errs){
              console.log(errs)
            }
              console.log("your total is:", parseInt(res[0].price)*count);
              afterConnect();
          })
          // lets the  user know the total
          
        }
        else {
          console.log("sorry there isn't enough stock to cover your order!")
        }
          //prints(res);
      }
    }

      
    );

  });
};

function printing(obj){
    
    console.log(obj.id+' | '+obj.product_name+' | '+obj.department_name+' | '+obj.price+' | '+obj.stock_quantity);  
}

'use strict';
var prompt = require('prompt-sync')()  //initialize prompt -sync
const fs = require('fs');
let data = fs.readFileSync('inventory.json');  //read text from JSON file
let inventory = JSON.parse(data);  
while(1)
{
    console.log('1.Rice')
    console.log('2.Wheat')
    console.log('3.Pulses')
    console.log('4.Exit')
    var input = prompt('Enter your choice : ')   //read input , pass into switch case
    switch(parseInt(input))
    {
        case 1:    
                for(var i=0;i<=inventory.rice.weight.length-1;i++)
                 {
                    console.log('Total Price of ' + inventory.rice.name[i] + ' : '+ inventory.rice.weight[i] * inventory.rice.price[i] + ' Rs')
                 } // calculation of total price of rice
                 break;
    
        case 2: for(var i=0;i<=inventory.wheat.weight.length-1;i++)
                {
                    console.log('Total Price of ' + inventory.wheat.name[i] + ' : '+ inventory.wheat.weight[i] *inventory.wheat.price[i] + ' Rs')
                } // calculation of total price of wheat
                 break; 
        case 3:        
                for(var i=0;i<=inventory.pulses.weight.length-1;i++)
                {
                    console.log('Total Price of ' + inventory.pulses.name[i] + ' : '+ inventory.pulses.weight[i] * inventory.pulses.price[i] + ' Rs')
                }   // calculation of total price of pulses
                break;
        case 4 :  process.exit()
        default :console.log('No Such Choice !!!') 
                 break; 
    }
    
}
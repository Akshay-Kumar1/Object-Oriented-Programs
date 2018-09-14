var prompt = require('prompt-sync')()
var fs = require('fs')  //import file system module
let info = fs.readFileSync('stock.json');  //read JSON file 
let stockreport = JSON.parse(info);  
var sum =0
for(var i = 0 ;i<=stockreport.stock.Stock_Shares.length-1;i++) //loop to iterate the array in JSON file
{
    var res = parseInt(stockreport.stock.Stock_Price[i]*stockreport.stock.Stock_Shares[i]) //multiplying stockprice with number of shares
    console.log('Total Share_Price of ' +stockreport.stock.Stock_Name[i] +' : ' + res)
    sum=sum+res //total sum of share values
}
console.log('Total stock Value : ' + sum) // o/p the sum of all share prices

var prompt = require('prompt-sync')()
var fs = require('fs')
let info = fs.readFileSync('stock.json');  
let stockreport = JSON.parse(info);  
var sum =0
for(var i = 0 ;i<=stockreport.stock.Stock_Shares.length-1;i++)
{
    var res = parseInt(stockreport.stock.Stock_Price[i]*stockreport.stock.Stock_Shares[i])
    console.log('Total Share_Price of ' +stockreport.stock.Stock_Name[i] +' : ' + res)
    sum=sum+res
}
console.log('Total stock Value : ' + sum)
/*
class stockmarket
{
    constructor(stock_name,stock_shares,stock_price)
    {
        this.stock_name=stock_nameadminsitrator@adminsitrator-Vostro-2520:~/Documents/akshayk/Object Oriented/main$
        this.stock_shares=stock_shares
        this.stock_price=stock_price
    }
}  
    console.log('Stock Report\n')
    
    var stock = new stockmarket('Alphabet',5,100)
    console.log('Company Name : ' + stock.stock_name);
    console.log('Number of shares : ' + stock.stock_shares);
    console.log('Stock Price : ' + stock.stock_price);
    console.log('Value of Total Share Price of ' + stock.stock_name + ' : ' + stock.stock_price*stock.stock_shares)
    
    var stock_ = new stockmarket('Apple',7,10)
    console.log('\nCompany Name : ' + stock_.stock_name);
    console.log('Number of shares : ' + stock_.stock_shares);
    console.log('Stock Price : ' + stock_.stock_price);
    console.log('Value of Total Share Price of ' + stock_.stock_name + ' : ' + stock_.stock_price*stock_.stock_shares)
*/
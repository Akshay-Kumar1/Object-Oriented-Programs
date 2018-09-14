var prompt = require('prompt-sync')()
var fs = require('fs')
var data = fs.readFileSync('/home/adminsitrator/Documents/akshayk/Object Oriented/main/stockclass.json')
var stock = JSON.parse(data)
var sum=0
class StockAccount
{
    constructor()
    {
        //this.stockname=stockname
        //this.stockprice=stockprice
        //this.stockshares=stockshares
    }
    buy()
    {   
               var stocklen = prompt('How many stocks do you want to buy  : ')  // number of stocks
                for (var i = 1; i <= stocklen; i++) 
                {
                var stockname = prompt('Enter Stock Name : ')
                var stockshares = prompt('Enter Stock Shares : ')
                var stockprice = prompt('Enter Stock Price : ')
                stock.stockmarket.push   //push into JSON array
            ({
            stock_name  : stockname,
            stock_shares: stockshares,
            stock_price: stockprice
            })

            //var value =parseInt(stockshares*stockprice)  //calculation of indivisual share value
            //sum=sum+value
            fs.writeFileSync('stockclass.json', JSON.stringify(stock), 'utf-8', function (err) {
                if (err)
                throw err
            })
           // console.log('Total Share Value : '+value)  //o/p the total share value
        }
            //console.log('The total value is ' +sum)
    }
    valueof()
    {
        for(var i=0;i<=stock.stockmarket.length-1;i++)
        {
            var value = parseInt(stock.stockmarket[i].stock_price*stock.stockmarket[i].stock_shares)
            console.log('Stock value of '+ stock.stockmarket[i].stock_name +' is '+ value)
            sum=parseInt(sum)+parseInt(value)
        }
        console.log('Total Share Value : ' +sum)
    }
    printReport()
    {
        console.log(stock)
    }
    sell()
        {   
                this.printReport()
                var del = prompt('Provide an Index to Sell the stock : ') //taking an index to delete
                stock.stockmarket.splice(del,1)
                fs.writeFileSync('stockclass.json', JSON.stringify(stock),'utf-8',function(err){
                    if(err)throw err
                })
                console.log(stock)  // printing the stock report  
        }
}                         
var stockobj =new StockAccount()
while(1)
{   
    console.log('1.Buy Stocks')
    console.log('2.Sell Stocks')
    console.log('3.Print Stock Report')
    console.log('4.Value of Stock')
    console.log('5.Exit')   
    var choice=prompt('What do u want to do ?')
switch (choice)
{
    case '1' :stockobj.buy()
              break;
    case '2' :stockobj.sell()
              break;
    //case '3' :stockobj.valueof()
    //          break
    case '3' :stockobj.printReport()
              break;

    case '4' :stockobj.valueof()
              break
    
    case '5' :process.exit()
              
    default : console.log('No Such Option ')
    break;
}              
}

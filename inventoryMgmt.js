var fs = require('fs')  //initialize file system module
var prompt = require('prompt-sync')() //initialize prompt-sync
fs.readFile('./inventoryMgmt.json', 'utf-8', function (err, data) //read file from JSON file
{
    if (err) 
    throw err
    var report = JSON.parse(data)
    var sum=0
    while(1)
    {
    console.log('1.Insert Stock') 
    console.log('2.Delete Stock')
    console.log('3.Exit')
    var choice = prompt('choice : ')  //read choice from user 
    switch(choice)
    {
    case '1' : var stocklen = prompt('Number of stocks : ')  // number of stocks
                for (var i = 1; i <= stocklen; i++) 
            {
                var stockname = prompt('Enter Stock Name : ')
                var stockshares = prompt('Enter Stock Shares : ')
                var stockprice = prompt('Enter Stock Price : ')
                report.stock.push   //push into JSON array
            ({
            "stock_name": stockname,
            "stock_shares": stockshares,
            "stock_price": stockprice
            })

            var value =parseInt(stockshares*stockprice)  //calculation of indivisual share value
            sum=sum+value
            fs.writeFile('./inventoryMgmt.json', JSON.stringify(report), 'utf-8', function (err) {
                if (err)
                    throw err
            })
            console.log('Total Share Value : '+value)  //o/p the total share value
        }
            console.log('The total value is ' +sum)   //o/p the sum of all share prices 
            break
    case '2' :  var del = prompt('Provide an Index : ') //taking an index to delete
                delete report.stock[del]
                fs.writeFile('./inventoryMgmt.json', JSON.stringify(report), 'utf-8', function (err) {
                if (err)
                throw err
                console.log(report)  // printing the stock report 
        })
        break;

    case '3' : process.exit() //exiting from the program 
    
    default  : console.log('No Such Option') // invalid entry , go back to switch case
               process.exit()
    }
}
})

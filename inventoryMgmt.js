var fs = require('fs')
var prompt = require('prompt-sync')()
fs.readFile('./inventoryMgmt.json', 'utf-8', function (err, data) 
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
    var choice = prompt('choice : ')
    switch(choice)
    {
    case '1' : var stocklen = prompt('Number of stocks : ')
                for (i = 1; i <= stocklen; i++) {
                var stockname = prompt('Enter Stock Name : ')
                var stockshares = prompt('Enter Stock Shares : ')
                var stockprice = prompt('Enter Stock Price : ')
                report.stock.push
            ({
            "stock_name": stockname,
            "stock_shares": stockshares,
            "stock_price": stockprice
            })

            var value =parseInt(stockshares*stockprice)
            sum=sum+value
            fs.writeFile('./inventoryMgmt.json', JSON.stringify(report), 'utf-8', function (err) {
                if (err)
                    throw err
            })
            console.log('Total Share Value : '+value)
        }
            console.log('The total value is ' +sum)
            break
    case '2' : var del = prompt('Provide an Index : ')
                delete report.stock[del]
                fs.writeFile('./inventoryMgmt.json', JSON.stringify(report), 'utf-8', function (err) {
                if (err)
                throw err
                console.log(report)
        })
        break;

    case '3' : process.exit()
    
    default  : console.log('No Such Option')
               process.exit()
    }
}
})

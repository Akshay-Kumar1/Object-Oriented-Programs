var utility_ = require('./LinkedList')
var prompt = require('prompt-sync')();

var list = new utility_();
class StockAccount {
    buy(count) {
        for (var i = 0; i < count; i++) {
            var name = prompt('enter the name: ');
            var number = prompt('enter the number of share: ');
            var price = prompt('enter the price: ');
            var customer = {
                name: name,
                number: number,
                price: price
            }
            list.add(customer);
            //console.log(l.printList());
            console.log("successfully purchased the stock");
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log("Purchase Time : " + time);
        }
    }
    sell(count) {
        for (var i = 0; i < count; i++) {
            var num = prompt('enter the name of item to be sold: ');
            var result = list.indexOf(num);
            console.log(result);
            if (result != -1) {
                list.removeFrom(result);
            }
        }
        var date = new Date();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log("Stock sold time : " + time);
    }
    stockReport() {
        list.printList();
    }
}
var stock = new StockAccount();
var count = prompt("enter the number of stocks to be purchased: ");
stock.buy(count);
stock.stockReport();
var count = prompt("enter the number of stocks to be sold: ");
stock.sell(count);
stock.stockReport();
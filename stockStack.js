
var utility1= require('./LinkedList.js')
var utility2=require('/home/adminsitrator/Documents/akshayk/Object Oriented/main/stackUsingList.js')
var prompt = require('prompt-sync')();
var list = new utility1()
var stack = new utility2();
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
            stack.pushToStack(customer);
            stack.printStack()
            console.log("successfully purchased the stock");
            var date = new Date();
            var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            console.log("Purchase Time : " + time);
        }
    }
    sell(count) {
        for (var i = 0; i < count; i++) {
            
                stack.popFromStack();
            }
    
        var date = new Date();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        console.log("Stock sold time : " + time);
    }
    stockReport() 
    {
        list.printList();
    }
}
var stock = new StockAccount();
var count = prompt("enter the number of stocks to be purchased: ");
stock.buy(count);
stock.stockReport();
var count = prompt("enter the number of stocks to be sold: ");
stock.sell(count);
stack.printStack();
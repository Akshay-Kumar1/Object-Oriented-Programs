var prompt = require('prompt-sync')()
var fs = require('fs') //initialize the file system module
var data = fs.readFileSync('/home/adminsitrator/Documents/akshayk/Object Oriented/main/file.txt')
data = data.toString() //convert the data to String 
var validate = /[a-zA-Z]/g //validating input using regular expressions (g-global)
var validate1 = /[0-9]/g
var validate2 = /[!@#$%^&*+_]/g

var name = prompt('Enter your First name : ')
if(name.search(validate1)==-1 && name.search(validate2)==-1) //validation
{
    var string = data.replace(/<<name>>/g,name) //replacing the name 
       
}
else 
    {
        console.log('Invalid ')
        process.exit()
    }
var fullname = prompt('Enter your Full name : ')

if(fullname.search(validate1)==-1 && fullname.search(validate2)==-1) //validation
{
    string = string.replace(/<<fullname>>/g,fullname) //replacing the name 
    
}
else 
{
    console.log('invalid')
    process.exit()
}
var contact = prompt('Enter your contact number : ')

if(contact.search(validate)==-1 && contact.search(validate2)==-1) //validation 
{
    if(contact.length==10)
    {
        string = string.replace(/xxxxxxxxxx/g,contact) //if 10 digit number , replace with phone number
    }
    else 
    {
        console.log('Enter 10 digit number')
        process.exit()
    }

}
else 
{
    console.log('invalid')
    process.exit()
}
var d = new Date()  // to get the current date 
var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear()  //full date
string = string.replace(/01-01-2016/g,date)   //replace the string with date
console.log(string)



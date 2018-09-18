var prompt = require('prompt-sync')()
var fs = require('fs')
var validate = /[a-zA-Z]/g //validating input using regular expressions (g-global)
var validate1 = /[0-9]/g
var validate2 = /[!@#$%^&*+_]/g
var data = fs.readFileSync('address.json')

    var address_ = JSON.parse(data)
    class contact
    {

    insertRecord() {
        var number = prompt('Number of Records : ')
        for (var i = 0; i < number; i++) 
        {
            var fname = prompt("Enter your First name : ")
            if(fname.search(validate1)==-1 && fname.search(validate2)==-1) //validation
            {
                var lname = prompt('Enter your lname  : ')
            if(lname.search(validate1)==-1 && lname.search(validate2)==-1) //validation
            {
            console.log('Enter the address details : ')
            var City = prompt('Enter your city : ')
            if(City.search(validate1)==-1 && City.search(validate2)==-1) //validation
            {
            
            var Pincode = prompt('Enter your Pincode : ')
            if(Pincode.search(validate)==-1 && Pincode.search(validate2)==-1) //validation
            {
        
            var Phonenumber = prompt('Enter the Phone number : ')
            if(Phonenumber.search(validate)==-1 && Phonenumber.search(validate2)==-1) //validation
            {
                if(Phonenumber.length==10)
                {
            var State = prompt('Enter the State : ')
            if(State.search(validate1)==-1 && State.search(validate2)==-1)
            { //validation
            address_.address.push({
                "fname": fname,
                "lname": lname,
                "Address": { "City": City, "Phonenumber": Phonenumber, "Pincode": Pincode, "State": State }

            })
            fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8')            
        }
          }

        }
    }
}
            }
        }
    }
}
    Delete() {
        var name = prompt('Enter the fname of Profile you want to delete ')
        for (var i = 0; i < address_.address.length; i++) {
            if (address_.address[i].fname == name) {
                address_.address.splice(i, 1)
            }
        }
        fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8', function (err) {
            if (err) throw err

        }
        )
    }
        compare(a,b)
        {
            if(a.fname<b.fname)
            return -1;
            if(a.fname>b.fname)
            return 1;
            return 0
        }
        sortString()
        {
            console.log(address_.address.sort(this.compare))
            fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8')
        }
    
    edit() {
        var name = prompt('Enter the user u want to Edit : ')

        for (var i = 0; i < address_.address.length; i++) {
            if (address_.address[i].fname == name) {
                console.log('Press 1 to edit your City : ')
                console.log('Press 2 to edit your pincode :')
                console.log("press 3 to edit your State: ")
                console.log("Press 4 to edit your Phonenumber :")
                console.log("Press 5 to exit ")
                var option = prompt('Enter the option you want to edit ')

                switch (parseInt(option)) {

                    case 1: var city1 = prompt('Enter your new city : ')
                    if(city1.search(validate1)==-1 && city1.search(validate2)==-1) //validation
                    {
                            var object1 = {
                            "fname": address_.address[i].fname,
                            "lname": address_.address[i].lname,
                            "Address": { "City": city1, "Phonenumber": address_.address[i]["Address"].Phonenumber, "Pincode": address_.address[i]["Address"].Pincode, "State": address_.address[i]["Address"].State }
                        }
                        address_.address[i]=object1
                        fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8')
                    }
                        break;

                    case 2: var pin2 = prompt('enter the new pincode : ')
                    if(pin2.search(validate)==-1 && pin2.search(validate2)==-1) //validation
                    {    
                    var object2 = {
                            "fname": address_.address[i].fname,
                            "lname": address_.address[i].lname,
                            "Address": { "City": address_.address[i]["Address"].City, "Phonenumber": address_.address[i]["Address"].Phonenumber, "Pincode": pin2, "State": address_.address[i]["Address"].State }
                        }
                        address_.address[i]=object2
                        fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8')
                    }  
                    break;

                    case 3: var state1 = prompt('Enter your new state : ')
                    if(state1.search(validate1)==-1 && state1.search(validate2)==-1) //validation
                    {
                    var object3 = {
                        "fname": address_.address[i].fname,
                        "lname": address_.address[i].lname,
                        "Address": { "City": address_.address[i]["Address"].City, "Phonenumber": address_.address[i]["Address"].Phonenumber, "Pincode": address_.address[i]["Address"].Pincode, "State": state1 }
                    }
                    address_.address[i]=object3
                    fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8')
                    //console.log(address_.address)
                    }
                    break;
                     
                    case 4 : var Phonenumber1 = prompt('Enter the new street name : ')
                    if(Phonenumber1.search(validate1)==-1 && Phonenumber1.search(validate2)==-1) //validation
                    {
                    var object4 = {
                        "fname": address_.address[i].fname,
                        "lname": address_.address[i].lname,
                        "Address": { "City": address_.address[i]["Address"].City, "Phonenumber": Phonenumber1, "Pincode": address_.address[i]["Address"].Pincode, "State": address_.address[i]["Address"].State }
                    }
                    address_.address[i]=object4
                    fs.writeFileSync('./address.json', JSON.stringify(address_), 'utf-8')
                    console.log(address_[i].address)
                    }
                    break;
                    
                    case 5: process.exit()

                    default : console.log('Please enter the valid option ')
                
                }
            }
        }

    }
}
var addressobj = new contact()   
    
    while (1) {
        console.log('1.Insert Records ')
        console.log('2.Delete Record ')
        console.log('3.Edit ')
        console.log('4.Sort ')
        console.log('5.Exit ')
        var choice = prompt('choice : ')
        switch (parseInt(choice)) {
            case 1: addressobj.insertRecord()
                    addressobj.sortString()
                 break;

            case 2: addressobj.Delete()
                    addressobj.sortString()
                 break;

            case 3: addressobj.edit()
                    addressobj.sortString()
                 break;

            case 4: addressobj.sortString()
                break;
            case 5: process.exit()

            default: console.log("Invalid Choice")
        }
    }

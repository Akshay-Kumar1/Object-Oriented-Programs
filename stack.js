 
class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
    push(element)
    {
        // push element into the items
        this.items.push(element);
    }
pop()
{
    
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}

printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    console.log(str);
}
}
// creating object for stack class
var stack = new Stack();
var count0=0,count1=0

for(var i=0 ; i<string.length;i++)
{
    if(string[i]=='(')
    {
        stack.push('(')
        count0++
    }
    else if (string[i]==')')
    {
        stack.pop()
        count1++
    }
    
}
module.exports=Stack
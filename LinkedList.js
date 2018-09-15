var prompt = require('prompt-sync')();
class Node {
    // constructor
        constructor(element) 
        {
        this.element = element;
        this.next = null
        }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            }
            else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }

    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current!=null) {
            // compare each element of the list
            // with given element
            if (current.element.name === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }

    printList() {
        var curr = this.head;
        //var str = "";
        while (curr) {
            //str += curr.element +" ";
            console.log(curr.element);
            curr = curr.next;
        }
        // console.log(str);
        //return str;
    }



}
module.exports = LinkedList;
const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(val) {
        const node = new LinkedListNode(val);
        if (this.head) 
            node.next = this.head;
        this.head = node;
    }

    // assume given valid position i.e. n is not out of bounds
    insertAtNthPosition(val, n) {
        const node = new LinkedListNode(val);
        
        if (n === 1) {
            node.next = this.head;
            this.head = node;
            return;
        }
        
        let current = this.head;
        for (let i = 0; i < n - 2; i++)
            current = current.next;
        
        const temp = current.next;
        current.next = node;
        node.next = temp;
    }

    insertAtEnd(val) {
        const node = new LinkedListNode(val);

        if (!this.head) {
            this.head = node;
            return;
        };

        let current = this.head;
        while (current.next)
            current = current.next;
        current.next = node;
    }

    deleteAtNthPosition(n) {
        if (n === 1) {
            const temp = this.head;
            this.head = this.head.next
            temp.next = null; // equivalent of delete in JS
            return;
        };

        let current = this.head;
        for (let i = 0; i < n - 2; i++)
            current = current.next;

        const temp = current.next;
        current.next = current.next.next;
        // in JS can't use delete to free memory, handled automatically by breaking references
        temp.next = null;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    reverseRecur(node) {
        if (node.next === null) {
            this.head = node;
            return;
        }

        this.reverseRecur(node.next);
        const temp = node.next;
        temp.next = node;
        node.next = null;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(`Current node's value is ${current.data}`);
            current = current.next;
        }
    }

    printRecur(node) {
        if (!node) return;
        console.log(`Current node's value is ${node.data}`);
        this.printRecur(node.next);
    }

    reversePrintRecur(node) {
        if (!node) return;
        // to print in reverse, just reverse order of these two statements from forward print
        this.reversePrintRecur(node.next);
        console.log(`Current node's value in reverse is ${node.data}`);
    }
}

module.exports = LinkedList;

const a = new LinkedList();
a.insertAtEnd(2);
a.insertAtEnd(3);
a.insertAtEnd(4);
a.insertAtEnd(5);
a.print();
a.reverseRecur(a.head);
a.print();

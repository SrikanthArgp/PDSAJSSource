class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }


    isEmpty() {
        return this.first == null && this.last == null
    }

    enqueue(item) {
        // Create node
        const newNode = new Node(item)
        /**
         * * If our list is empty than both our 
         * * first item and last item is going to point the new node. 
         */
        if (this.isEmpty()) {
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
    }


    dequeue() {

        //* if our queue is empty we return null 
        if (this.isEmpty()) return null
        const itemToBeRemoved = this.first

        /**
         * * if both our first and last node are pointing the same item
         * * we dequeued our last node. 
         */
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return itemToBeRemoved.value
    }

    /**
     * * Returns the next element to be dequeued. 
     * @returns 
     */
    peek() {
        if (this.isEmpty())
            return null
        return this.first.value
    }
}

let q = new Queue()
q.enqueue(5)
q.enqueue(10)
q.enqueue(15)
q.enqueue(20)

while (!q.isEmpty())
    process.stdout.write(" " + q.dequeue())



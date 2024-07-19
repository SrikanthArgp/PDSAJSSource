class Queue {
    constructor() {
      // The queue itself.
      this.queue = [];
      // The index of the first element in the queue.
      this.head = 0;
      // The index of the last element in the queue.
      this.tail = 0;
      // The maximum number of elements the queue can hold.
      this.maxSize = 100;
    }
  
    // Add an item to the end of the queue.
    enqueue(item) {
      // If the queue is full, return false.
      if (this.isFull()) {
        return false;
      }
      // Add the item to the end of the queue.
     // this.queue[this.tail] = item;
     this.queue.push(item)
      // Increment the tail index.
      this.tail++;
      return true;
    }
  
    // Remove the first element from the queue.
    dequeue() {
      // If the queue is empty, return null.
      //const item = this.queue[this.head];
      const item = this.queue.shift()
      // Increment the head index.
      this.head++;
      // Return the value of the first element.
      return item;
    }
  
    // Get the value of the first element in the queue.
    peek() {
      // If the queue is empty, return null.
      if(this.queue.length!=0) {
        const item = this.queue.shift()
        this.queue.unshift(item)
      }
      

      return item;
    }
  
    // Get the length of the queue.
    getLength() {
      // Return the difference between the tail and head indices.
      return this.tail - this.head;
    }
  
    // Check if the queue is empty.
    isEmpty() {
      // If the length of the queue is 0, the queue is empty.
      return this.getLength() === 0;
    }
  
    // Check if the queue is full.
    isFull() {
      // If the length of the queue is equal to the maximum size of the queue, the queue is full.
      return this.getLength() === this.maxSize;
    }
  }


  let q = new Queue()
q.enqueue(5)
q.enqueue(10)
q.enqueue(15)
q.enqueue(20)

while (!q.isEmpty())
    process.stdout.write(" " + q.dequeue())
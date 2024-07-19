// Node class
class Node {
    constructor(data) {
      // The data the node holds.
      this.data = data;
      // The next node in the list.
      this.next = null;
    }
  }
  
  // Linked list class
  class LinkedList {
    constructor(head=null) {
      // The head of the list.
      this.head = head;
      this.size = 0;
    }
  
  
    append(data) {
      // Create a new node
      const node = new Node(data);
  
      // If the list is empty, set the head to the new node
      if (this.head === null) {
        this.head = node;
        this.size = 1;
        return;
      } else {
        // Otherwise, traverse till last node and attach
        //new node to last node
  
        let temp = this.head;
        while (temp.next != null) {
          temp = temp.next;
        }
        this.size++;
        temp.next = node;
      }
    }
  
    getSize() {
      return this.size;
    }
  
    printAll() {
      // Start at the head
      let current = this.head;
  
      // Loop through each node
      while (current !== null) {
        // Print the data
        //console.log(current.data);
        process.stdout.write(current.data + " ");
        // Move to the next node
        current = current.next;
      }
      console.log();
    }
  
    delete(data) {
      //delete first node
      if (this.head.data == data) {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.size--;
        return;
      } else {
        //delete any node other than first node
        let prev = this.head;
        let cur = prev.next;
        while (cur != null) {
          if (cur.data == data) {
            prev.next = cur.next;
            cur.next = null;
            this.size--;
            return;
          }
          prev = cur;
          cur = cur.next;
        }
        console.log("Data Not Found");
      }
    }
  
  }
  
  //Test method of LL
  linkedList = new LinkedList();
  linkedList.append(5)
  linkedList.append(10);
  linkedList.append(15);
  linkedList.append(8);
  linkedList.append(18);
  linkedList.append(25);
  
  linkedList.printAll();
  
  linkedList.delete(5);
  linkedList.printAll();
  
  linkedList.delete(15);
  linkedList.printAll();
  console.log(linkedList.getSize());
 
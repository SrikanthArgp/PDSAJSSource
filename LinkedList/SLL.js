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

  printRev() {
    this.printReverse(this.head)
    console.log()
  }

  printReverse(node) {
    if (node == null)
      return
    else {
      this.printReverse(node.next)
      process.stdout.write(node.data + " ");
    }
  }


}

class FullSum {
  constructor() {
    // The head of the list.
    this.node = null;
    this.car = 0;
  }
}


function addLLs(ll1, ll2) {
  let fs = addNodes(ll1.head, ll2.head)
  return new LinkedList(fs.node)
}

function addNodes(n1, n2) {
  if (n1 == null && n2 == null)
    return new FullSum()
  else {
    let fsum = addNodes(n1.next, n2.next)
    let val = n1.data + n2.data + fsum.car
    let n = new Node(val % 10)
    n.next = fsum.node
    fsum.node = n
    fsum.car = Math.floor(val / 10)
    return fsum;

  }
}

//Test method of LL
linkedList = new LinkedList();
linkedList.append(5);
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
linkedList.printRev()

ll1 = new LinkedList()
ll1.append(3)
ll1.append(4)
ll1.append(2)
ll1.append(8)

ll2 = new LinkedList()
ll2.append(1)
ll2.append(4)
ll2.append(2)
ll2.append(8)

let ll3 = addLLs(ll1, ll2)
ll3.printAll()

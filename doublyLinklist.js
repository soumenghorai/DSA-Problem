class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinklist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //Print the list
  print() {
    let temp = this.head;
    let output = [];
    while (temp != null) {
      console.log(temp.data);
      output.push(temp.data);
      temp = temp.next;
    }
    return output;
  }
  //Add element at last
  addElementAtLast(element) {
    let newNode = new Node(element);
    this.size++;

    if (this.head == null) {
      this.head = newNode;
      newNode.prev = this.head;
    } else {
      let temp = this.head;

      while (temp.next != null) {
        temp = temp.next;
      }

      temp.next = newNode;
      newNode.prev = temp;
    }
  }
  //Add element before a particular element
  addElementBeforeAnElement(element, new_element) {
    let newNode = new Node(new_element);
    this.size++;

    let temp = this.head;

    while (temp != null) {
      if (temp.data === element) {
        let prevNode = temp.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = temp;
        temp.prev = newNode;
        break;
      }
      temp = temp.next;
    }
  }
  addElementAfterAnElement(element, new_element) {

  }
}
let ll = new DoublyLinklist()
ll.addElementAtLast("Jeevendra")
ll.addElementAtLast("John")
ll.addElementAtLast("Jenny")
ll.addElementBeforeAnElement("Jenny", "Jonathan")
ll.print()
console.log(ll)


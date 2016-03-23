function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {            
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};

SinglyLinkedList.prototype.remove = function(data) {
  var before = this.head;
  var now = this.head;
  while(now) {
    if(now.data === data) {    
      if(now === this.head) {
        this.head = this.head.next;
      }
      if(now === this.tail) { 
        this.tail = before;
      }
      before.next = now.next;
      this.numberOfValues--;
    } else {
      before = now;
    }
      now = now.next;
  }
};

SinglyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var now = this.head;
  while(now) {
    if(now.data === toNodeData) {
      var node = new Node(data);
      if(now === this.tail) {  
        this.tail.next = node;
        this.tail = node;
      } else {    
        node.next = now.next;
        now.next = node;
      }
      this.numberOfValues++;
    }
    now = now.next;
  }
};

SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};

SinglyLinkedList.prototype.print = function() {
  var string = " ";
  var now = this.head;
  while(now) {
    string += now.data + " ";
    now = now.next;
  }
  return string.trim();
};


/*
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', singlyLinkedList.length()); // => 4
singlyLinkedList.remove(3); // remove value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(9); // remove non existing value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(1); // remove head
singlyLinkedList.print(); // => 2 4
singlyLinkedList.remove(4); // remove tail
singlyLinkedList.print(); // => 2
console.log('length is 1:', singlyLinkedList.length()); // => 1
singlyLinkedList.add(6);
singlyLinkedList.print(); // => 2 6
singlyLinkedList.insertAfter(3, 2);
singlyLinkedList.print(); // => 2 3 6
singlyLinkedList.insertAfter(4, 3);
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 4);
singlyLinkedList.insertAfter(7, 6); // insertAfter the tail
singlyLinkedList.print(); // => 2 3 4 5 6 7
singlyLinkedList.add(8); // add node with normal method
singlyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', singlyLinkedList.length()); // => 7
singlyLinkedList.print(); // => 12 13 14 15 16 17 18
console.log('length is 7:', singlyLinkedList.length()); // => 7
*/


module.exports = {
  SinglyLinkedList : SinglyLinkedList,
  Node : Node
};
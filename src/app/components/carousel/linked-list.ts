export class Node<T>{
    value:T;
    next:Node<T>|null = null;
    prev:Node<T>|null = null;

    constructor(value:T){
        this.value = value;
    }
}

export class linkedList<T>{
    firstImg:Node<T> | null = null;
    lastImg:Node<T> | null = null;
    current:Node<T> | null = null;
  
append(value:T){
    const newNode = new Node(value);
    if(!this.firstImg){
      this.firstImg = newNode;
      this.lastImg = newNode;
      this.current = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    }else {
      newNode.prev = this.lastImg;
      newNode.next = this.firstImg;
      if (this.lastImg) this.lastImg.next = newNode;
      if (this.firstImg) this.firstImg.prev = newNode;
      this.lastImg = newNode
    }
  }

  next(){
    if (this.current) {
      this.current = this.current.next;
    }
  }

  prev(){
    if (this.current) {
      this.current = this.current.prev;
    }
  }
  
  getCurrent():T | null{
    return this.current? this.current.value:null;
  }

}
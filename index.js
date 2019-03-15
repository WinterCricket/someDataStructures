class Node {
	constructor(data, next = null){
		this.data = data;
		this.next = next;
	}
}

class LinkedList{
	constructor(){
		this.head = null;
	}
	insertFirst(data){
		this.head = new Node(data, this.head);
	}
	size(){
		let counter = 0;
		let node = this.head;
		while(node){
			counter++;
			node = node.next;
		}
		return counter;
	}

	getFirst(){
		return this.head;
	}

	getLast(){
		if(!this.head){
			return null;
		}
		let node = this.head;
		while(node){
			if(!node.next){
				return node;
			}
			node = node.next;
		}

	}
	clear(){
		this.head = null;
	}

	removeFirst(){
		if(!this.head){
			return;
		}
		this.head = this.head.next;
	}

	removeLast(){
  	if(!this.head){
    	return;
    }
    if(!this.head.next){
    	this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
    while(node.next){
    	prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(){
  	const last = this.getLast();
  	if(last){
  		last.next = new Node(data);
  	}else{
  		this.head = new Node(data);
  	}
  }
  getAt(index){

		let counter = 0;
		let node = this.head;
		while(node){

			if(counter === index){
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
		
	}
	removeAt(index){
		if(!this.head){
			return;
		}
		if(index === 0){
			this.head = this.head.next;
			return;
		}
		
		const previous = this.getAt(index - 1);
		if(!previous || !previous.next){
			return;
		}
		previous.next = previous.next.next;

	}

}
//  const nodeOne = new Node(33);
// const list = new LinkedList();
// list.insertFirst(38);
// list

// Data structure tests for Playground runs

// class Node {
// 	constructor(data, next = null){
// 		this.data = data;
// 		this.next = next;
// 	}
// }

// class LinkedList {
// 	constructor(){
// 		this.head = null;
// 	}
// 	insertFirst(data){
// 		this.head = new Node(data, this.head);
// 	}

// 	size(){
// 		let counter = 0;
// 		let node = this.head;
// 		while(node){
// 			counter++;
// 			node = node.next;
// 		}
// 		return counter;
// 	}

// 	getFirst(){
// 		return this.head;
// 	}

// 	getLast(){
// 		if(!this.head){
// 			return null;
// 		}
// 		let node = this.head;
// 		while(node){
// 			if(!node.next){
// 				return node;
// 			}
// 			node = node.next;
// 		}
// 	}

// 	clear(){
// 		this.head = null;
// 	}



// removeLast(){
//   	if(!this.head){
//     	return;
//     }
//     if(!this.head.next){
//     	this.head = null;
//       return;
//     }
//     let prev = this.head;
//     let node = this.head.next;
//     while(node.next){
//     	prev = node;
//       node = node.next;
//     }
//     prev.next = null;
//   }
// }


//     const l = new LinkedList();
    
//     l.insertFirst(1);
//     l.insertFirst(2);
//     l.insertFirst(3);
//     l.insertFirst(4);
//     l
//     l.getFirst();
//	   l.removeFirst();

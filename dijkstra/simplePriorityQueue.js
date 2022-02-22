class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

let q = new PriorityQueue();

q.enqueue('A', 5);
q.enqueue('B', 8);
q.enqueue('C', 2);
q.enqueue('D', 7);
q.enqueue('E', 20);
console.log(q.values);
console.log(q.dequeue())

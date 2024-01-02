var queue = [];

function enQueue(num) {
  queue.push(num)
  return queue.length
}

function deQueue() {
  return queue.shift()
}

enQueue(0)
enQueue(1)
enQueue(2)
enQueue(3)
console.log(queue)
deQueue()
console.log(queue)
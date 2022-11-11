export default class Ring {

  constructor(max = 100) {
    this.max = max
    this.queue = []
  }

  push(x = 300) {
    this.queue.push(x)
    while (this.queue.length > this.max) this.shift()
  }

  dec() {
    this.queue = this.queue.map(x => Math.max(0, x - 1))
  }

  prune() {
    this.queue = this.queue.filter(x => x)
  }

}
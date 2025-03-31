export class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this.count;
    }

    getCount() {
        return this.count;
    }
} 
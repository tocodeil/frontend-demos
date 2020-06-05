class EventBus {
    constructor() {
        this.handlers = {};
    }

    on(eventName, handler) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
    }

    // Trick 1 - three dots (spread operator)
    emit(eventName, ...info) {
        const handlers = (this.handlers[eventName] || []);
        for (let handler of handlers) {
            handler(...info);
        }
    }
}

const bus = new EventBus();

class EventBus {
    constructor() {
        this.listeners = {};
    }

    subscribe(eventName, handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(handler);

        // Trick1: Arrow function automatically binds
        return () => {
            // "this" is the real this
            
            // Trick2: Function "filter"
            this.listeners[eventName] = this.listeners[eventName].filter(fn => fn !== handler);
        }
    }

    // Trick3: use ... to create variadic functions
    emit(eventName, ...args) {
        const listeners = this.listeners[eventName] || [];
        for (let fn of listeners) {
            fn(...args);
        }
    }
}



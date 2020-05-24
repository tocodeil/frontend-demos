class EventBus {
}

const bus = new EventBus();
const t = bus.subscribe('boom', function(x) { console.log('Boom!', x)});
const u = bus.subscribe('boom', function(x) { console.log('Boom!', x * x )});
bus.emit('boom', 10)
// Prints: Boom! 10 
// And then prints: Boom! 100

u()
bus.emit('boom', 10)
// Prints: Boom! 10


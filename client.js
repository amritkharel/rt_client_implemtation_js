// Connect to the Socket.IO server
const socket = io('http://localhost:8001');

// Handle 'to_client_a' event
socket.on('to_client_a', (data) => {
    console.log(`Received from B: ${JSON.stringify(data)}`);
});

// Handle disconnection
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

import { WebSocketServer } from 'ws';

export function startWebSocketServer() {
  const wss = new WebSocketServer({ port: 8080 });

  console.log('WebSocket server running on ws://localhost:8080');

  setInterval(() => {
    const update = {
      id: String(Math.floor(Math.random() * 12)),
      price: Number((Math.random() * 10).toFixed(4))
    };

    wss.clients.forEach(client => {
      if (client.readyState === 1) {
        client.send(JSON.stringify(update));
      }
    });
  }, 1200);
}

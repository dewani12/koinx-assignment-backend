## Public API Hosted Links (AWS EC2)
```bash
http://13.233.103.129:5000/stats/bitcoin
http://13.233.103.129:5000/deviation/bitcoin
```

## Local Setup 
```bash
cd koinx-assignment-backend/worker-server
npm install
docker pull nats
docker run -d --name nats -p 4222:4222 nats:latest
node publisher.js
```

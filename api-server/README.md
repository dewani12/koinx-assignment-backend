## Public API Hosted Links (AWS EC2)
```bash
http://13.233.103.129:5000/stats/bitcoin
http://13.233.103.129:5000/deviation/bitcoin
```

## Create a .env file in api-server root folder
```bash
PORT=5000
MONGODB_URI=your_mongo_atlas_connection_string
COINGECKO_API_KEY=your_coingecko_api_key

```

## Local Setup
```bash
git clone https://github.com/dewani12/koinx-assignment-backend.git
cd koinx-assignment-backend/api-server
npm install
npm run dev
```

## Endpoints
### GET /stats/:id
```bash
http://localhost:5000/stats/bitcoin
```

### GET /deviation/:id
```bash
http://localhost:5000/deviation/bitcoin
```



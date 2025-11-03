# Barber Shop JSON Server

JSON Server API for the Barber Shop management application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server locally:
```bash
npm start
```

The server will run on `http://localhost:3000`

## API Endpoints

- **Services**: `/services`
- **Invoices**: `/invoices`
- **Withdrawals**: `/withdrawals`
- **Materials**: `/materials`
- **Material Purchases**: `/materialPurchases`
- **Material Sales**: `/materialSales`
- **Settings**: `/settings`

## Render.com Deployment

### Steps:

1. **Connect Repository**
   - Push this folder to GitHub
   - Connect it to Render.com

2. **Create Web Service**
   - Service Type: `Web Service`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables**
   - `PORT` - Automatically set by Render.com
   - `NODE_ENV` - Set to `production` (optional)

4. **Settings**
   - Auto-Deploy: Enabled (optional)
   - Health Check Path: Leave empty or use `/services`

### Render.com Configuration:

- **Name**: barber-shop-api (or your preferred name)
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free tier is sufficient for development

### After Deployment:

1. Get your Render.com URL (e.g., `https://barber-shop-api.onrender.com`)
2. Update the API base URL in your frontend application
3. Test all endpoints using the Render.com URL

## Data Persistence

⚠️ **Important**: JSON Server on Render.com's free tier may reset data after inactivity. For production, consider:
- Upgrading to a paid plan with persistent storage
- Using a proper database (PostgreSQL, MongoDB, etc.)
- Setting up automated backups

## CORS

CORS is configured to allow all origins. For production, update the `Access-Control-Allow-Origin` header in `server.js` to your specific frontend domain.

## API Examples

### Get all services:
```
GET https://your-api.onrender.com/services
```

### Create invoice:
```
POST https://your-api.onrender.com/invoices
Content-Type: application/json

{
  "date": "2024-01-15T10:30:00.000Z",
  "customerName": "أحمد",
  "barber": "ناصر",
  "paymentMethod": "نقدي",
  "services": [{"name": "شعر", "price": 50}],
  "total": 50
}
```

### Filter withdrawals by person:
```
GET https://your-api.onrender.com/withdrawals?person=المساعد
```

### Get settings:
```
GET https://your-api.onrender.com/settings?key=partnerPercentage
```


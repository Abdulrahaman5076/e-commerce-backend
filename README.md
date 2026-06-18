# Multi-Vendor E-Commerce Marketplace Backend

Production-ready backend for a scalable multi-vendor e-commerce marketplace built with Node.js, Express, and MongoDB.

## Features

### Core Features
- ✅ Multi-vendor support with vendor profiles and shops
- ✅ Product management with vendor-specific inventory
- ✅ Advanced cart and order management
- ✅ Payment processing with Stripe
- ✅ Order fulfillment workflow
- ✅ Commission management for marketplace
- ✅ Vendor analytics and reporting
- ✅ Customer reviews and ratings
- ✅ Messaging system between vendors and customers
- ✅ Admin dashboard endpoints

## Quick Start

```bash
git clone https://github.com/Abdulrahaman5076/e-commerce-backend.git
cd e-commerce-backend
git checkout multi-vendor
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/vendors/register` - Register as vendor
- `GET /api/products` - List products
- `POST /api/orders` - Create order
- `GET /api/admin/dashboard` - Admin dashboard

## Architecture

```
src/
├── models/          Database schemas
├── routes/          API endpoints
├── middleware/      Auth & validation
└── utils/           Helpers & validators
```

## Security

- JWT authentication
- Role-based access control
- Password hashing with bcryptjs
- Rate limiting
- HTTPS ready

## License

MIT

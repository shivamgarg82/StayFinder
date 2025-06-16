# 🏠 StayFinder - Airbnb Clone (MERN Stack)

![StayFinder Screenshot](/public/screenshot.jpg) *Replace with actual screenshot*

A full-stack property booking platform with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **User Authentication** (JWT)
- **Property Listings** with images
- **Booking System** with date selection
- **Host Dashboard** for managing listings
- **Responsive Design** (Mobile-friendly)

## 🛠️ Tech Stack 

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React, Tailwind CSS  |
| Backend      | Node.js, Express     |
| Database     | MongoDB (Mongoose)   |
| Deployment   | Vercel + Render      |

## 📦 Installation

### Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/shivamgarg82/StayFinder.git
cd StayFinder
2. Set Up Backend
bash
cd backend
npm install
echo "MONGODB_URI=mongodb://localhost:27017/stayfinder" > .env
npm start
3. Set Up Frontend
bash
cd ../frontend
npm install
npm run dev
4. Seed Sample Data (Optional)
bash
cd ../backend
node seed.js
🌐 API Endpoints
Method	Endpoint	Description
GET	/api/listings	Get all listings
POST	/api/listings	Create new listing (Host)
POST	/api/auth/register	User registration
📸 Screenshots
Homepage
https:///public/home.jpg

Listing Detail
https:///public/detail.jpg

🛠️ Database Schema
javascript
// Listing Model
{
  title: String,
  price: Number,
  location: String,
  images: [String],
  host: { type: ObjectId, ref: 'User' }
}
🔧 Environment Variables
Create .env in /backend:

text
MONGODB_URI=your_connection_string
JWT_SECRET=your_jwt_secret
🚀 Deployment
Frontend:
https://vercel.com/button

Backend:

Set up on Render with MongoDB Atlas

🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📜 License
Distributed under the MIT License.

📧 Contact
Shivam Garg - your.email@example.com

Project Link: https://github.com/shivamgarg82/StayFinder

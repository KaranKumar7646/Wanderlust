# 🏡 Wanderlust: Property Booking Platform

A full-stack property listing and booking web app built with **Node.js, Express.js, MongoDB and EJS**. Users can browse listings, create their own, upload photos, and leave reviews, all behind a secure login system.

🔗 **Live Demo:** [wanderlust-project-i61m.onrender.com](https://wanderlust-project-i61m.onrender.com/)

> ⏳ The app is hosted on Render's free tier, so the first load may take 30 to 60 seconds to wake up.

<!--
Add screenshots here after uploading them to a /screenshots folder, e.g.:
![All listings](screenshots/listings.png)
![Listing details](screenshots/listing-detail.png)
-->

---

## ✨ Features

- 🏠 **Create, view, edit and delete** property listings
- 🔐 **User authentication** (sign up, log in, log out) with Passport.js
- 🖼️ **Image uploads** stored on Cloudinary
- ✅ **Server-side validation** of listing data with Joi
- 🛡️ **Authorization**: only the owner can edit or delete their listing
- 🧩 **Server-rendered pages** using EJS templates
- 🌐 **Deployed live** on Render

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | EJS, HTML, CSS, Bootstrap |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js (local strategy), express-session |
| Validation | Joi |
| File storage | Cloudinary, Multer |
| Deployment | Render |

---

## 📁 Project Structure

```
Wanderlust/
├── controllers/     # Route logic (listings, users)
├── init/            # Database seed data
├── models/          # Mongoose schemas
├── public/          # Static files (CSS, JS, images)
├── routes/          # Express routers
├── utils/           # Helper functions and error handling
├── views/           # EJS templates
├── app.js           # Main server file
├── cloudConfig.js   # Cloudinary configuration
├── middleware.js    # Auth and validation middleware
└── schema.js        # Joi validation schemas
```

---

## 🚀 Run It Locally

### Prerequisites
- Node.js (v16 or higher)
- A MongoDB database (local or MongoDB Atlas)
- A free [Cloudinary](https://cloudinary.com/) account

### 1. Clone the repository
```bash
git clone https://github.com/KaranKumar7646/Wanderlust.git
cd Wanderlust
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add environment variables
Create a `.env` file in the project root with your own values (check `app.js` and `cloudConfig.js` for the exact variable names):
```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. (Optional) Seed sample data
```bash
node init/index.js
```

### 5. Start the app
```bash
node app.js
```
Open **http://localhost:8080** in your browser.

---

## 🔮 Future Improvements

- Online booking with date selection
- Search and filters (location, price)
- Map view of listings
- Payments integration

---

## 👤 Author

**Karan Kumar**
[GitHub](https://github.com/KaranKumar7646) · [LinkedIn](https://www.linkedin.com/in/karan-kumar-687854282/)

⭐ If you found this project useful, consider giving it a star!

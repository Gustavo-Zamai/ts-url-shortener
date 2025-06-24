# 🔗 TypeScript URL Shortener

A simple and efficient URL shortener service built with **TypeScript**, **Node.js**, **Express**, and **MongoDB**. Converts long URLs into short, shareable links with automatic redirection.

---

## ✨ Features

✅ Shorten long URLs  
✅ Redirect to original URL  
✅ MongoDB for persistent storage  
✅ RESTful API design  
✅ Fully typed with TypeScript  
✅ Easy setup with Docker  

---

## 🛠 Tech Stack

- **Node.js** – Runtime Environment  
- **TypeScript** – Strongly typed language  
- **Express** – HTTP Server Framework  
- **MongoDB** – NoSQL Database  
- **Typegoose** – Mongoose + TypeScript  
- **shortid** – Unique hash generator  
- **Docker** – Containerized development  

---

## 🚀 Getting Started

### Option 1: Run with Docker 🐳

> Make sure you have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/ts-url-shortener.git
cd ts-url-shortener
```
#### 2. Create a .env file

```env
API_URL=http://localhost:3000
MONGO_CONNECTION=mongodb://mongo:27017/url-shortener
```
#### 3. Start the application

```bash
docker-compose up --build
```
#### 4. The API will be running at `http://localhost:3000`.

## 📚 API Endpoints

| Method | Endpoint     | Description               | Request Body                         |
|--------|--------------|---------------------------|--------------------------------------|
| POST   | `/shortener` | Shortens a long URL       | `{ "originUrl": "https://longurl.com/12345" }`    |
| GET    | `/:hash`     | Redirects to original URL | -                                    |

## 🧪 Example Request
```bash
curl -X POST http://localhost:3000/shortener \
  -H "Content-Type: application/json" \
  -d '{ "originUrl": "https://example.com/very-long-url" }'
  ```
## 🔁 Example Response
```json
{
  "hash": "abc123",
  "shortUrl": "http://localhost:3000/abc123",
  "originUrl": "https://example.com/very-long-url"
}
```
## ⚙️ Project Structure
```bash
src/
├── config/          # Environment configuration
├── controller/      # Route logic and handlers
├── database/        # MongoDB connection logic
├── model/           # Mongoose models with Typegoose
└── index.ts         # Application entry point
```

## 🚧 Future Improvements

- 🔐 Use environment variables properly — never hardcode credentials.  
- 🧪 Improve error handling and logging for production readiness.  
- 🚦 Add rate limiting to avoid abuse and prevent spam.  
- ✅ Add URL validation and better input sanitization.  
- 📊 Implement analytics (e.g., click tracking, expiration).  
- 🧩 Add support for custom short URLs. 

## 📜 License
This project is licensed under the MIT License.

## 👨‍💻 Author
#### Gustavo Zamai

[LinkedIn](https://www.linkedin.com/in/gustavo-sim%C3%A3o-zamai-664a5521a/) • 
[GitHub](https://github.com/Gustavo-Zamai)
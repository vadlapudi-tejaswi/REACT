import React from "react";
import { createRoot } from "react-dom/client";

// Header Component
function Header() {
  return (
    <div style={{ backgroundColor: "#f84464", color: "white", padding: "15px", textAlign: "center" }}>
      <h1>🎬 My Movie Booking App</h1>
    </div>
  );
}

// Movie Card Component
function MovieCard({ title, image, likes }) {
  return (
    <div style={{
      width: "180px",
      margin: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={image} alt={title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
      <div style={{ padding: "10px", textAlign: "center" }}>
        <h3>{title}</h3>
        <p style={{ color: "green" }}>👍 {likes} Likes</p>
        <button style={{
          padding: "8px 15px",
          backgroundColor: "#f84464",
          border: "none",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Book Now
        </button>
      </div>
    </div>
  );
}

// Body Component
function Body() {
  const movies = [
    {
      title: "Mithra Mandali",
      image: "https://m.media-amazon.com/images/M/MV5BMmI0MmU4ZTktMWM3OS00OGYzLTkzOTktZjJiOTc1NzU4YjI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Dude",
      image: "https://m.media-amazon.com/images/M/MV5BZWFiMzEzZTQtZjFiZC00YjhjLTk3Y2QtYzA2MjE4MmRiNzdmXkEyXkFqcGc@._V1_.jpg",
      likes: "123K",
    },
    {
      title: "Telusu Kadha",
      image: "https://preview.redd.it/telusu-kada-new-poster-v0-1xp27m1xzloe1.jpeg?auto=webp&s=2079d42111dbe5d182fcdea31dd294ae74d527e1",
      likes: "102K",
    },
    {
      title: "Kantara",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Kantara-_Chapter_1_poster.jpg/250px-Kantara-_Chapter_1_poster.jpg",
      likes: "408K",
    },
    {
      title: "K-Ramp",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphpyQ9FwmX1Tp_2OZwagVc75M6OlCFXGVWQ&s",
      likes: "31K",
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🎥 Recommended Movies</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        {movies.map((movie, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              margin: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: "white"
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover"
              }}
            />
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3>{movie.title}</h3>
              <p style={{ color: "green" }}>👍 {movie.likes} Likes</p>
              <button
                style={{
                  padding: "8px 15px",
                  backgroundColor: "#f84464",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div style={{
      backgroundColor: "#222",
      color: "white",
      textAlign: "center",
      padding: "10px",
      marginTop: "20px"
    }}>
      <p>© 2025 My Movie Booking App. All rights reserved.</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);

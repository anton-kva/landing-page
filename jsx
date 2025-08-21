import React from "react";
import "./App.css";

const products = [
  {
    title: "Done-For-You Cold Outreach System",
    description:
      "Automate your outbound lead generation with AI-powered cold outreach sequences. Save time, boost response rates, and fill your pipeline effortlessly.",
    video: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg", // Placeholder thumbnail, replace with real
    bookingLink: "https://calendly.com/automateiq/discovery-call"
  },
  {
    title: "Ai Proposal Generator",
    description:
      "Generate tailored, high-converting proposals in seconds. Our AI crafts compelling proposals based on your client’s needs, so you can win more deals.",
    video: "https://img.youtube.com/vi/9bZkp7q19f0/0.jpg", // Placeholder thumbnail, replace with real
    bookingLink: "https://calendly.com/automateiq/discovery-call"
  },
  {
    title: "Inbound Lead Qualifier and Dashboard",
    description:
      "Instantly qualify inbound leads and manage them in a central dashboard. Let AI segment, score, and help you follow up with the hottest prospects.",
    video: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg", // Placeholder thumbnail, replace with real
    bookingLink: "https://calendly.com/automateiq/discovery-call"
  },
  {
    title: "Custom Buildout",
    description:
      "Need something unique? We design and implement custom AI automations that scale with your business, tailored to your exact workflow.",
    video: "https://img.youtube.com/vi/V-_O7nl0Ii0/0.jpg", // Placeholder thumbnail, replace with real
    bookingLink: "https://calendly.com/automateiq/discovery-call"
  }
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Automate IQ</h1>
        <p className="subtitle">
          AI Automation Agency – Supercharge Your Business Growth with Smart Automation
        </p>
      </header>
      <section className="products">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img
              className="video-thumbnail"
              src={product.video}
              alt={`Video about ${product.title}`}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <a className="book-btn" href={product.bookingLink} target="_blank" rel="noopener noreferrer">
              Book a Discovery Call
            </a>
          </div>
        ))}
      </section>
      <footer>
        <p>© {new Date().getFullYear()} Automate IQ. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

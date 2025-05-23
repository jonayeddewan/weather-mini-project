import "../css/Hero.css";

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button-group">
          <button className="shop-now">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="hero-shopping">
          <p>Also Available On</p>
        </div>
        <div className="hero-shopping-images">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />

        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <section id="home">
      <div className="hero">
        <div className="hero-content">
          <div style={{ display: "flex" }}>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/128/2682/2682340.png"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <h1>Welcome to Cake Bake</h1>
              <h2>One stop shop for all delicious cakes and pastries..</h2>
            </div>
          </div>
        </div>

        <img
          className="hero-banner"
          src="https://images.alphacoders.com/189/thumb-1920-189163.jpg"
          alt="Delicious Cakes"
        />
      </div>
      <div className="about">
        <h2>About Us</h2>
        <p>
          Welcome to Cake Bake, where every slice tells a story! Founded with a
          passion for baking and a love for all things sweet, we are dedicated
          to creating delectable cakes that bring joy to every celebration. Our
          journey began in 2024 with a simple dream: to craft cakes that not
          only look beautiful but taste incredible. Using only the finest
          ingredients and traditional recipes, our talented bakers pour their
          hearts into every creation, from classNameic favorites to innovative
          designs. At Cake Bake, we believe that every occasion deserves a
          special cake, whether it’s a birthday, wedding, or just a sweet treat
          for yourself. We take pride in our custom orders, ensuring that each
          cake is a unique masterpiece tailored to your vision. Join us in
          celebrating life’s sweetest moments! Visit us in-store or explore our
          online gallery to discover your next favorite cake. Thank you for
          letting us be a part of your celebrations!
        </p>
      </div>
    </section>
  );
}

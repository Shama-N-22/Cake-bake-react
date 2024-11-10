export default function Cakes({ setCake }) {
  const showDetails = (cakeType) => {
    console.log(cakeType);
    setCake(cakeType);
  };

  return (
    <section id="cakes">
      <h2 style={{ padding: "0px 20px" }}>Our Cakes</h2>
      <div className="cake-category">
        <div className="cake-card" onClick={() => showDetails("birthday")}>
          <img
            src="https://img.freepik.com/free-photo/delicious-cake-with-fruits_23-2150727658.jpg"
            alt="Birthday Cake"
          />
          <h3>Birthday Cakes</h3>
        </div>
        <div className="cake-card" onClick={() => showDetails("wedding")}>
          <img
            src="https://images8.alphacoders.com/133/1337257.png"
            alt="Wedding Cake"
          />
          <h3>Wedding Cakes</h3>
        </div>
        <div className="cake-card" onClick={() => showDetails("custom")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-DbtxG2lFDfzh4JDdAPs4LXuzklNSH3BQg&s"
            alt="Custom Cake"
          />
          <h3>Custom Cakes</h3>
        </div>
      </div>
    </section>
  );
}

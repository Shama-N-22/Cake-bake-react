import "./details.css";

export default function CakeDetails({ data, setCake }) {
  return (
    <div class="container">
      <h1 id="cake-name">{data.name}</h1>
      <img id="cake-image" src={data.image} alt="Birthday Cake" />

      <div class="description">
        <h2>Description</h2>
        <p>{data.desc}</p>
      </div>

      <div class="customization">
        <h2>Customization Options</h2>
        <label for="flavor">Flavor:</label>
        <select id="flavor">
          <option value="chocolate">Chocolate</option>
          <option value="vanilla">Vanilla</option>
          <option value="red-velvet">Red Velvet</option>
        </select>
        <br />

        <label for="size">Size:</label>
        <select id="size">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <button id="add-to-cart">Add to Cart</button>
      <button id="go-back" onClick={() => setCake("")}>
        Go Back
      </button>
      <p id="cart-message"></p>
    </div>
  );
}

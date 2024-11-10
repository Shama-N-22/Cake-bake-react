export default function Gallery() {
  return (
    <section id="gallery" style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ padding: "0px 20px" }}>Gallery</h2>
      <div className="gallery-grid">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3bUS4VLgI05OBypiWlzfgec9arP7vSjWTg&s"
          alt="Gallery Image 1"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_640.jpg"
          alt="Gallery Image 2"
        />
        <img
          src="https://images4.alphacoders.com/134/1343837.png"
          alt="Gallery Image 3"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32TC5uq2HuUDKD-Addcr7NgFkG1aDjcXZjA&s"
          alt="Gallery Image 4"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwh74mR3bTEBBxpSbMukTOrQNPaQOD6kmmOA&s"
          alt="Gallery Image 5"
        />
        <img
          src="https://cdn.pixabay.com/photo/2023/01/25/12/26/birthday-7743464_640.jpg"
          alt="Gallery Image 6"
        />
      </div>
    </section>
  );
}

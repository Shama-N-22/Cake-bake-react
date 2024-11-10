import { useState } from "react";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  const handleSubmit = () => {
    setReviews([...reviews, { name: name, review: review }]);
  };

  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  return (
    <section id="testimonials" style={{ marginBottom: "20px" }}>
      <h2 style={{ padding: "0px 20px" }}>Customer Testimonials</h2>
      <form
        id="testimonialForm"
        style={{ padding: "0px 20px" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Your
   Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Review"
          required
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div id="reviews" style={{ padding: "0px 20px" }}>
        {reviews.map((r) => (
          <p
            style={{
              backgroundColor: "gray",
              padding: "20px 10px",
              borderRadius: "20px",
            }}
          >
            <strong>{r.name}:</strong> {r.review}
          </p>
        ))}
      </div>
    </section>
  );
}

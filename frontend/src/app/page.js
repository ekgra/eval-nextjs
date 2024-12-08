"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    interest: "",
    profilePhoto: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/interests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Data submitted successfully!");
        setFormData({ name: "", city: "", interest: "", profilePhoto: "" });
      } else {
        setStatus("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setStatus("An error occurred");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Submit Your Interest</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Interest: </label>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Profile Photo URL: </label>
          <input
            type="text"
            name="profilePhoto"
            value={formData.profilePhoto}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

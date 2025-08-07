import React, { useState } from "react";

const TemplateCreationForm = ({ onSubmit }) => {
  const [template, setTemplate] = useState({
    name: "",
    description: "",
    category: "",
  });

  const categories = ["Merchandising", "Stock", "Quality", "Hygiene"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTemplate((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (template.name.trim() === "") {
      alert("Template name is required");
      return;
    }
    onSubmit(template);
  };

  return (
    <form className="template-form" onSubmit={handleSubmit}>
      <h2>Create Audit Template</h2>

      <div className="form-group">
        <label>Template Name</label>
        <input
          type="text"
          name="name"
          value={template.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Template Description</label>
        <textarea
          name="description"
          value={template.description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Audit Category</label>
        <select
          name="category"
          value={template.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="submit-button">
        Create Template
      </button>
    </form>
  );
};

export default TemplateCreationForm;

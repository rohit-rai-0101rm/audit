import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const CreateTemplateForm = () => {
  const [templateName, setTemplateName] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [auditCategory, setAuditCategory] = useState("");
  const [message, setMessage] = useState("");

  const auditCategories = [
    "Merchandising",
    "Stock",
    "Quality",
    "Safety",
    "Customer Service",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("templates").insert([
      {
        name: templateName,
        description: templateDescription,
        category: auditCategory,
      },
    ]);

    if (error) {
      console.error("Error inserting template:", error.message);
      setMessage("Error creating template.");
    } else {
      setMessage("Template created successfully!");
      setTemplateName("");
      setTemplateDescription("");
      setAuditCategory("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Create Audit Template</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Template Name:</label>
          <input
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Template Description:</label>
          <textarea
            value={templateDescription}
            onChange={(e) => setTemplateDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Audit Category:</label>
          <select
            value={auditCategory}
            onChange={(e) => setAuditCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            {auditCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Create Template</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateTemplateForm;

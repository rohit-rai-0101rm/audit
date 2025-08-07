import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const SurveyList = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurveyResponses = async () => {
      const { data, error } = await supabase.from("users").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setResponses(data);
      }

      setLoading(false);
    };

    fetchSurveyResponses();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Survey Responses</h2>
      <ul>
        {responses.map((response) => (
          <li key={response.id}>{JSON.stringify(response)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyList;

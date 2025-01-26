import { useState, useEffect } from "react";
import supabase from "./supabaseClient";
import { data } from "react-router-dom";

export default function SupabasePage() {
  const [homework, setHomework] = useState([]);
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    async function fetchHomework() {
      const { data } = await supabase
        .from("homework")
        .select("*")
        .order("id", { ascending: true });
    }

    fetchHomework();
  }, []);
  const handleAddHomework = async () => {
    const {} = await supabase.from("homework").insert([{ subject, note }]);
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl">Hausaufgaben</h1>

      <div className="my-6">
        <input
          type="text"
          placeholder="Fach"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Notiz"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddHomework}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Hinzufügen
        </button>
      </div>
    </div>
  );
}

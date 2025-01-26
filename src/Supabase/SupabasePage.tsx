// SupabasePage.tsx
import { useState, useEffect } from "react";
import supabase from "./supabaseClient";

export default function SupabasePage() {
  const [homework, setHomework] = useState([]);
  const [subject, setSubject] = useState("");
  const [note, setNote] = useState("");

  // Hole die Hausaufgaben von der Supabase-Datenbank
  useEffect(() => {
    async function fetchHomework() {
      const { data, error } = await supabase
        .from("homework")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching homework:", error);
      }
      setHomework(data);
    }

    fetchHomework();
  }, []);

  // Neue Hausaufgabe hinzufügen
  const handleAddHomework = async () => {
    const {} = await supabase.from("homework").insert([{ subject, note }]);

    const { data: updatedHomework, error: fetchError } = await supabase
      .from("homework")
      .select("*")
      .order("id", { ascending: true });

    if (fetchError) {
      console.error("Error fetching updated homework:", fetchError);
    } else {
      setHomework(updatedHomework);
    }
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

      <div>
        <ul className="mt-4">
          {homework.map((hw) => (
            <li key={hw.id} className="border-b py-2">
              <div>
                <strong>{hw.subject}</strong>
              </div>
              <div>{hw.note}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

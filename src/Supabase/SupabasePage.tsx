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
}

import { useState } from "react";

function TaskForm({ onAddTask }) {

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("A faire");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      titre,
      description,
      statut,
    };

    onAddTask(newTask);

    setTitre("");
    setDescription("");
    setStatut("A faire");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <select
        value={statut}
        onChange={(e) => setStatut(e.target.value)}
      >
        <option>A faire</option>
        <option>En cours</option>
        <option>Termine</option>
      </select>

      <br /><br />

      <button type="submit">
        Ajouter
      </button>

    </form>
  );
}

export default TaskForm;
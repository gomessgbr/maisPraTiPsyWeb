import { useState, useEffect } from "react";

export function Habits() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits"));
    if (storedHabits) {
      setHabits(storedHabits);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { text: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  const deleteHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
  };

  const toggleHabit = (index) => {
    const newHabits = habits.map((habit, i) => {
      if (i === index) {
        return { ...habit, completed: !habit.completed };
      }
      return habit;
    });
    setHabits(newHabits);
  };

  const editHabit = (index, newText) => {
    const newHabits = habits.map((habit, i) => {
      if (i === index) {
        return { ...habit, text: newText };
      }
      return habit;
    });
    setHabits(newHabits);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-montserratBold mb-4">Meus Hábitos</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="px-2 py-1 border rounded mr-2"
        />
        <button
          onClick={addHabit}
          className="bg-primary text-white px-2 py-1 rounded"
        >
          Adicionar Hábito
        </button>
      </div>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <div>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(index)}
                className="mr-2"
              />
              {habit.completed ? <del>{habit.text}</del> : habit.text}
            </div>
            <div>
              <button
                onClick={() => {
                  const newText = prompt("Edite seu hábito:", habit.text);
                  if (newText !== null) {
                    editHabit(index, newText);
                  }
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => deleteHabit(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

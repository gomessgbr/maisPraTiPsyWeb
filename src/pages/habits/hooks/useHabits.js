import { useEffect, useState } from "react";

export function useHabits() {
  const [habits, setHabits] = useState([]);

  const getHabits = async () => {
    const storedHabits = localStorage.getItem("habits");
    const storedJsonHabits =
      storedHabits !== null ? JSON.parse(storedHabits) : "";
    setHabits(storedJsonHabits);
  };

  const addHabit = (e) => {
    e.preventDefault();
    const data = e.target.querySelector("input").value;
    if (data.trim()) {
      setHabits([...habits, { text: data, completed: false }]);
      e.target.reset();
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

  useEffect(() => {
    getHabits();
  }, []);

  return {
    habits,
    deleteHabit,
    editHabit,
    toggleHabit,
    addHabit,
  };
}

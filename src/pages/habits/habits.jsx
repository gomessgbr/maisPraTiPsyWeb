import { useEffect, useId, useRef } from "react";
import { useHabits } from "./hooks/useHabits";
import { HabitsForm } from "./components/HabitsForm";
import { Plus } from "lucide-react";

export function Habits() {
  const id = useId();
  const inputRef = useRef(null);
  const { habits, addHabit, deleteHabit, editHabit, toggleHabit } = useHabits();

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  return (
    <div className="p-8 min-h-[800px] max-w-max flex flex-col place-items-center mx-auto my-4 border ">
      <h1 className="text-2xl font-montserratBold mb-4">Meus Hábitos</h1>
      <form
        id={id}
        className="md:min-w-[90dvh] mb-4 grid gap-1 grid-cols-[1fr_auto] "
        onSubmit={addHabit}
      >
        <input
          type="text"
          className="px-2 py-1 border rounded mr-2"
          ref={inputRef}
        />
        <button className="bg-accent text-white px-2 py-1 rounded" form={id}>
          <Plus />
        </button>
      </form>
      <ul className="min-w-full">
        {habits.map((habit, index) => (
          <HabitsForm
            habit={habit}
            key={`${habit}${index}`}
            index={index}
            toggleHabit={toggleHabit}
            editHabit={editHabit}
            deleteHabit={deleteHabit}
          />
        ))}
      </ul>
    </div>
  );
}

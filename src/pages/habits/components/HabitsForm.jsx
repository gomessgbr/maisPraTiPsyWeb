export function HabitsForm({
  habit,
  index,
  toggleHabit,
  editHabit,
  deleteHabit,
}) {
  return (
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
  );
}

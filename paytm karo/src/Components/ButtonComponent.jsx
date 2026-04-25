export function ButtonComponent({ value, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-blue-600 text-white w-full rounded-sm p-2 hover:bg-blue-300 hover:text-black hover:font-semibold"
      >
        {value}
      </button>
    </div>
  );
}

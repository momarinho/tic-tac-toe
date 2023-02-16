export default function Square({ onClick, value }) {
  return (
    <button
      className="bg-gray-300 hover:bg-gray-500 w-16 h-16 text-4xl font-bold rounded-md cursor-pointer"
      onClick={onClick}
      disabled={value}
    >
      {value}
    </button>
  );
}

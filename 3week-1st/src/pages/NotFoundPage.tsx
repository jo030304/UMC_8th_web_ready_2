export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">ERROR</h1>
        <p className="text-2xl text-gray-700 mb-6">TOTORO</p>
        <p className="text-lg text-gray-500 mb-8">
          This page does not exist.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
        >
          Go back
        </button>
      </div>
    </div>
  );
}
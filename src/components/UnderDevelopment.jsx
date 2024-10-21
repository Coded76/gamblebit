import { FaTools } from "react-icons/fa"; // Import a construction icon for effect

const UnderDevelopment = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <FaTools className="text-6xl text-yellow-500 mb-6 animate-bounce" />
      <h1 className="text-4xl font-semibold text-gray-800">
        Page Under Development
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        We&apos;re working hard to bring this page to life. Check back soon!
      </p>
      <div className="mt-8">
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;

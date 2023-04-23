import { createData } from 'brace-js';
const name = createData('hello')

const App = () => {
  return (
    <div
      className="bg-gray-100 flex flex-col items-center justify-center
    min-h-screen sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg
    mx-auto"
    >
      <h1 className="text-6xl font-bold text-gray-800 mt-12 mb-8 text-center">
        Welcome to{" "}
        <span className="bg-clip-text bg-gradient-to-bl from-blue-900 via-purple-600 to-blue-900 text-transparent">
          {name()}
        </span>
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center mx-1 font-medium">
        Get started by editing the{" "}
        <code className="bg-gray-200 rounded-md px-1">src/app.js</code> file.
      </p>
      <div className="grid content-center">
        <input on:input={e => name.set(() => e.target.value)} /> 
      </div>
      <footer className="text-gray-700 text-sm mt-8 border-t border-t-gray-300
      w-full py-4 flex justify-center items-center">
        &copy; 2023&nbsp;
        <span className="font-extrabold"> BraceJs</span>
      </footer>
    </div>
  );
};

export default App;

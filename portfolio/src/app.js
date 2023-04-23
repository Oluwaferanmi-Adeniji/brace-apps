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
          My Portfolio 
        </span>
      </h1>
      <p className="text-lg text-gray-700 mb-8 text-center mx-1 font-medium">
        Get started by editing the{" "}
        <code className="bg-gray-200 rounded-md px-1">src/app.js</code> file.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
        <a
          href="#"
          className="block border border-gray-200 rounded-md p-4
        text-center hover:border-blue-600 hover:text-blue-600 transition-colors
        duration-300 h-40"
        >
          <h2 className="text-lg font-bold mb-2">Documentation</h2>
          <p className="">
            Explore the BraceJs documentation and learn how to use the library.
          </p>
        </a>
        <a
          href="#"
          className="block border border-gray-200 rounded-md p-4
        text-center hover:border-blue-600 hover:text-blue-600 transition-colors
        duration-300 h-40"
        >
          <h2 className="text-lg font-bold mb-2">Learn</h2>
          <p className="">
            Find tutorials, examples and other resources to help you learn
            BraceJs.
          </p>
        </a>
        <a
          href="#"
          className="block border border-gray-200 rounded-md p-4
        text-center hover:border-blue-600 hover:text-blue-600 transition-colors
        duration-300 h-40"
        >
          <h2 className="text-lg font-bold mb-2">Playground</h2>
          <p className="">
            Experiment with BraceJs in our online code editor and see the results in real-time.
          </p>
        </a>
        <a
          href="#"
          className="block border border-gray-200 rounded-md p-4
        text-center hover:border-blue-600 hover:text-blue-600 transition-colors
        duration-300 h-40"
        >
          <h2 className="text-lg font-bold mb-2">Contribute</h2>
          <p className="">
            Join the BraceJs community and contribute to the development of the
            library.
          </p>
        </a>
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

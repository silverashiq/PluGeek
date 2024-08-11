import React from "react";

function NotFound() {
  return (
    <div>
<body className="bg-gradient-to-r from-slate-200 to-slate-300 h-screen flex items-center justify-center">
    <div className="text-center max-w-lg mx-auto">

        <h1 className="text-9xl font-extrabold text-gray-800 mb-6">404</h1>
        <p className="text-2xl text-gray-700 mb-8">Uh-oh! We can't seem to find the page you're looking for.</p>
        
        <a href="/" className="inline-block px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg">
            Return to Home
        </a>
    </div>
</body>
    </div>
  );
}

export default NotFound;

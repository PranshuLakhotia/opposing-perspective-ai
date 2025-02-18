import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse">
      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
    </div>
  );
};

export default Loader;
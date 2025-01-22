import React from 'react';

const Editor = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6"> Skill-Hub Code Editor</h1>
      <div className="w-full rounded-lg shadow-lg overflow-hidden">
        <iframe
          frameBorder="0"
          height="450px"
          src="https://onecompiler.com/embed/"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Editor;
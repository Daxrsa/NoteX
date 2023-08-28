import React, { useState } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      setOutput([...output, `> ${input}`, executeCommand(input)]);
      setInput('');
    }
  };

  const executeCommand = (command) => {
    // For now, just echo the command
    return command;
  };

  return (
    <div className="bg-black text-green-400 p-5 h-80 overflow-y-scroll">
      <div className="output">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="input-area flex items-center">
        <span className="mr-2"></span>
        <input 
            value={input} 
            onChange={handleInputChange} 
            onKeyDown={handleCommand} 
            className="bg-black text-green-400 outline-none w-11/12"
        />
      </div>
    </div>
  );
};

export default Terminal;

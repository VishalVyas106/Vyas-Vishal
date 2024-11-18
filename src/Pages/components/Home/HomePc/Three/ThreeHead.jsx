import React from 'react';

const ThreeHead = () => {
  return (
    <div className="HeadThree">
      {/* <script src="https://cdn.lordicon.com/lordicon.js"></script> */}
      <lord-icon
        src="https://cdn.lordicon.com/sbrtyqxj.json"
        trigger="hover"json
        colors="primary:#e83a30"
        style={{ width: '50px', height: '50px' }} // Adjust width and height here
      ></lord-icon>
      <h1>Project</h1>
      
    </div>
  );
}

export default ThreeHead;


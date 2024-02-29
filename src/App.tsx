import React from 'react';

const App = () => {
  const handleFocus = (event: React.FocusEvent<HTMLElement>) => {
    console.log(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLElement>) => {
    console.log(event);
  };

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        defaultValue=""
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default App;

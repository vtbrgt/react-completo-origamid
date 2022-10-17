import React from 'react';

const Textarea = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <textarea
      value={textarea}
      onChange={({ target }) => setTextarea(target.value)}
      rows="5"
    />
  );
};

export default Textarea;

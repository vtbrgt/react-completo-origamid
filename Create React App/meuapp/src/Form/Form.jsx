import React from 'react';
import Input from './Input';
import Button from './Button';

const Form = () => {
  const array = ['item1', 'item2'];
  return (
    <form>
      <Input id="email" label="Email" required />
      <Input id="password" label="Password" type="password" />
      <Button items={array} />
    </form>
  );
};

export default Form;

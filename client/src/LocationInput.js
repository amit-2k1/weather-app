import React from 'react';
import { FormControl, Input } from '@chakra-ui/react';

function LocationInput({ onSubmit }) {
  return (
    <FormControl minW={'60%'}>
      <form onSubmit={onSubmit}>
        <Input
          id="location"
          type="text"
          name="location"
          placeholder="Enter the location"
          autoComplete="off"
          autoFocus
          required
        />
      </form>
    </FormControl>
  );
}

export default LocationInput;

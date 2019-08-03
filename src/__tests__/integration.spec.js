/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { routine } from '../index';

describe('Given the Rine library', () => {
  describe('when using routine routine with a hook', () => {
    it('should keep the hook working', async () => {
      const Input = function () {
        const [ text, setText ] = useState('');

        return (
          <React.Fragment>
            <p>{ text }</p>
            <input onChange={ e => setText(e.target.value) } data-testid='input' />
          </React.Fragment>
        );
      };
      const Form = routine(function (render) {
        render(
          <form>
            <Input />
          </form>
        );
      });

      const { getByTestId, getByText } = render(<Form />);

      fireEvent.change(getByTestId('input'), { target: { value: 'foobar' } });
      expect(getByText('foobar')).toBeDefined();
    });
  });
});

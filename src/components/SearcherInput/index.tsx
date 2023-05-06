import React, { ChangeEvent, FocusEvent } from 'react';
import './Searcher.css';

interface SearcherInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus: (e: FocusEvent<HTMLInputElement, Element>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement, Element>) => void;
}

export const SearcherInput = ({
  value,
  onChange,
  onFocus,
  onBlur,
}: SearcherInputProps) => (
    <input
      className='searcher--input'
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder='Look for something amazing'
    />
)
import React, {MouseEvent} from 'react';
import './AutoCompletionOptions.css';

interface AutocompletionOptionsProps {
  options: string[];
  searchValue: string;
  onAutocompletionClick: (option: string) => void;
  onMouseDown: (e: MouseEvent<HTMLLIElement>) => void;
}

export const AutocompletionOptions = ({
  options,
  searchValue,
  onAutocompletionClick,
  onMouseDown,
}: AutocompletionOptionsProps) => {
  const highlightMatchingText = (searchValue: string, option: string): any => {
    const regex = new RegExp(searchValue.toLowerCase());
    return option.split(regex).map((textPart, index) => (
      index > 0 ? [<span key={index} className="highlight">{searchValue}</span>, textPart] : textPart
    ))
  }

  return (
    <ul className={'autocompletion--list'}>
      {options.map((option) => {
        return (
        <li
          className={'autocompletion--list-item'}
          onClick={() => onAutocompletionClick(option)}
          key={option}
          onMouseDown={onMouseDown}
        >
          <div>
            {highlightMatchingText(searchValue, option)}
          </div>
        </li>
      )})}
    </ul>
  )
}

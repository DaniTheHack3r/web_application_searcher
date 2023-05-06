import React, { ChangeEvent, useState } from 'react';
import { SearcherInput } from './components/SearcherInput';
import { useAutocompletion } from './hooks/useAutocompletion';
import { AutocompletionOptions } from './components/AutoCompletionOptions';
import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [preventBlur, setPreventBlur] = useState(false);

  /* The options are not filtered in frontend as this is not a good practice in most cases.
   * For this case I made an api provider capable of making requests called src/services/apiServiceProvider.ts and a
   * hook called src/hooks/useAutocompletion.ts that sends the searchValue as a demostration of a correct way to leave
   * this responsability to the backend.
  */

  const {autocompleteOptions} = useAutocompletion(searchValue);

  // A debounce function would improve the performance and avoid overwhelming the api
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputOnFocus = () => {
    setIsInputFocused(true);
  }

  const handleInputOnBlur = () => {
    if(!preventBlur) {
      setIsInputFocused(false);
    }
  }

  const handleAutocompletionClick = (option: string) => {
    setSearchValue(option);
    setIsInputFocused(false);
    setPreventBlur(false);
  };

  const handleAutocompleteItemMouseDown = () => {
    setPreventBlur(true);
  }

  return (
    <div className={'app-layout'}>
      <div className={'searcher-wrapper'}>
        <SearcherInput 
          value={searchValue} 
          onChange={handleOnChange} 
          onFocus={handleInputOnFocus}
          onBlur={handleInputOnBlur}
        />
        {(isInputFocused && searchValue && autocompleteOptions.length > 0) && (
          <AutocompletionOptions
            onMouseDown={handleAutocompleteItemMouseDown}
            onAutocompletionClick={handleAutocompletionClick}
            searchValue={searchValue}
            options={autocompleteOptions}
          />
        )}
      </div>
    </div>
  )
}
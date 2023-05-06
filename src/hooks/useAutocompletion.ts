import { useEffect, useState } from "react"
import { apiServiceProvider } from "../services/apiServiceProvider";

const GET_AUTOCOMPLETE_OPTIONS_ENDPOINT = '/searcher/autocomplete-options';

interface UseAutocompletionReturnValue {
  autocompleteOptions: string[];
}

export const useAutocompletion = (searchValue: string): UseAutocompletionReturnValue => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const {get} = apiServiceProvider();

  const fetchAutocompleteOptions = async (searchValue: string) => {
    try {
      const data = await get(`${GET_AUTOCOMPLETE_OPTIONS_ENDPOINT}?search=${searchValue}`);
      setAutocompleteOptions(data);
    } catch (error: any) {
      console.error('error in file useAutocompletion', error.stack);
      setAutocompleteOptions([]);
    }
  }
  
  useEffect(() => {
    fetchAutocompleteOptions(searchValue);
  }, [searchValue]);

  return {
    autocompleteOptions,
  };
}
interface ApiServiceProvider {
  get: (url: string) => Promise<string[]>;
}

interface Options {
  headers?: {
    'Content-Type': string;
    Accept: string;
  };
  body?: any;
}

const callApi = async (endpoint: string, options: Options = {}): Promise<string[]> => {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  const response = await fetch(endpoint, options);
  if(response.status >= 400 && response.status < 500) {
    throw new Error('Bad Request');
  }

  if(response.status >= 500) {
    throw new Error('Internal Server Error');
  }

  const data = await response.json();

  return data;
}

export const apiServiceProvider = (): ApiServiceProvider => {
  const get = (url: string): Promise<string[]> => {
    return callApi(url);
  }

  return {
    get,
  }
}
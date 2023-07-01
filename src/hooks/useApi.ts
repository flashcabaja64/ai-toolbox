import { useState } from 'react';

export const useApi = (api:Function) => {
  const [response, setResponse] = useState({
    data: "",
    loading: false,
    error: null
  })

  const inferenceAPI = () => {
    setResponse({
      data: "",
      loading: true,
      error: null
    })

    api()
      .then((res: any) => {
        let blob = URL.createObjectURL(res)
        setResponse({
          ...response,
          data: blob,
          loading: false,
        })
      })
      .catch((err: any) => {
        setResponse({
          ...response,
          loading: false,
          error: err
        })
      })
  }

  return [response, inferenceAPI] as const
}
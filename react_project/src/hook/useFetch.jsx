import {useState} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)  
         
    return {
        data, loading, error
    }
  };

  export default useFetch
  
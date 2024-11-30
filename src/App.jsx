import { useState, useEffect } from 'react';
import FormComponent from './components/FormComponent';
import ListComponent from './components/ListComponent';
 

const App = () => {
  const [queries, setQueries] = useState([]); 
  
  // LocalStorage에서 초기 데이터 불러오기
  useEffect(() => {
    const getQueries = JSON.parse(localStorage.getItem('queries'));
    console.log('get:', getQueries)
    if(getQueries) {
      setQueries(getQueries);
    }
  }, []);
   
  // 데이터가 변경될 때 LocalStorage에 저장
  useEffect(() => {
    if( queries.length !== 0) {
      localStorage.setItem('queries', JSON.stringify(queries));
    }
  }, [queries]);

  const addQuery = (query) => {
    setQueries([...queries, query]);
  };

  return (
    <div>
      <h1>문의하기</h1>
      <FormComponent addQuery={addQuery} />
      <ListComponent queries={queries} />
    </div>
  );
};

export default App;

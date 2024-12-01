import { useState } from "react";
import PropTypes from 'prop-types';

 
const FormComponent = ({ addQuery }) => {
    FormComponent.propTypes = {
        addQuery: PropTypes.func
    };
    
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addQuery({ id: Date.now(), content: text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="문의 내용을 입력하세요"
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default FormComponent;
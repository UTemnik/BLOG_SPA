import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { commentContext } from './../../../context/commentContext';
import s from './commentForm.less';

const CommentForm = () => {
 const {value, onChange} = useContext(commentContext);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <textarea className={s.input} value={value} onChange={handleChange} />
      <button type="submit" className={s.btn}>
        Комментировать
      </button>
    </form>
  );
};

export default CommentForm;

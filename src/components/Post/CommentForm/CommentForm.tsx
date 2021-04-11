import React, { ChangeEvent, FormEvent, useContext } from 'react';
import { commentContext } from './../../../context/commentContext';
import s from './commentForm.less';
import { CommentPanel } from './CommentPanel/CommentPanel';

const CommentForm = () => {
  const { value, onChange } = useContext(commentContext);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <textarea
        className={s.textarea}
        value={value}
        onChange={handleChange}
        placeholder="Константин, оставьте ваш комментарий"
      />
      <div className={s.options}>
        <CommentPanel />
        <button type="submit" className={s.btn}>
          Комментировать
        </button>
      </div>
    </form>
  );
};

export default CommentForm;

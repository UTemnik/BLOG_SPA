import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import s from './commentForm.less';
import { CommentPanel } from './CommentPanel/CommentPanel';

interface ICommentForm {
  name: string;
}

const CommentForm = ({ name }: ICommentForm) => {
  const [value, onChange] = name
    ? useState(name)
    : useState('Оставьте ваш комментарий!');

  const myRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event?.target.value);
    console.log(myRef.current?.value);
  };

  useEffect(() => {
    if (myRef.current) {
      myRef.current.focus();
      onChange(name);
    }
  }, [name]);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.field}>
        <textarea
          ref={myRef}
          className={s.textarea}
          onChange={handleChange}
          value={value}
        />
      </div>

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

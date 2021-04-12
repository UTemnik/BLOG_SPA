import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useRef,
} from 'react';
import { commentContext } from './../../../context/commentContext';
import s from './commentForm.less';
import { CommentPanel } from './CommentPanel/CommentPanel';

const CommentForm = () => {
  const { value, onChange } = useContext(commentContext);
  const name = 'Костик, ';
  const myRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  // контролируемый компонент
  /*  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
    console.log(event.target.value);
  };*/

  /*  useEffect(() => {
    if (myRef.current) {
      myRef.current?.focus();
    }
  });*/

  // НЕконтролируемый компонент
  const handleChange = () => {
    console.log(myRef.current?.value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.field}>
        <textarea
          ref={myRef}
          className={s.textarea}
          onChange={handleChange}
          value={value}
        />
        <label className={s.label}>
          <span>{name}</span> оставьте ваш комментарий
        </label>
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

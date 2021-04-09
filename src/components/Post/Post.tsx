import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import CommentForm from './CommentForm/CommentForm';
import s from './post.less';

interface IPost {
  setModalOpened?: () => void;
}

const Post = ({ setModalOpened }: IPost) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        setModalOpened?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={s.container}>
      <div className={s.post} ref={ref}>
        <button className={s.close}></button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          hic iure dolor dolorum voluptate tenetur vero aperiam et, omnis ex
          maiores facilis eveniet nam laboriosam laborum vitae atque magnam
          dolores? Cupiditate commodi repellendus voluptate nostrum suscipit
          voluptatem quam ipsum fugit eaque adipisci porro nesciunt laudantium
          dicta in vero, tenetur impedit ullam dolorem amet. Qui, dolores! Fuga,
          recusandae. Officiis tempore aspernatur quae quis delectus possimus
          omnis eveniet itaque unde. Nulla ipsum, dolor voluptate quos ducimus
          dignissimos pariatur accusamus ipsam vel ut officia quis harum.
          Provident fuga unde explicabo quidem numquam natus, id cupiditate iste
          asperiores a velit eaque doloribus saepe necessitatibus, suscipit nemo
          neque aspernatur odio. Ipsa dicta aspernatur esse laboriosam similique
          at voluptates? Debitis harum totam expedita blanditiis repellendus
        </p>
        <CommentForm />
      </div>
    </div>,
    node
  );
};

export default Post;

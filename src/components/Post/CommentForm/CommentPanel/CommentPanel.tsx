import React from 'react';
import { EIcons, Icon } from '../../../../common/Icons/Icon';
import s from './commentPanel.less';

export const CommentPanel = () => {
  return (
    <ul className={s.panel}>
      <li>
        <Icon name={EIcons.insert} size={[20, 12]} />
      </li>
      <li>
        <Icon name={EIcons.insertImg} size={[18, 18]} />
      </li>
      <li>
        <Icon name={EIcons.document} size={[16, 20]} />
      </li>
      <li>
        <Icon name={EIcons.download} size={[14, 17]} />
      </li>
      <li>
        <Icon name={EIcons.user} size={[18, 18]} />
      </li>
      <li>
        <Icon name={EIcons.repeat} size={[22, 16]} />
      </li>
      <li>
        <Icon name={EIcons.sw} size={[20, 10]} />
      </li>
      <li>
        <Icon name={EIcons.audio} size={[20, 18]} />
      </li>
      <li>
        <Icon name={EIcons.quote} size={[20, 20]} />
      </li>
      <li>
        <Icon name={EIcons.edit} size={[16, 16]} />
      </li>
      <li>
        <Icon name={EIcons.highlight} size={[16, 18]} />
      </li>
      <li>
        <Icon name={EIcons.pdf} size={[20, 20]} />
      </li>
    </ul>
  );
}
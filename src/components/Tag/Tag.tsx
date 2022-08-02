import React from 'react';
import TagStyles from './TagStyles';

type DataProps = {
  tag: string,
}

function Tag({ tag }: DataProps) {
  return <TagStyles>{tag}</TagStyles>;
}

export default Tag;

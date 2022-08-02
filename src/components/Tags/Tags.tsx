import React from 'react';
import Tag from '../Tag/Tag';
import TagsStyles from './TagsStyles';

type TagsProps = {
  tags: string[]
}

function Tags({ tags }: TagsProps) {
  return (
    <TagsStyles>
      {tags?.map((tag) => (
        <Tag key={tag.toString()} tag={tag} />
      ))}
    </TagsStyles>
  );
}

export default Tags;

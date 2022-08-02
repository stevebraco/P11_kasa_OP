import React from 'react';
import { HostImg, HostName, HostStyles } from './HostStyles';

type HostProp = {
    name: string,
    picture: string
}

function Host({ name, picture }: HostProp) {
  return (
    <HostStyles>
      <HostName>
        {name}
      </HostName>
      <HostImg src={picture} alt={name} />
    </HostStyles>
  );
}

export default Host;

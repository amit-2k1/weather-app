import React, { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react';

export default function SVGIcon({ iconName, description, width, height }) {
  const [icon, setIcon] = useState('');

  const getIcon = async () => {
    const importedIcon = await import(`./weather-svg/${iconName}.svg`);
    setIcon(importedIcon.default);
  };

  useEffect(() => {
    getIcon();
  }, []);

  return (
    <>
      <Image
        src={icon}
        w={width + 'px'}
        h={height + 'px'}
        mb={4}
        alt={description}
      />
    </>
  );
}

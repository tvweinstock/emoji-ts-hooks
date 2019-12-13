import React from 'react';
import { Emoji } from '../../types';

interface EmojiResultProps {
  emoji: Emoji;
  vendor?: string;
}

const EmojiResult = ({ emoji, vendor }: EmojiResultProps) => {
  const previewImg =
    emoji.vendors.find(v => v.name === vendor) || emoji.vendors[0];
  return (
    <React.Fragment>
      <img
        className="h-12"
        src={previewImg.imageUrl}
        alt={emoji.name}
        title={emoji.name}
      />
      {/* <p>{emoji.name}</p> */}
    </React.Fragment>
  );
};

export default EmojiResult;

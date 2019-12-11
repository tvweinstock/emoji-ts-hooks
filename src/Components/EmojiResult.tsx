import React from 'react';
import { Emoji } from '../../types';

interface EmojiResultProps {
  emoji: Emoji;
  vendor?: string;
}

const EmojiResult = ({ emoji, vendor = 'Apple' }: EmojiResultProps) => {
  const previewImg = emoji.vendors.find(v => v.name === vendor) || {
    imageUrl: '',
    name: 'placeholder',
  };
  return (
    <React.Fragment>
      <img
        className="h-8 shadow-lg rounded-full"
        src={previewImg.imageUrl}
        alt={emoji.name}
      />
      <p>{emoji.name}</p>
    </React.Fragment>
  );
};

export default EmojiResult;

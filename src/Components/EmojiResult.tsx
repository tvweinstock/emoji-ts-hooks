import React from 'react';
import { Emoji } from '../../types';

interface EmojiResultProps {
  emoji: Emoji;
  vendor?: string;
}

const EmojiResult = ({ emoji, vendor = 'Apple' }: EmojiResultProps) => {
  return (
    <div>
      <img src="" alt="" />
      <p>{emoji.name}</p>
    </div>
  );
};

export default EmojiResult;

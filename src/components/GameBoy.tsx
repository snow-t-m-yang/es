'use client';

import Image from 'next/image';
import { useState } from 'react';
import { gameBoyBlue, gameBoyRed } from '../../public/cp2';

function GameBoy() {
  const [isRedButtonPressed, setIsRedButtonPressed] = useState<boolean>(true);

  const handleIsRedButtonPressed = () => {
    setIsRedButtonPressed(!isRedButtonPressed);
  };

  return (
    <section
      id="遊戲開發"
      className="grid min-h-screen mt-32 place-content-center"
    >
      <div className="relative">
        <Image
          src={isRedButtonPressed ? gameBoyRed : gameBoyBlue}
          width={200}
          height={200}
          alt="A gameboy"
          placeholder="blur"
        />
        <button
          className="absolute border bottom-[87px] h-9 w-9 rounded-full  right-[56px]"
          onClick={handleIsRedButtonPressed}
          disabled={isRedButtonPressed}
        />
        <button
          className="absolute border bottom-[73px] h-9 w-9 rounded-full  right-[18px]"
          onClick={handleIsRedButtonPressed}
          disabled={!isRedButtonPressed}
        />
      </div>
    </section>
  );
}

export default GameBoy;

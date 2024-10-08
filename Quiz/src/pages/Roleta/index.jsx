import React, { useRef, useEffect, useState } from 'react';
import img from '../../assets/premio1.png'
const prizes = [
  { name: "Prêmio 1", image: img},
  { name: "Prêmio 2", image: img},
  { name: "Prêmio 3", image: img},
  { name: "Prêmio 4", image: img},
  { name: "Prêmio 5", image: img},
  { name: "Prêmio 6", image: img},
  
];

const wheelColors = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD', '#3357FF'];

const getRandomSpin = () => Math.floor(Math.random() * 360 + 720);

const Roulette = () => {
  const canvasRef = useRef(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const drawWheel = (ctx, images) => {
    const numPrizes = prizes.length;
    const angle = (2 * Math.PI) / numPrizes;

    for (let i = 0; i < numPrizes; i++) {
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, angle * i, angle * (i + 1));
      ctx.fillStyle = wheelColors[i % wheelColors.length];
      ctx.fill();
      ctx.save();
      ctx.translate(150, 150); // Move o ponto de origem para o centro da roleta
      ctx.rotate(angle * i + angle / 2); // Rota a imagem corretamente para alinhar ao segmento
      const img = images[i];
      
      // Garantir que a imagem seja desenhada no centro da fatia
      if (img.complete) {
        ctx.drawImage(img, -40, -110, 80, 80); // Ajustar a posição para o centro
      } else {
        img.onload = () => {
          ctx.drawImage(img, -40, -110, 80, 80); // Ajustar a posição para o centro
        };
      }

      ctx.restore();
    }
  };

  const spinWheel = () => {
    setSpinning(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const images = prizes.map((prize) => {
      const img = new Image();
      img.src = prize.image;
      return img;
    });

    drawWheel(ctx, images);

    const spin = getRandomSpin();
    const totalRotation = spin + 360 * 5;

    let currentAngle = 0;
    const spinAnimation = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWheel(ctx, images);
      ctx.save();
      ctx.translate(150, 150);
      ctx.rotate((currentAngle * Math.PI) / 180);
      ctx.translate(-150, -150);
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      currentAngle += 15;

      if (currentAngle >= totalRotation) {
        clearInterval(spinAnimation);
        setSpinning(false);
        const finalAngle = spin % 360;
        const prizeIndex = Math.floor(finalAngle / (360 / prizes.length));
        setResult(prizes[prizeIndex].name);
      }
    }, 30);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const images = prizes.map((prize) => {
      const img = new Image();
      img.src = prize.image;
      return img;
    });

    drawWheel(ctx, images);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <div className="relative mb-4">
        <canvas ref={canvasRef} className="w-full max-w-xs md:max-w-md lg:max-w-lg" height={300} />
        <div className="absolute" style={{ left: '50%', top: '-20px', transform: 'translateX(-50%)' }}>
          <div style={{ width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '10px solid red' }} />
        </div>
      </div>
      <button
        onClick={spinWheel}
        className={`mt-4 px-6 py-3 rounded-lg bg-blue-500 text-white transition duration-300 ${spinning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        disabled={spinning}
      >
        {spinning ? 'Girando...' : 'Girar a Roleta'}
      </button>
      {result && <h2 className="mt-4 text-xl text-white">{`Você ganhou: ${result}`}</h2>}
    </div>
  );
};

export default Roulette;

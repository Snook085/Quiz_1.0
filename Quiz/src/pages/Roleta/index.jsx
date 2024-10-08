import React, { useRef, useEffect, useState } from 'react';

const prizes = [
  "Prêmio 1: $10",
  "Prêmio 2: $20",
  "Prêmio 3: $30",
  "Prêmio 4: $50",
  "Prêmio 5: $100",
  "Prêmio 6: $200",
];

const wheelColors = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD', '#3357FF'];

const getRandomSpin = () => Math.floor(Math.random() * 360 + 720);

const Roulette = () => {
  const canvasRef = useRef(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState('');

  const drawWheel = (ctx) => {
    const numPrizes = prizes.length;
    const angle = (2 * Math.PI) / numPrizes;

    for (let i = 0; i < numPrizes; i++) {
      ctx.beginPath();
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, angle * i, angle * (i + 1));
      ctx.fillStyle = wheelColors[i % wheelColors.length];
      ctx.fill();

      // Desenhar o texto centralizado dentro da fatia
      ctx.save();
      ctx.translate(150, 150);
      ctx.rotate(angle * i + angle / 2); // Rotaciona para o meio da fatia
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px Arial'; // Estilo da fonte
      ctx.textAlign = 'right'; // Alinha o texto à direita
      ctx.fillText(prizes[i], 140, 5); // Ajuste a posição conforme necessário
      ctx.restore();
    }
  };

  const spinWheel = () => {
    setSpinning(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawWheel(ctx);

    const spin = getRandomSpin();
    const totalRotation = spin + 360 * 5;

    let currentAngle = 0;
    const spinAnimation = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWheel(ctx);
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
        setResult(prizes[prizeIndex]);
      }
    }, 30);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.font = 'bold 16px Arial';
    drawWheel(ctx);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 p-4">
      <div className="relative mb-4">
        <canvas ref={canvasRef} width={300} height={300} className="mx-auto" />
        <div className="absolute" style={{ left: '150px', top: '-20px', transform: 'translateX(-50%)' }}>
          <div style={{ width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderTop: '20px solid red' }} />
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

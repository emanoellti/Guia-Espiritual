import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Define o tempo final da oferta (7 dias a partir de agora)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 px-6 rounded-2xl shadow-lg animate-pulse">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Clock className="w-5 h-5" />
        <span className="font-crimson text-lg font-semibold">Oferta por Tempo Limitado</span>
      </div>
      
      <div className="flex justify-center gap-4">
        <div className="text-center">
          <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
            <div className="font-playfair text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="font-crimson text-xs uppercase">Dias</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
            <div className="font-playfair text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="font-crimson text-xs uppercase">Horas</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
            <div className="font-playfair text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="font-crimson text-xs uppercase">Min</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white/20 rounded-lg px-3 py-2 min-w-[60px]">
            <div className="font-playfair text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="font-crimson text-xs uppercase">Seg</div>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-3 font-crimson text-sm opacity-90">
        Não perca esta oportunidade única de transformação!
      </p>
    </div>
  );
};

export default CountdownTimer;
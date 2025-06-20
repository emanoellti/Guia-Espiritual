import React from 'react';
import { Heart } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-blush to-ivory overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-rose-soft/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blush/40 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Textura floral sutil */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-rose-soft to-transparent"></div>
      
      <div className="container mx-auto px-6 py-20 flex flex-col items-center min-h-screen relative z-10">
        {/* Imagem da capa do livro - centralizada e em destaque */}
        <div className="mb-12 animate-fade-in">
          <div className="relative">
            <img 
              src="/ChatGPT Image 2 de jun. de 2025, 18_21_39 (2).png" 
              alt="O Poder da Mulher que Ouve a Voz de Deus - Capa do Livro"
              className="w-80 h-auto mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            {/* Efeito de brilho sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Cronômetro de contagem regressiva */}
        <div className="mb-12 w-full max-w-md animate-fade-up">
          <CountdownTimer />
        </div>
        
        <div className="text-center mb-12 lg:mb-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="mb-6">
            <Heart className="w-8 h-8 text-rose-400 mx-auto mb-4 animate-pulse" />
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-brown-soft leading-tight mb-6">
            Você não chegou aqui por{' '}
            <span className="italic text-rose-600">acaso</span>.
            <br />
            Essa voz ainda está{' '}
            <span className="italic text-rose-600">te chamando</span>.
          </h1>
          
          <p className="font-crimson text-lg md:text-xl text-gray-warm mb-8 leading-relaxed max-w-4xl mx-auto">
            No silêncio do seu coração, no cansaço da sua alma, 
            há um sussurro gentil esperando para ser ouvido novamente. Este não é apenas mais um livro—
            é um convite de volta à intimidade com Aquele que conhece o seu nome.
          </p>
          
          <div className="flex justify-center">
            <a
              href="https://pay.kiwify.com.br/jZO0fDx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl text-center transform hover:scale-105"
            >
              Baixar eBook Agora
            </a>
          </div>

          {/* Garantia e preço especial */}
          <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto shadow-lg">
            <p className="font-playfair text-2xl text-brown-soft mb-2">
              <span className="line-through text-gray-500 text-lg">R$ 79,90</span>
              {' '}R$ 16,99
            </p>
            <p className="font-crimson text-sm text-gray-warm">
              Garantia de 30 dias • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
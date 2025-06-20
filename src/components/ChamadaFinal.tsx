import React from 'react';
import { Download, Heart } from 'lucide-react';

const ChamadaFinal = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-cream to-gold/20 relative overflow-hidden">
      {/* Elementos decorativos de fundo - pombas e efeito de raios de luz */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-rose-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gold/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-blush/50 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Efeito de raios de luz */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-gold/30 to-transparent rotate-12"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-rose-soft/20 to-transparent -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <Heart className="w-16 h-16 text-rose-500 mx-auto mb-8 animate-pulse" />
            <h2 className="font-playfair text-4xl md:text-6xl text-brown-soft mb-8 leading-tight">
              Você está pronta para voltar a ouvir{' '}
              <span className="italic text-rose-600">a voz de Deus</span>?
            </h2>
            <p className="font-crimson text-xl md:text-2xl text-gray-warm leading-relaxed mb-8">
              Este momento—agora mesmo—é seu convite de volta à intimidade. 
              Não deixe outro dia passar em silêncio quando a conversa te espera.
            </p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="font-playfair text-2xl md:text-3xl text-brown-soft mb-4">
                  O Que Você Recebe Hoje:
                </h3>
                <ul className="space-y-3 font-crimson text-gray-warm">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    12 capítulos de histórias bíblicas de cura
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    Perguntas de reflexão pessoal para cada capítulo
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    Guias práticos de oração e exercícios
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-200 rounded-full flex items-center justify-center">
                      <Heart className="w-3 h-3 text-rose-600" />
                    </div>
                    Bônus: Coleção de meditações bíblicas
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-rose-100 to-blush rounded-2xl p-6 mb-6">
                  <p className="font-playfair text-3xl text-brown-soft mb-2">R$ 16,99</p>
                  <p className="font-crimson text-gray-warm line-through mb-2">R$ 79,90</p>
                  <p className="font-crimson text-rose-600 font-semibold">Oferta por Tempo Limitado</p>
                </div>
                
                <p className="font-crimson text-sm text-gray-warm italic mb-6">
                  Garantia de 30 dias. 
                  A cura do seu coração vale o investimento.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-12">
            <a
              href="https://pay.kiwify.com.br/jZO0fDx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-12 py-5 rounded-full font-crimson text-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
            >
              <Download className="w-6 h-6" />
              Quero meu exemplar
            </a>
          </div>
          
          <div className="bg-rose-50/50 rounded-2xl p-8">
            <p className="font-playfair text-2xl text-brown-soft italic mb-4">
              "A voz que chamou seu nome antes de você nascer 
              ainda está chamando hoje."
            </p>
            <p className="font-crimson text-gray-warm">
              Não espere pelo momento perfeito. Ele tem esperado por este.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChamadaFinal;
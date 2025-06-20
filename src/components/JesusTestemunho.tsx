import React from 'react';
import { Heart } from 'lucide-react';

const JesusTestemunho = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cream to-ivory relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gold rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-rose-soft rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Imagem centralizada */}
          <div className="mb-12 animate-fade-up">
            <div className="relative inline-block">
              <img 
                src="/3.PNG" 
                alt="Jesus não evitou sua história - Ele tocou nas feridas e fez do passado um testemunho"
                className="w-full max-w-2xl h-auto mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay sutil para destacar a imagem */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-2xl"></div>
            </div>
          </div>
          
          {/* Frase centralizada */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
              <Heart className="w-12 h-12 text-rose-500 mx-auto mb-6 animate-pulse" />
              
              <blockquote className="font-playfair text-2xl md:text-4xl text-brown-soft italic leading-relaxed mb-6">
                "Jesus não evitou sua história. Ele tocou nas feridas e fez do passado um testemunho."
              </blockquote>
              
              <div className="w-24 h-1 bg-rose-300 mx-auto mb-6"></div>
              
              <p className="font-crimson text-lg md:text-xl text-gray-warm leading-relaxed">
                Suas cicatrizes não são motivo de vergonha — elas são prova de que você sobreviveu. 
                E nas mãos de Jesus, cada ferida se torna uma fonte de cura para outros corações quebrantados.
              </p>
            </div>
          </div>
          
          {/* Seção adicional com reflexão */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="bg-rose-50/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-lg">
              <p className="font-crimson text-gray-warm leading-relaxed mb-4">
                Ele não veio para apagar sua história, mas para reescrevê-la. 
                Não para esconder suas lágrimas, mas para transformá-las em pérolas de sabedoria.
              </p>
              <p className="font-playfair text-xl text-rose-600 italic">
                Seu passado não define seu futuro — ele o prepara para ele.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JesusTestemunho;
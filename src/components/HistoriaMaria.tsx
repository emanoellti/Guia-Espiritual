import React from 'react';
import { Heart, BookOpen } from 'lucide-react';

const HistoriaMaria = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ivory via-cream to-blush relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-rose-soft rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Imagem de fundo do lado esquerdo */}
          <div className="lg:w-1/2 animate-fade-up">
            <div className="relative">
              <img 
                src="/2.PNG" 
                alt="História de Maria - A jovem que disse sim ao invisível"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay sutil para melhor legibilidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Texto do lado direito */}
          <div className="lg:w-1/2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="mb-6">
                <Heart className="w-8 h-8 text-rose-500 mb-4 animate-pulse" />
                <h2 className="font-playfair text-3xl md:text-4xl text-brown-soft mb-4 leading-tight">
                  História de Maria
                </h2>
                <h3 className="font-playfair text-xl md:text-2xl text-rose-600 italic mb-6">
                  A jovem que disse sim ao invisível
                </h3>
              </div>
              
              <div className="space-y-6">
                <blockquote className="font-crimson text-lg md:text-xl text-gray-warm italic leading-relaxed border-l-4 border-rose-300 pl-6">
                  "Alegra-te, mulher favorecida, o Senhor está contigo!
                  Não temas o desconhecido, pois tu conceberás a promessa eterna..."
                </blockquote>
                
                <p className="font-crimson text-sm text-rose-600 font-semibold">
                  (Lucas 1:28–35, 37)
                </p>
                
                <div className="bg-rose-50 rounded-2xl p-6">
                  <p className="font-crimson text-gray-warm leading-relaxed mb-4">
                    Maria era uma jovem comum, sem títulos ou posição social de destaque. 
                    Mas foi justamente sua simplicidade que atraiu o olhar do céu.
                  </p>
                  <p className="font-crimson text-gray-warm leading-relaxed mb-4">
                    Deus não buscava grandiosidade — Ele buscava um ventre rendido 
                    e um coração disposto.
                  </p>
                  <p className="font-crimson text-gray-warm leading-relaxed">
                    E então, um dia comum foi interrompido pela eternidade. 
                    O anjo Gabriel apareceu com uma mensagem que mudaria tudo.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center mt-6">
  <a
    href="https://pay.kiwify.com.br/jZO0fDx"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
  >
    📖 Leia a História Completa
  </a>
</div>


                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Citação inspiradora no final */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
            <p className="font-playfair text-2xl md:text-3xl text-brown-soft italic mb-4 leading-relaxed">
              "Ela disse sim antes de entender, e o entendimento veio no sim."
            </p>
            <p className="font-crimson text-gray-warm">
              Às vezes, a fé precede a compreensão. 
              Às vezes, o milagre nasce na entrega, não na certeza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriaMaria;
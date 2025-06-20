import React from 'react';
import { BookOpen, Quote, Heart } from 'lucide-react';

const SobreLivro = () => {
  return (
    <section className="py-20 bg-ivory relative">
      {/* Textura de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-rose-soft rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gold rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Quote className="w-12 h-12 text-rose-400 mx-auto mb-6 animate-pulse" />
          <blockquote className="font-playfair text-2xl md:text-3xl text-brown-soft italic leading-relaxed mb-8">
            "Este livro foi escrito entre lágrimas e orações. 
            Não para impressionar, mas para alcançar você."
          </blockquote>
          <p className="font-crimson text-lg text-gray-warm leading-relaxed">
            Nascido da minha própria estação de secura espiritual, quando a voz de Deus parecia distante 
            e minhas orações ecoavam no vazio. Esta não é teologia de sala de aula—
            é esperança do deserto, compartilhada de coração para coração.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 animate-fade-up">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-rose-100 to-blush rounded-lg shadow-xl mx-auto overflow-hidden">
                {/* Mockup da capa do livro */}
                <div className="absolute inset-4 bg-white rounded-lg flex flex-col justify-center items-center p-6">
                  <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-rose-600" />
                  </div>
                  <h4 className="font-playfair text-xl text-brown-soft mb-3 text-center">
                    O Poder de Ouvir a Voz de Deus
                  </h4>
                  <div className="w-full h-px bg-rose-200 mb-3"></div>
                  <p className="font-crimson text-xs text-gray-warm text-center">
                    Um reencontro com a voz que cura
                    <br /><br />
                    12 Capítulos de Esperança
                    <br />
                    Histórias Bíblicas de Mulheres
                    <br />
                    Perguntas de Reflexão Pessoal
                    <br />
                    Guias de Oração
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair text-3xl md:text-4xl text-brown-soft mb-6">
              O Que Você Vai Descobrir
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-crimson text-lg font-semibold text-brown-soft mb-2">
                    Histórias que Espelham Seu Coração
                  </h4>
                  <p className="font-crimson text-gray-warm">
                    Caminhe ao lado de Ana em sua esterilidade, Maria em sua entrega, 
                    e Ester em sua coragem. As histórias delas se tornam a sua história.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-crimson text-lg font-semibold text-brown-soft mb-2">
                    Passos Práticos para a Intimidade
                  </h4>
                  <p className="font-crimson text-gray-warm">
                    Não apenas inspiração, mas convite. Cada capítulo inclui 
                    exercícios gentis para ajudá-la a cultivar a oração de escuta.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Quote className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-crimson text-lg font-semibold text-brown-soft mb-2">
                    Escrituras que Falam
                  </h4>
                  <p className="font-crimson text-gray-warm">
                    Versículos que me carregaram—e vão carregar você também. 
                    A Bíblia ganha vida quando ouvida através do coração de uma mulher.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="https://pay.kiwify.com.br/jZO0fDx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-brown-soft px-8 py-4 rounded-full font-crimson text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Adquirir o Livro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreLivro;
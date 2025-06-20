import React from 'react';
import { Heart, Users, Home } from 'lucide-react';

const ParaQuemE = () => {
  const publicoAlvo = [
    {
      icon: Heart,
      title: "Mulheres que se sentem esgotadas emocionalmente",
      description: "Você carregou os fardos de todos, mas quem carrega os seus? Está tudo bem estar cansada. Este livro te encontra nesse espaço sagrado do esgotamento."
    },
    {
      icon: Home,
      title: "Filhas que se afastaram de Deus e querem voltar",
      description: "Você se lembra de um tempo quando a oração parecia conversa, não monólogo. Essa intimidade pode retornar—e este livro vai te mostrar como."
    },
    {
      icon: Users,
      title: "Jovens, mães ou esposas que desejam ouvir a direção do céu",
      description: "No caos de cuidar dos outros, você perdeu de vista suas próprias necessidades espirituais. Você também importa, e Deus tem palavras específicas só para você."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-soft via-cream to-blush relative">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gold rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-rose-soft rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl text-brown-soft mb-6">
            Este Livro é para{' '}
            <span className="italic text-rose-600">Você</span>
          </h2>
          <p className="font-crimson text-xl text-gray-warm max-w-3xl mx-auto leading-relaxed">
            Se você se encontrou aqui, é porque seu coração reconhece uma fome mais profunda. 
            Você não está quebrada—você está despertando.
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {publicoAlvo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-rose-600" />
                </div>
                <h3 className="font-playfair text-xl text-brown-soft mb-4 text-center leading-tight">
                  {item.title}
                </h3>
                <p className="font-crimson text-gray-warm text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <p className="font-playfair text-2xl text-brown-soft italic mb-4">
              "Seja você jovem ou madura, solteira ou casada, 
              seu coração conhece o som da voz Dele."
            </p>
            <p className="font-crimson text-gray-warm">
              Este livro te encontra exatamente onde você está, sem julgamento, 
              apenas com amor e a promessa de que Ele ainda está falando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuemE;
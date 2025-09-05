import PillNav from '@/components/PillNav';
import TechIcon from '@/components/TechIcon';
import TypeWriter from '@/components/TypeWriter';
import SplitText from '@/components/SplitText';
import DarkVeil from '@/components/DarkVeil';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';
import { DOMINATED_TECHS, LEARNING_TECHS } from '@/constants/techs';

const Index = () => {
  return (
    <div className="min-h-screen">
      <PillNav />
      
      <section className="min-h-screen flex items-center justify-center pt-16 bg-black relative overflow-hidden">
        <DarkVeil 
          intensity="medium"
          animated={true}
          particles={true}
          className="z-10"
        />
        <div className="container mx-auto px-4 relative z-30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-end order-1 md:order-2 mt-4 md:mt-0">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 hero-glow animate-pulse-glow">
                  <img
                    src={profileImage}
                    alt="Thalles Fernandes de Lana"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
              </div>
            </div>

            <div className="text-center md:text-left order-2 md:order-1 text-white">
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-2xl font-medium mb-2 opacity-90">
                    <SplitText 
                      text="Olá, meu nome é"
                      animationType="fadeUp"
                      staggerDelay={50}
                      delay={300}
                    />
                  </h2>
                  <h1 className="text-5xl font-bold mb-4 gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                    <TypeWriter 
                      text="Thalles Fernandes de Lana"
                      speed={80}
                      delay={1000}
                    />
                  </h1>
                </div>
                
                <p className="text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl">
                  Sou desenvolvedor <span className="text-blue-600 font-semibold">Full Stack Pleno/Sênior</span> com mais de 5 anos de 
                  experiência em desenvolvimento web. Tenho sólida atuação no desenvolvimento de plataformas escaláveis, com foco em performance,
                  segurança, arquitetura de software e boas práticas de programação. Ao longo da carreira, participei de projetos de alto tráfego e
                  sistemas críticos, utilizando metodologias ágeis como Scrum e Kanban, versionamento com Git, integração contínua e padrões como
                  Clean Code e princípios SOLID. Possuo graduação em Análise e Desenvolvimento de Sistemas e pósgraduação em Engenharia de Software.
                  Estou sempre em busca de aprimorar meus conhecimentos em tecnologias modernas, frameworks atuais e soluções inovadoras que agreguem valor 
                  técnico e estratégico às empresas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 !mb-4">
                  <Button size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm" onClick={() => redirectToUrl('mail')}>
                    <Mail className="w-5 h-5 mr-2" />
                    Entre em contato
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm" onClick={() => redirectToUrl('linkedin')}>
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-sm" onClick={() => redirectToUrl('github')}>
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Tecnologias que domino
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {DOMINATED_TECHS.map((tech, index) => (
                <div
                  key={tech.name}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TechIcon name={tech.name} iconKey={tech.iconKey} level="mastered" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Tecnologias em desenvolvimento
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {LEARNING_TECHS.map((tech, index) => (
                <div
                  key={tech.name}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TechIcon name={tech.name} iconKey={tech.iconKey} level="learning" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black relative overflow-hidden">
        <DarkVeil 
          intensity="medium"
          animated={true}
          particles={true}
          className="z-10"
        />
        <div className="container mx-auto px-4 text-center relative z-30">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Entre em contato</h2>
            <p className="text-xl mb-8 opacity-90">
              Ficou interessado em trabalharmos juntos? Vamos conversar sobre seu próximo projeto!
            </p>
            <Button size="lg" className="bg-white text-button-color hover:bg-white/90 hover:bg-white/90 font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              <span>Vamos conversar!</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

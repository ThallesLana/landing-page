import DarkVeil from '@/components/DarkVeil';
import PillNav from '../components/PillNav';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '@/constants/projects';
import { redirectToUrl } from '@/constants/socialMedia';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <PillNav />
      
      <section className="pt-24 pb-12 relative overflow-hidden bg-black">
        <DarkVeil 
          intensity="medium"
          animated={true}
          particles={true}
          className="z-10"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-30 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Meus <span className="gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Projetos</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-slide-in">
            Explore alguns dos projetos que desenvolvi, demonstrando minhas habilidades 
            em desenvolvimento Full Stack e design de interfaces.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black relative overflow-hidden">
        <DarkVeil 
          intensity="medium"
          animated={true}
          particles={true}
          className="z-10"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-30">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Gostou dos projetos?</h2>
            <p className="text-xl mb-8 opacity-90">
              Estes são apenas alguns exemplos. Tenho outros projetos em desenvolvimento e sempre busco novos desafios!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-button-color hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => redirectToUrl('github')}>
                Ver todos no GitHub
              </button>
              <button 
              className="border border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => redirectToUrl('mail')}
              >
                Entre em contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
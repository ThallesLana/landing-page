import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project, ProjectStatus } from '@/types/project';

const STATUS_STYLES = {
  [ProjectStatus.COMPLETED]: 'bg-green-500/10 text-green-500 border-green-500/20',
  [ProjectStatus.IN_PROGRESS]: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  [ProjectStatus.PLANNED]: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
} as const;

const getStatusStyles = (status: ProjectStatus) => {
  return STATUS_STYLES[status] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
};

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, status }: Project) => {
  return (
    <Card className="glass-card hover:shadow-xl transition-all duration-300 group">
      {image && (
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex items-center justify-between pb-2">
          <span className="gradient-text">{title}</span>
          <span className={`px-3 py-1 text-xs font-medium rounded border ${getStatusStyles(status)}`}>{status}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {liveUrl && (
            <Button asChild size="sm" className="flex-1 bg-blue-500 hover:bg-blue-600 transition-colors">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Projeto
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 hover:bg-blue-600 transition-colors">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
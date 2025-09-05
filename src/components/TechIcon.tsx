import GitOriginalIcon from "react-devicons/git/original";
import Html5OriginalIcon from "react-devicons/html5/original";
import Css3OriginalIcon from "react-devicons/css3/original";
import JavascriptOriginalIcon from "react-devicons/javascript/original";
import TypescriptOriginalIcon from "react-devicons/typescript/original";
import MysqlOriginalIcon from "react-devicons/mysql/original";
import PostgresqlOriginalIcon from "react-devicons/postgresql/original";
import PhpOriginalIcon from "react-devicons/php/original";
import AngularOriginalIcon from "react-devicons/angular/original";
import ReactOriginalIcon from "react-devicons/react/original";
import NodejsOriginalIcon from "react-devicons/nodejs/original";
import PythonOriginalIcon from "react-devicons/python/original";
import LaravelOriginalIcon from "react-devicons/laravel/original";
import NestjsOriginalIcon from "react-devicons/nestjs/original";
import TailwindOriginalIcon from "react-devicons/tailwindcss/original";
import SassOriginalIcon from "react-devicons/sass/original";
import MongoOriginalIcon from "react-devicons/mongodb/original";
import GoOriginalIcon from "react-devicons/go/original";
import DockerOriginalIcon from "react-devicons/docker/original";
import KotlinOriginalIcon from "react-devicons/kotlin/original";

interface TechIconProps {
  name: string;
  iconKey: string;
  level: 'mastered' | 'learning';
}

const iconMap: Record<string, React.ComponentType> = {
  angular: AngularOriginalIcon,
  css3: Css3OriginalIcon,
  docker: DockerOriginalIcon,
  git: GitOriginalIcon,
  html5: Html5OriginalIcon,
  javascript: JavascriptOriginalIcon,
  laravel: LaravelOriginalIcon,
  mongodb: MongoOriginalIcon,
  mysql: MysqlOriginalIcon,
  nestjs: NestjsOriginalIcon,
  nodejs: NodejsOriginalIcon,
  php: PhpOriginalIcon,
  postgresql: PostgresqlOriginalIcon,
  react: ReactOriginalIcon,
  sass: SassOriginalIcon,
  tailwind: TailwindOriginalIcon,
  typescript: TypescriptOriginalIcon,
  go: GoOriginalIcon,
  python: PythonOriginalIcon,
  kotlin: KotlinOriginalIcon,
};

const emojiMap: Record<string, string> = {
  n8n: '🤖',
  aws: '☁️',
  jest: '🧪',
};

const TechIcon = ({ name, iconKey, level }: TechIconProps) => {
  const renderIcon = () => {
    if (emojiMap[iconKey]) {
      return <span>{emojiMap[iconKey]}</span>;
    }

    const IconComponent = iconMap[iconKey];
    if (IconComponent) {
      return <IconComponent />;
    }

    return <span>❓</span>;
  };

  return (
    <div className="flex flex-col items-center group">
      <div className="tech-icon p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 group-hover:border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-400/30">
        <div className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
          {renderIcon()}
        </div>
      </div>
      <span className="mt-2 text-sm text-muted-foreground group-hover:text-blue-400 transition-colors">
        {name}
      </span>
    </div>
  );
};

export default TechIcon;

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string;
  category: 'Mobile' | 'Backend' | 'AI' | 'Design';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

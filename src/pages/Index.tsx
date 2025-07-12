
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Brain,
  GraduationCap,
  User,
  FolderOpen,
  Heart,
  Languages,
  Trophy,
  Menu,
  X
} from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = {
    languages: ['Java', 'C', 'C++', 'PL/SQL', 'Python'],
    web: ['Bootstrap', 'Tailwind', 'HTML', 'CSS', 'JavaScript'],
    database: ['MySQL', 'MongoDB', 'Cloud Firestore'],
    tools: ['Git', 'VS Code', 'Postman', 'Firebase Studio', 'Eclipse IDE']
  };

  const projects = [
    {
      title: "Virtual Bank – Full Stack App using Firebase",
      date: "2024",
      description: "Built a responsive Virtual Banking application using Firebase Studio as backend. Users can securely perform transactions through a clean and intuitive interface. Admins can credit funds, automatically applying a 1% commission on every transaction.",
      tech: ["Firebase", "HTML", "CSS", "JavaScript", "Netlify", "Render"],
      features: ["Real-time balance updates", "Secure authentication", "Transaction history"],
      github: "https://github.com/Rakesh1662",
      demo: "https://github.com/Rakesh1662"
    },
    {
      title: "Story Weaver – Generative AI App",
      date: "2024",
      description: "A full-stack storytelling platform created using Lovable AI tools. Integrated Hugging Face, Gemini, and OpenAI APIs to generate unique, real-time, AI-powered stories. Users can generate story plots, get character suggestions, and read or download AI-generated tales.",
      tech: ["Lovable AI", "Hugging Face API", "Gemini API", "OpenAI API", "HTML/CSS/JS"],
      github: "https://github.com/Rakesh1662",
      demo: "https://github.com/Rakesh1662"
    },
    {
      title: "Trend Mate – Real-Time Dashboard App",
      date: "2024", 
      description: "Developed a real-time insights dashboard that pulls data from multiple public APIs. Features weather reports, cryptocurrency prices, stock market updates, and latest trending news with widget-like components.",
      tech: ["OpenWeather API", "News API", "Crypto & Stocks APIs", "JavaScript", "HTML/CSS"],
      github: "https://github.com/Rakesh1662",
      demo: "https://github.com/Rakesh1662"
    },
    {
      title: "Countries & Places RAG App using N8N",
      date: "Jun 2025",
      description: "Built a chatbot using RAG and N8N to fetch countries' top attractions from a large dataset, enabling quick travel insights.",
      tech: ["RAG", "N8N", "AI/ML"],
      github: "https://github.com/Rakesh1662/RAG-using-N8N",
      demo: "https://github.com/Rakesh1662/RAG-using-N8N"
    },
    {
      title: "MCP Server Automation",
      date: "Jun 2025", 
      description: "Connected Claude and ChatGPT to MCP servers. Sends automated emails, posts YouTube comments, and uploads images to Google Drive.",
      tech: ["AI Integration", "Automation", "APIs"],
      github: "https://github.com/Rakesh1662",
      demo: "https://github.com/Rakesh1662"
    },
    {
      title: "Crop Wise using Gen AI",
      date: "2024",
      description: "An AI tool using Relume AI, Figma, and Lovable to identify crop diseases from images and suggest fertilizers.",
      tech: ["Gen AI", "Computer Vision", "Agriculture Tech"],
      github: "https://github.com/Rakesh1662/crop-wise-solutions-27",
      demo: "https://github.com/Rakesh1662/crop-wise-solutions-27"
    },
    {
      title: "Crop Yield Prediction",
      date: "2024",
      description: "Web-based ML tool predicting crop yield from inputs like year, area, and climate. Helps farmers make data-driven decisions.",
      tech: ["Machine Learning", "Web Development", "Agriculture"],
      github: "https://github.com/Rakesh1662",
      demo: "https://github.com/Rakesh1662"
    },
    {
      title: "Drug Recommendation System",
      date: "2024",
      description: "NLP & Deep Learning-powered system that recommends drugs based on patient reviews and sentiment classification.",
      tech: ["NLP", "Deep Learning", "Healthcare"],
      github: "https://github.com/Rakesh1662/Drug_Recommendation_System_using_Sentimental_Analysis",
      demo: "https://github.com/Rakesh1662/Drug_Recommendation_System_using_Sentimental_Analysis"
    },
    {
      title: "Image Denoising using Deep Learning",
      date: "Currently Working",
      description: "Hybrid model combining CNNs with Wavelet Transforms to clean noisy images.",
      tech: ["Deep Learning", "Computer Vision", "CNN"],
      github: "https://github.com/Rakesh1662",
      demo: "https://github.com/Rakesh1662"
    }
  ];

  const education = [
    {
      degree: "M.Tech in Computer Science",
      institution: "JNTUH",
      period: "Oct 2023 – Ongoing",
      grade: "CGPA: 8.33"
    },
    {
      degree: "B.Tech in CSE",
      institution: "AAR Mahaveer Engineering College",
      period: "2019–2023",
      grade: "CGPA: 7.28"
    },
    {
      degree: "Intermediate – MPC",
      institution: "Sri Thri Veni Junior College",
      period: "2017–2019",
      grade: "94.7%"
    },
    {
      degree: "SSC",
      institution: "Master Mind's High School",
      period: "2016–2017",
      grade: "CGPA: 9.2"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(navItems[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download of the resume image
    const link = document.createElement('a');
    link.href = '/lovable-uploads/acde27e2-c008-45f0-985c-290cc97c100e.png';
    link.download = 'S_Rakesh_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              S Rakesh
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === item.id ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-white/80 hover:text-purple-400"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mt-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                onClick={handleResumeDownload}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img 
                    src="/lovable-uploads/6a87d19a-c2bd-4caf-834a-4a4f37f602ea.png" 
                    alt="S Rakesh - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                S Rakesh
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-4">
              Full Stack Developer | Software Developer Mentor
            </p>
            
            <p className="text-lg text-purple-300 mb-8">
              Currently at Nxtwave, Hyderabad
            </p>
            
            <p className="text-xl md:text-2xl font-medium text-white max-w-4xl mx-auto mb-12 leading-relaxed">
              "Turning real-world problems into scalable solutions using code and creativity."
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="mailto:rakeshsandagonda@gmail.com" className="flex items-center text-white/80 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                rakeshsandagonda@gmail.com
              </a>
              <span className="flex items-center text-white/80">
                <Phone className="w-5 h-5 mr-2" />
                +91 9182008552
              </span>
              <span className="flex items-center text-white/80">
                <MapPin className="w-5 h-5 mr-2" />
                Hyderabad, Telangana
              </span>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <a href="https://in.linkedin.com/in/rakesh-sandagonda-b6748126a" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                <a href="https://github.com/Rakesh1662" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and Software Developer Mentor at Nxtwave, Hyderabad. 
                With expertise in multiple programming languages and cutting-edge technologies, I specialize 
                in creating scalable solutions that bridge the gap between complex problems and elegant code.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                My journey spans from traditional software development to modern AI/ML applications, 
                always with a focus on mentoring the next generation of developers and creating 
                meaningful impact through technology.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <Card className="glass-effect border-white/10 hover-lift">
                  <CardContent className="p-6 text-center">
                    <Brain className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Quick Learner</h3>
                    <p className="text-sm text-white/70">Always adapting to new technologies</p>
                  </CardContent>
                </Card>

                <Card className="glass-effect border-white/10 hover-lift">
                  <CardContent className="p-6 text-center">
                    <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-semibold text-white mb-2">Problem Solver</h3>
                    <p className="text-sm text-white/70">Turning challenges into solutions</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect border-white/10 hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-pink-400 mr-2" />
                    Hobbies & Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Chess', 'Traveling', 'Listening to Music', 'Watching Movies'].map((hobby) => (
                      <Badge key={hobby} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/20">
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/10 hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Languages className="w-6 h-6 text-blue-400 mr-2" />
                    Languages
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80">Hindi</span>
                      <span className="text-purple-400">Intermediate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Telugu</span>
                      <span className="text-purple-400">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">English</span>
                      <span className="text-purple-400">Fluent</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="glass-effect border-white/10 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-purple-300 mb-1">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-white/70">
                        <span>{edu.period}</span>
                        <span className="text-green-400 font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-effect border-white/10 hover-lift animate-scale-in">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Languages</h3>
                </div>
                <div className="space-y-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/20 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-lift animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Web Tech</h3>
                </div>
                <div className="space-y-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/20 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-lift animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Database</h3>
                </div>
                <div className="space-y-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/20 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/10 hover-lift animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <FolderOpen className="w-8 h-8 text-orange-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Tools</h3>
                </div>
                <div className="space-y-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-400/20 mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-effect border-white/10 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white leading-tight">{project.title}</h3>
                    <Badge variant="outline" className={`border-purple-400/50 text-xs ${
                      project.date === 'Currently Working' ? 'text-green-300 border-green-400/50' : 'text-purple-300'
                    }`}>
                      {project.date}
                    </Badge>
                  </div>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                  
                  {project.features && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-purple-300 mb-2">Features:</p>
                      <ul className="text-sm text-white/60 space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-400/20 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-purple-400/50 text-purple-300 hover:bg-purple-400 hover:text-white flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-400/50 text-blue-300 hover:bg-blue-400 hover:text-white flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-purple-400 mr-4" />
                  <a href="mailto:rakeshsandagonda@gmail.com" className="text-white/80 hover:text-purple-400">
                    rakeshsandagonda@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-4" />
                  <span className="text-white/80">+91 9182008552</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                  <span className="text-white/80">Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-6 h-6 text-purple-400 mr-4" />
                  <a href="https://in.linkedin.com/in/rakesh-sandagonda-b6748126a" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-purple-400">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <Card className="glass-effect border-white/10 animate-scale-in">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Name</label>
                    <Input className="bg-white/10 border-white/20 text-white placeholder:text-white/50" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <Input type="email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message</label>
                    <Textarea className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]" placeholder="Your message..." />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60">
            © 2024 S Rakesh. Built with passion and code. ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

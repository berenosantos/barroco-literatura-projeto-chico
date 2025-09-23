import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen, User, MapPin, Crown, Church, Feather, Palette } from 'lucide-react';

const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const timelineEvents = [
    {
      id: 1,
      year: 'Século XVI-XVII',
      title: 'Origem do Barroco Europeu',
      description: 'Surgimento na Itália e expansão pela Europa.',
      type: 'origem',
      icon: Palette,
      details: 'O Barroco surge na Itália na virada do século XVI para o XVII, como um movimento artístico que, embora conectado à cultura clássica, buscava seus próprios caminhos. Caracteriza-se pela expressão de dúvidas existenciais e pela dramaticidade.'
    },
    {
      id: 2,
      year: 1601,
      title: 'Prosopopeia de Bento Teixeira',
      description: 'Marco inicial do Barroco no Brasil.',
      type: 'literatura',
      icon: BookOpen,
      details: 'A publicação de \'Prosopopeia\' de Bento Teixeira é considerada o marco zero do Barroco literário no Brasil. A obra, um poema épico, introduz a estética barroca no país, com forte influência do modelo português e espanhol.'
    },
    {
      id: 3,
      year: '1630',
      title: 'Consolidando o Barroco nas cidades coloniais',
      description: 'Primeiras manifestações barrocas em igrejas e arte sacra no Brasil colonial.',
      type: 'historico',
      icon: MapPin,
      details: 'Salvador e Olinda começam a apresentar igrejas, pinturas e esculturas totalmente influenciadas pelo estilo barroco europeu, misturando religiosidade e dramatismo.'
    },
    {
      id: 4,
      year: 1636,
      title: 'Nascimento de Gregório de Matos',
      description: 'Nasce em Salvador o maior poeta barroco do Brasil.',
      type: 'biografia',
      icon: User,
      details: 'Gregório de Matos, o \'Boca do Inferno\', nasce em Salvador. Sua obra poética abrangerá as vertentes lírica, satírica e religiosa, tornando-se a mais alta expressão do Barroco no Brasil.'
    },
    { 
      id: 5,
      year: 1641,
      title: 'Publicação de obras religiosas barrocas em Portugal',
      description: 'Obras como sermões de Padre António Vieira começam a se espalhar pelo Brasil',
      type: 'religiao',
      icon: Church,
      details: 'Em 1641, obras religiosas barrocas, como os sermões de Padre António Vieira, são publicadas em Portugal e começam a se difundir no Brasil. Essa circulação influencia a literatura e a cultura colonial, reforçando valores religiosos e morais e marcando o início da consolidação do Barroco na colônia.'
    },
    {
      id: 6,
      year: 1679,
      title: 'Publicação de Os Sermões',
      description: 'Padre António Vieira publica seus sermões.',
      type: 'literatura',
      icon: BookOpen,
      details: 'A publicação dos sermões de Padre António Vieira representa o auge do conceptismo, vertente do Barroco focada no jogo de ideias e na argumentação lógica e retórica.'
    },
    {
      id: 7,
      year: 1696,
      title: 'Morte de Gregório de Matos',
      description: 'Falece o \'Boca do Inferno\'.',
      type: 'biografia',
      icon: User,
      details: 'Gregório de Matos morre em Recife, deixando uma vasta obra que circulava em manuscritos e que só seria publicada postumamente.'
    },
    {
      id: 8,
      year: 1768,
      title: 'Fim do Barroco e Início do Arcadismo',
      description: 'Declínio do Barroco e surgimento de novos estilos',
      type: 'transicao',
      icon: Feather,
      details: 'A fundação da Arcádia Ultramarina em Vila Rica (MG) e a publicação de Obras Poéticas de Cláudio Manuel da Costa marcam o início do Arcadismo no Brasil, um movimento que se oporá aos excessos do Barroco, buscando a simplicidade e a razão.'
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'literatura': return 'bg-blue-500 text-white';
      case 'biografia': return 'bg-green-500 text-white';
      case 'historico': return 'bg-yellow-500 text-white';
      case 'origem': return 'bg-purple-500 text-white';
      case 'religiao': return 'bg-red-500 text-white';
      case 'transicao': return 'bg-gray-500 text-white';
      default: return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 baroque-ornament">Linha do Tempo do Barroco</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Navegue pelos principais eventos que marcaram o período barroco, desde suas origens na Europa até seu desenvolvimento e fim no Brasil.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full hidden lg:block"></div>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div key={event.id} initial={{ opacity: 0, x: isEven ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.6 }} viewport={{ once: true }} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block"></div>
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="hover-baroque cursor-pointer group" onClick={() => setSelectedEvent(event)}>
                      <CardHeader>
                        <div className={`flex items-center space-x-3 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                          <div className={`p-2 rounded-full ${getTypeColor(event.type)} group-hover:scale-110 transition-transform duration-300`}>
                            <Icon size={20} />
                          </div>
                          <div className={isEven ? 'lg:text-right' : ''}>
                            <Badge variant="outline" className="mb-2">{event.year}</Badge>
                            <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className={isEven ? 'lg:text-right' : ''}>
                        <CardDescription className="text-base mb-3">{event.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {selectedEvent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedEvent(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-background rounded-lg p-6 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-primary">{selectedEvent.title}</h2>
                <Button variant="ghost" size="sm" onClick={() => setSelectedEvent(null)}>Fechar</Button>
              </div>
              <p className="text-muted-foreground leading-relaxed">{selectedEvent.details}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Timeline;


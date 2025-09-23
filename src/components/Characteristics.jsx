import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Lightbulb, Clock, Heart, Zap, Skull, Palette, 
  Scale, Sparkles, BookOpen, Feather, Crown, 
  Cross, Brain, Eye, Scroll
} from 'lucide-react'

const Characteristics = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCharacteristic, setSelectedCharacteristic] = useState(null)

  const characteristics = [
    {
      id: 1,
      name: "Chiaroescuro",
      category: "visual",
      icon: Lightbulb,
      description: "Contraste dramático entre luz e sombra",
      details: "O jogo do Chiaroscuro - ou claro e escuro - é uma técnica de um contraste dramático e aspecto contrário entre a luz e a sombra. Esta técnica é utilizada para criar volume, intensidade e profundidade na cena, gerando um efeito macabro. O Chiaroscuro foi vastamente radicalizados por artistas renomados como Caravaggio e Rembrandt.",
      examples: ["Pinturas de Caravaggio", "Esculturas de Bernini", "Arquitetura com jogos de luz"],
      color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-700"
    },
    {
      id: 2,
      name: "Efemeridade",
      category: "temporal",
      icon: Clock,
      description: "Consciência da brevidade da vida",
      details: "Preocupação constante com a passagem do tempo e a transitoriedade da existência humana. Esta característica manifesta-se através de temas como a morte, a velhice e a fugacidade dos prazeres terrenos, lembrando constantemente da necessidade de preparação para a vida eterna.",
      examples: ["Vanitas na pintura", "Memento mori", "Poesia sobre a passagem do tempo"],
      color: "bg-gray-500/10 border-gray-500/20 text-gray-700"
    },
    {
      id: 3,
      name: "Moralização",
      category: "religioso",
      icon: Cross,
      description: "Função didática e moralizante da arte",
      details: "No Barroco, a característica da tentativa de moralização da população esteve bastante presente, marcando, principalmente, obras com intuito religioso e com ênfase na efemeridade da vida. Além disso, esse aspecto também foi muito importante nas obras dos principais escritores do Barroco brasileiro, estando presente nas sátiras de Gregório de Matos e nos sermões do Padre Antônio Vieira.",
      examples: ["Sermões de Vieira", "Pinturas religiosas", "Teatro moral"],
      color: "bg-blue-500/10 border-blue-500/20 text-blue-700"
    },
    {
      id: 4,
      name: "Fusionismo",
      category: "dualidade",
      icon: Scale,
      description: "União de elementos opostos",
      details: "Característica fundamental que busca conciliar elementos aparentemente contraditórios: sagrado e profano, claro e escuro, razão e emoção, medieval e renascentista. Esta síntese cria a tensão dramática típica do barroco.",
      examples: ["Poesia sacra e profana", "Arquitetura religiosa ornamentada", "Literatura que mescla temas"],
      color: "bg-purple-500/10 border-purple-500/20 text-purple-700"
    },
    {
      id: 5,
      name: "Concepção Trágica da Vida",
      category: "existencial",
      icon: Skull,
      description: "Visão pessimista da condição humana",
      details: "No Barroco, esteve muito presente a concepção trágica da vida, que enfatiza a efemeridade e o medo humano da inconstância da existência. Ademais, essa característica também se relaciona com a dualidade presente no barroco, entre os prazeres fúteis e mundanos e a angústia da morte, a fé e a razão, além do espiritual e material.",
      examples: ["Poesia melancólica", "Pinturas sobre a morte", "Reflexões sobre a vanidade"],
      color: "bg-red-500/10 border-red-500/20 text-red-700"
    },
    {
      id: 6,
      name: "Figuração",
      category: "literario",
      icon: Eye,
      description: "Uso abundante de figuras de linguagem",
      details: "Emprego intensivo de metáforas, alegorias, hipérboles e outras figuras de linguagem para criar efeitos expressivos. A linguagem barroca é rica em ornamentação e busca surpreender o leitor através de associações inesperadas e imagens impactantes.",
      examples: ["Metáforas elaboradas", "Alegorias complexas", "Hipérboles dramáticas"],
      color: "bg-green-500/10 border-green-500/20 text-green-700"
    },
    {
      id: 7,
      name: "Oposição Material vs Espiritual",
      category: "dualidade",
      icon: Heart,
      description: "Conflito entre corpo e alma",
      details: "Uma das principais características do Barroco foi a oposição entre o mundo material e o mundo espiritual, enfatizando o conflito entre o teocentrismo e o antropocentrismo, a fé e a razão, além da efemeridade da vida. Ademais, essa característica também se relaciona ao principal desejo humano da época, que seria de aproximar a esfera humana da esfera divina, superando obstáculos que dificultavam a salvação e o direito aos céus, sendo descrito, principalmente, na arte e na literatura.",
      examples: ["Poesia amorosa vs sacra", "Tentações e arrependimentos", "Conflitos internos"],
      color: "bg-pink-500/10 border-pink-500/20 text-pink-700"
    },
    {
      id: 8,
      name: "Morbidez",
      category: "existencial",
      icon: Skull,
      description: "Fascínio pela morte e decadência",
      details: "Atração mórbida pelos temas relacionados à morte, decomposição e decadência. Esta característica reflete a preocupação barroca com a transitoriedade da vida e serve como lembrete constante da necessidade de preparação espiritual.",
      examples: ["Naturezas mortas", "Poesia sobre a morte", "Imagens de decomposição"],
      color: "bg-gray-600/10 border-gray-600/20 text-gray-700"
    },
    {
      id: 9,
      name: "Requinte Formal",
      category: "literario",
      icon: Crown,
      description: "Elaboração técnica e estilística",
      details: "Preocupação extrema com a perfeição formal, técnica apurada e elaboração estilística. Os artistas barrocos buscavam demonstrar virtuosismo através de composições complexas e tecnicamente perfeitas.",
      examples: ["Sonetos perfeitos", "Técnicas pictóricas avançadas", "Arquitetura elaborada"],
      color: "bg-indigo-500/10 border-indigo-500/20 text-indigo-700"
    },
    {
      id: 10,
      name: "Cultismo",
      category: "literario",
      icon: Sparkles,
      description: "Jogo de palavras e ornamentação",
      details: "Também conhecido como gongorismo, é caracterizado pelo jogo de palavras, com um grande número de figuras de linguagem e vocabulário sofisticado, a presença de imagens poéticas e a elaboração rebuscada da linguagem para gerar um efeito de sentido. Além disso, ele é notabilizado pela exploração de efeitos sensoriais como cor, som, forma, volume, imagens violentas e fantasiosas.",
      examples: ["Linguagem rebuscada", "Neologismos", "Sintaxe complexa"],
      color: "bg-amber-500/10 border-amber-500/20 text-amber-700"
    },
    {
      id: 11,
      name: "Conceptismo",
      category: "literario",
      icon: Brain,
      description: "Jogo de ideias e argumentação",
      details: "Também conhecido como quevedismo, é caracterizado pelo jogo de idéias, constituído pelas sutilezas do raciocínio, pensamento lógico, analogias, histórias ilustrativas, etc. O conceptismo é predominante em textos em prosa que valorizam o conteúdo, a essência da significação e a construção intelectual.",
      examples: ["Sermões de Vieira", "Paradoxos", "Argumentação complexa"],
      color: "bg-teal-500/10 border-teal-500/20 text-teal-700"
    },
    {
      id: 12,
      name: "Gosto pelo Soneto",
      category: "literario",
      icon: Scroll,
      description: "Preferência por formas poéticas fixas",
      details: "Predileção pelo soneto e outras formas poéticas fixas, emprego cuidadoso da poesia e uso elaborado de figuras de linguagem. O soneto torna-se a forma preferida para expressar a complexidade temática barroca.",
      examples: ["Sonetos de Gregório de Matos", "Formas fixas", "Métrica rigorosa"],
      color: "bg-orange-500/10 border-orange-500/20 text-orange-700"
    },
    {
      id: 13,
      name: "Idealização e Sensualismo",
      category: "dualidade",
      icon: Heart,
      description: "Tensão entre ideal e sensual",
      details: "Conflito entre a idealização platônica do amor e o sensualismo carnal, gerando sentimento de culpa cristã. Esta tensão cria uma das características mais marcantes da poesia amorosa barroca.",
      examples: ["Poesia amorosa conflituosa", "Idealização da mulher", "Culpa e arrependimento"],
      color: "bg-rose-500/10 border-rose-500/20 text-rose-700"
    },
    {
      id: 14,
      name: "Aproximação Humano-Divino",
      category: "religioso",
      icon: Zap,
      description: "Busca de união com o sagrado",
      details: "Desejo constante de aproximar a esfera humana da divina, buscando a transcendência através da arte e da experiência mística. Esta característica manifesta-se na tentativa de tornar o sagrado acessível aos sentidos humanos.",
      examples: ["Arte religiosa sensorial", "Misticismo", "Experiências transcendentes"],
      color: "bg-violet-500/10 border-violet-500/20 text-violet-700"
    },
    {
      id: 15,
      name: "Raciocínio Complexo",
      category: "literario",
      icon: BookOpen,
      description: "Desenvolvimento em parábolas bíblicas",
      details: "Gosto por raciocínio complexo e elaborado, frequentemente desenvolvido através de parábolas e narrativas bíblicas. Esta característica é especialmente evidente na prosa conceptista dos sermões.",
      examples: ["Sermões elaborados", "Parábolas complexas", "Exegese bíblica"],
      color: "bg-cyan-500/10 border-cyan-500/20 text-cyan-700"
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas', icon: Palette },
    { id: 'visual', name: 'Visuais', icon: Eye },
    { id: 'literario', name: 'Literárias', icon: Feather },
    { id: 'religioso', name: 'Religiosas', icon: Cross },
    { id: 'dualidade', name: 'Dualidade', icon: Scale },
    { id: 'existencial', name: 'Existenciais', icon: Heart },
    { id: 'temporal', name: 'Temporais', icon: Clock }
  ]

  const filteredCharacteristics = selectedCategory === 'all' 
    ? characteristics 
    : characteristics.filter(char => char.category === selectedCategory)

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 baroque-ornament">
            Características do <span className="text-primary">Barroco</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore as principais características que definem o movimento barroco, 
            desde aspectos visuais até elementos literários e filosóficos.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 hover-baroque"
              >
                <Icon size={16} />
                <span>{category.name}</span>
              </Button>
            )
          })}
        </motion.div>

        {/* Characteristics Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence>
            {filteredCharacteristics.map((characteristic, index) => {
              const Icon = characteristic.icon
              return (
                <motion.div
                  key={characteristic.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <Card 
                    className={`h-full hover-baroque cursor-pointer transition-all duration-300 ${characteristic.color}`}
                    onClick={() => setSelectedCharacteristic(characteristic)}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 rounded-full bg-white/80">
                          <Icon size={20} />
                        </div>
                        <CardTitle className="text-lg font-bold">
                          {characteristic.name}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        {characteristic.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="text-xs">
                        {categories.find(cat => cat.id === characteristic.category)?.name}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Detailed View Modal */}
        {selectedCharacteristic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCharacteristic(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-full ${selectedCharacteristic.color}`}>
                  <selectedCharacteristic.icon size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary">
                    {selectedCharacteristic.name}
                  </h2>
                  <p className="text-muted-foreground">
                    {selectedCharacteristic.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Descrição Detalhada</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCharacteristic.details}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Exemplos</h3>
                  <ul className="space-y-1">
                    {selectedCharacteristic.examples.map((example, index) => (
                      <li key={index} className="text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button 
                onClick={() => setSelectedCharacteristic(null)}
                className="mt-6 w-full"
              >
                Fechar
              </Button>
            </motion.div>
          </motion.div>
        )}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-primary">
            Síntese das Características Barrocas
          </h2>
          <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            O movimento barroco caracteriza-se pela complexidade e riqueza de elementos que se entrelaçam 
            para criar uma arte única. A tensão entre opostos, a dramaticidade, a ornamentação elaborada 
            e a preocupação com a transcendência espiritual formam o conjunto de características que 
            definem este período artístico fundamental na história da cultura ocidental.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Characteristics


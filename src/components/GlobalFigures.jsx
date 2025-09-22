import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { User, Palette, Feather, Calendar, MapPin, Award, BookOpen, Eye } from 'lucide-react'

const GlobalFigures = () => {
  const [selectedFigure, setSelectedFigure] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const figures = [
    {
      id: 1,
      name: "Luis de Góngora",
      category: "literatura",
      nationality: "Espanhol",
      period: "1561-1627",
      image: "/images/2bzF9f55wTvj.jpg",
      specialty: "Poeta",
      movement: "Cultismo (Gongorismo)",
      description: "Poeta espanhol criador do cultismo barroco",
      biography: "Luis de Góngora y Argote foi um poeta espanhol considerado o máximo expoente do cultismo barroco. Nascido em Córdoba, desenvolveu um estilo poético caracterizado pela complexidade sintática, uso de cultismos, metáforas elaboradas e ornamentação excessiva da linguagem. Sua obra influenciou profundamente a literatura barroca em toda a Europa e América.",
      contributions: [
        "Criação do estilo cultista (gongorismo)",
        "Renovação da linguagem poética",
        "Influência na literatura barroca mundial",
        "Desenvolvimento de técnicas metafóricas complexas"
      ],
      majorWorks: [
        "Soledades (1613)",
        "Fábula de Polifemo y Galatea (1612)",
        "Sonetos diversos",
        "Romances e letrillas"
      ],
      characteristics: ["Cultismo", "Metáforas elaboradas", "Sintaxe complexa", "Erudição clássica"]
    },
    {
      id: 2,
      name: "Francisco de Quevedo",
      category: "literatura",
      nationality: "Espanhol",
      period: "1580-1645",
      image: "/images/BV4mlZ11Nd3T.jpg",
      specialty: "Escritor",
      movement: "Conceptismo (Quevedismo)",
      description: "Escritor espanhol mestre do conceptismo barroco",
      biography: "Francisco Gómez de Quevedo y Santibáñez Villegas foi um escritor espanhol do Século de Ouro, considerado um dos maiores representantes do conceptismo barroco. Sua obra caracteriza-se pelo jogo de ideias, argumentação engenhosa, uso de paradoxos e antíteses. Além de poeta, foi prosista, político e filósofo.",
      contributions: [
        "Desenvolvimento do conceptismo",
        "Sátira social e política",
        "Filosofia moral e estoica",
        "Renovação da prosa espanhola"
      ],
      majorWorks: [
        "Los Sueños (1627)",
        "El Buscón (1626)",
        "Política de Dios (1617)",
        "Sonetos metafísicos"
      ],
      characteristics: ["Conceptismo", "Sátira", "Filosofia moral", "Jogo de ideias"]
    },
    {
      id: 3,
      name: "Caravaggio",
      category: "pintura",
      nationality: "Italiano",
      period: "1571-1610",
      image: "/images/ZvXy7teHDMFH.jpg",
      specialty: "Pintor",
      movement: "Barroco Italiano",
      description: "Pintor italiano revolucionário do chiaroescuro",
      biography: "Michelangelo Merisi da Caravaggio foi um pintor italiano que revolucionou a arte barroca através do uso dramático do chiaroescuro. Suas obras caracterizam-se pelo realismo intenso, contrastes extremos de luz e sombra, e pela representação de figuras religiosas com características humanas comuns. Influenciou profundamente a pintura europeia.",
      contributions: [
        "Revolução do chiaroescuro",
        "Realismo na arte religiosa",
        "Influência no barroco europeu",
        "Renovação da pintura italiana"
      ],
      majorWorks: [
        "A Vocação de São Mateus (1599-1600)",
        "Judite Decapitando Holofernes (1598-1602)",
        "A Flagelação de Cristo (1607)",
        "Baco (1595)"
      ],
      characteristics: ["Chiaroescuro", "Realismo", "Dramaticidade", "Tenebrismo"]
    },
    {
      id: 4,
      name: "Peter Paul Rubens",
      category: "pintura",
      nationality: "Flamengo",
      period: "1577-1640",
      image: "/images/GfJxyIPFddPc.jpg",
      specialty: "Pintor",
      movement: "Barroco Flamengo",
      description: "Mestre da pintura barroca flamenga",
      biography: "Peter Paul Rubens, uma das figuras mais importantes do Barroco, foi um pintor brabantino - da região de Barbante, que hoje se situa entre a Bélgica e a Holanda, apesar de ter nascido na Alemanha - que enfatizava a extravagância, a cor, o movimento e a sensualidade em suas obras, embora tenha feito pinturas religiosas.",
      contributions: [
        "Desenvolvimento do barroco flamengo",
        "Síntese entre tradição e inovação",
        "Influência na pintura europeia",
        "Diplomacia cultural"
      ],
      majorWorks: [
        "A Descida da Cruz (1614)",
        "As Três Graças (1639)",
        "O Jardim do Amor (1630-1631)",
        "Série Maria de Médici (1625)"
      ],
      characteristics: ["Exuberância", "Movimento", "Colorido vibrante", "Sensualidade"]
    },
    {
      id: 5,
      name: "Rembrandt van Rijn",
      category: "pintura",
      nationality: "Holandês",
      period: "1606-1669",
      image: "/images/LWKkjylEL9bv.jpg",
      specialty: "Pintor",
      movement: "Barroco Holandês",
      description: "Mestre holandês da luz e da psicologia",
      biography: "Rembrandt Harmenszoon van Rijn foi um pintor holandês considerado um dos maiores artistas da história. Sua obra caracteriza-se pelo uso magistral da luz, profundidade psicológica dos retratos e técnica pictórica inovadora. Desenvolveu um estilo único que influenciou gerações de artistas.",
      contributions: [
        "Maestria no uso da luz",
        "Profundidade psicológica",
        "Inovação técnica",
        "Influência duradoura na arte"
      ],
      majorWorks: [
        "A Ronda Noturna (1642)",
        "A Lição de Anatomia (1632)",
        "Autorretratos diversos",
        "O Retorno do Filho Pródigo (1669)"
      ],
      characteristics: ["Maestria da luz", "Psicologia", "Técnica inovadora", "Introspecção"]
    },
    {
      id: 6,
      name: "Diego Velázquez",
      category: "pintura",
      nationality: "Espanhol",
      period: "1599-1660",
      image: "/images/Md3q3BoKsYCy.jpg",
      specialty: "Pintor",
      movement: "Barroco Espanhol",
      description: "Pintor da corte espanhola e mestre do realismo",
      biography: "Diego Velázquez foi um dos mais importantes artistas do período barroco. Espanhol, Velázquez era um pintor individualista e retratista, sendo reconhecido como um dos maiores de toda a história que trabalhava com o naturalismo e o tenebrismo, além de sofrer influência de Caravaggio e seus seguidores.",
      contributions: [
        "Realismo cortesão",
        "Técnica pictórica refinada",
        "Influência na pintura moderna",
        "Renovação do retrato"
      ],
      majorWorks: [
        "Las Meninas (1656)",
        "A Rendição de Breda (1635)",
        "Vênus ao Espelho (1647-1651)",
        "Retratos da família real"
      ],
      characteristics: ["Realismo", "Técnica refinada", "Luz atmosférica", "Perspectiva"]
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas', icon: User },
    { id: 'literatura', name: 'Literatura', icon: Feather },
    { id: 'pintura', name: 'Pintura', icon: Palette }
  ]

  const filteredFigures = selectedCategory === 'all' 
    ? figures 
    : figures.filter(figure => figure.category === selectedCategory)

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
            Figuras <span className="text-primary">Globais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os grandes mestres do movimento barroco europeu que influenciaram 
            a arte e literatura em todo o mundo, incluindo o Brasil.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center gap-4 mb-12"
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

        {/* Figures Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredFigures.map((figure, index) => (
              <motion.div
                key={figure.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card 
                  className="h-full hover-baroque cursor-pointer group"
                  onClick={() => setSelectedFigure(figure)}
                >
                  <CardHeader className="text-center">
                    <div className="relative mx-auto mb-4">
                      <img
                        src={figure.image}
                        alt={figure.name}
                        className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                        {figure.category === 'literatura' ? <Feather size={16} /> : <Palette size={16} />}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">
                      {figure.name}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {figure.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{figure.nationality}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{figure.period}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {figure.movement}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed View Modal */}
        {selectedFigure && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedFigure(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Image and Basic Info */}
                <div className="text-center">
                  <img
                    src={selectedFigure.image}
                    alt={selectedFigure.name}
                    className="w-48 h-48 rounded-lg object-cover mx-auto mb-4 border-4 border-primary/20"
                  />
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {selectedFigure.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {selectedFigure.specialty}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin size={14} />
                      <span>{selectedFigure.nationality}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar size={14} />
                      <span>{selectedFigure.period}</span>
                    </div>
                    <Badge variant="outline" className="mt-2">
                      {selectedFigure.movement}
                    </Badge>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <User size={18} className="mr-2 text-primary" />
                      Biografia
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedFigure.biography}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Award size={18} className="mr-2 text-primary" />
                      Principais Contribuições
                    </h3>
                    <ul className="space-y-1">
                      {selectedFigure.contributions.map((contribution, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <BookOpen size={18} className="mr-2 text-primary" />
                      Principais Obras
                    </h3>
                    <ul className="space-y-1">
                      {selectedFigure.majorWorks.map((work, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Eye size={18} className="mr-2 text-primary" />
                      Características Estilísticas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedFigure.characteristics.map((characteristic, index) => (
                        <Badge key={index} variant="secondary">
                          {characteristic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => setSelectedFigure(null)}
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
            Influência Global do Barroco
          </h2>
          <p className="text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-8">
            Estes grandes mestres do barroco europeu estabeleceram os fundamentos estilísticos e 
            temáticos que se espalharam por todo o mundo, influenciando profundamente a arte e 
            literatura nas colônias americanas, incluindo o Brasil.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center hover-baroque">
              <CardHeader>
                <CardTitle className="text-primary">Literatura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Góngora e Quevedo estabeleceram os modelos do cultismo e conceptismo 
                  que influenciaram diretamente autores como Gregório de Matos e Padre António Vieira.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-baroque">
              <CardHeader>
                <CardTitle className="text-primary">Artes Visuais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Caravaggio, Rubens, Rembrandt e Velázquez criaram a linguagem visual barroca 
                  que se manifestou na arquitetura e escultura colonial brasileira.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GlobalFigures


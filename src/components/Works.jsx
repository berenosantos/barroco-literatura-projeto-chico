import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Calendar, User, Quote, Eye, EyeOff, Palette } from 'lucide-react'

// Importar imagens das obras
import prosopopeiaImg from '../assets/G2ueFg0V5DFn.jpg'
import sermoesImg from '../assets/ZgakHPqOfQBC.jpg'
import gregorioPoesiaImg from '../assets/YhkOXcxSUcoH.jpg'
import flagelacaoImg from '/images/JRoJOHaOtfbl.jpg'
import leiteiraImg from '/images/9tvwINFjvns1.jpg'
import bacoImg from '/images/Immms4Bd4fUt.jpg'

const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null)
  const [showAnalysis, setShowAnalysis] = useState({})
  const [category, setCategory] = useState('literatura')

  const works = {
    literatura: [
      {
        id: 1,
        title: 'Prosopopeia',
        author: 'Bento Teixeira',
        year: '1601',
        genre: 'Poema Épico',
        image: prosopopeiaImg,
        description: 'Obra inaugural do Barroco brasileiro, um poema épico que narra os feitos de Jorge de Albuquerque Coelho.',
        importance: 'Marco inicial do movimento barroco no Brasil',
        characteristics: ['Cultismo', 'Linguagem rebuscada', 'Modelo camoniano', 'Poesia épica'],
        excerpt: `"Cantem Poetas a Deusa que ensina\nA bem falar, a bem pronunciar,\nQue a fama sua imortal se avizinha,\nE já se deixa no mundo escutar..."`,
        analysis: 'A Prosopopeia segue o modelo épico camoniano, com linguagem culta e rebuscada. O poema apresenta características típicas do cultismo barroco, como a ornamentação excessiva da linguagem e o uso de figuras de linguagem elaboradas. Apesar de não ser considerada uma obra de grande valor literário pela crítica moderna, sua importância histórica é inegável como marco inaugural do Barroco no Brasil.',
        context: 'Escrita no contexto do Brasil colonial, a obra reflete a influência da literatura portuguesa e a tentativa de criar uma literatura própria no território brasileiro. O poema celebra os feitos coloniais e demonstra a adaptação dos modelos europeus à realidade brasileira.',
        literaryDevices: ['Hipérbatos', 'Metáforas elaboradas', 'Linguagem erudita', 'Inversões sintáticas']
      },
      {
        id: 2,
        title: 'Os Sermões',
        author: 'Padre António Vieira',
        year: '1679',
        genre: 'Prosa Sacra',
        image: sermoesImg,
        description: 'Coletânea de sermões que representa o auge da prosa barroca luso-brasileira, marcada pelo conceptismo.',
        importance: 'Obra-prima da oratória sacra e do conceptismo barroco',
        characteristics: ['Conceptismo', 'Argumentação engenhosa', 'Metáforas', 'Antíteses'],
        excerpt: `"Vós, diz Cristo, Senhor nosso, falando com os pregadores, sois o sal da terra: e chama-lhes sal da terra, porque quer que façam na terra o que faz o sal. O efeito do sal é impedir a corrupção..."`,
        analysis: 'Os Sermões de Vieira representam o auge do conceptismo barroco, caracterizado pela argumentação engenhosa e pelo jogo de ideias. O autor utiliza metáforas elaboradas, como "o sal da terra" para os pregadores, demonstrando sua habilidade retórica. A obra combina fé e razão, típico do espírito barroco, apresentando argumentos lógicos para defender pontos de vista religiosos.',
        context: 'Escritos no contexto da Contrarreforma, os sermões refletem a necessidade da Igreja Católica de reafirmar sua doutrina. Vieira, como jesuíta, utilizava a oratória como instrumento de catequese e persuasão, adaptando a mensagem cristã às realidades do Brasil colonial.',
        literaryDevices: ['Metáforas', 'Antíteses', 'Paradoxos', 'Comparações', 'Silogismos']
      },
      {
        id: 3,
        title: 'Antologia Poética',
        author: 'Gregório de Matos',
        year: 'Século XVII',
        genre: 'Poesia Lírica, Satírica e Sacra',
        image: gregorioPoesiaImg,
        description: 'Conjunto da obra poética dividida em três vertentes: lírica, satírica e sacra, representando o Barroco brasileiro.',
        importance: 'Maior expressão da poesia barroca brasileira',
        characteristics: ['Dualismo', 'Sátira social', 'Lirismo amoroso', 'Religiosidade'],
        excerpt: `"Que falta nesta cidade? Verdade.\nQue mais por sua desonra? Honra.\nFalta mais que se lhe ponha? Vergonha..."`,
        analysis: 'A poesia de Gregório de Matos exemplifica perfeitamente o dualismo barroco, oscilando entre o sagrado e o profano, o amor e o desprezo, a fé e a dúvida. Sua poesia satírica, que lhe rendeu o apelido de "Boca do Inferno", critica mordazmente a sociedade baiana, utilizando linguagem popular e erudita. A vertente lírica explora temas como a fugacidade da vida e a beleza feminina, enquanto a sacra revela conflitos espirituais típicos do homem barroco.',
        context: 'Produzida na Bahia do século XVII, a poesia reflete as contradições da sociedade colonial: a riqueza dos senhores de engenho contrastando com a pobreza, a religiosidade convivendo com a corrupção, a cultura erudita europeia adaptando-se à realidade tropical brasileira.',
        literaryDevices: ['Antíteses', 'Paradoxos', 'Hipérboles', 'Jogos de palavras', 'Linguagem coloquial e erudita']
      }
    ],
    arte: [
      {
        id: 4,
        title: 'A Flagelação de Cristo',
        author: 'Caravaggio',
        year: 'c. 1607',
        genre: 'Pintura a óleo',
        image: flagelacaoImg,
        description: 'Uma representação dramática e realista da flagelação de Cristo, marcada pelo uso intenso do chiaroescuro.',
        importance: 'Exemplo paradigmático do tenebrismo barroco',
        characteristics: ['Chiaroescuro', 'Tenebrismo', 'Realismo', 'Dramaticidade'],
        analysis: 'Nesta obra, Caravaggio utiliza a técnica do chiaroescuro de forma magistral para criar um ambiente de intensa dramaticidade. A luz incide sobre o corpo de Cristo, destacando sua musculatura e sofrimento, enquanto os algozes permanecem na penumbra. A composição diagonal e a ausência de elementos idealizados reforçam o realismo e a brutalidade da cena, características marcantes do estilo do artista.',
        context: 'Pintada durante o período napolitano de Caravaggio, a obra reflete a violência e a instabilidade da época. A representação crua e realista da cena religiosa está alinhada com os preceitos da Contrarreforma, que buscava uma arte que comovesse e impactasse os fiéis.'
      },
      {
        id: 5,
        title: 'A Leiteira',
        author: 'Johannes Vermeer',
        year: 'c. 1658-1660',
        genre: 'Pintura a óleo',
        image: leiteiraImg,
        description: 'Uma cena cotidiana retratada com maestria, destacando a dignidade do trabalho doméstico.',
        importance: 'Obra-prima do Barroco holandês',
        characteristics: ['Realismo', 'Luz natural', 'Cena de gênero', 'Intimismo'],
        analysis: 'Vermeer captura um momento de serenidade e concentração, utilizando a luz de forma sutil para modelar as formas e criar uma atmosfera de intimidade. A atenção aos detalhes, como a textura do pão e o brilho da cerâmica, revela a maestria técnica do artista. A obra eleva uma cena cotidiana a um status de arte, característica do Barroco holandês.',
        context: 'No contexto da Holanda protestante do século XVII, as cenas de gênero (cenas do cotidiano) ganharam grande popularidade. A obra reflete os valores da sociedade burguesa da época, como a valorização do trabalho e da vida doméstica.'
      },
      {
        id: 6,
        title: 'Pintura de Baco',
        author: 'Caravaggio',
        year: 'c. 1595',
        genre: 'Pintura a óleo',
        image: bacoImg,
        description: 'Uma representação ambígua e sensual do deus do vinho, que convida o espectador a participar da cena.',
        importance: 'Exemplo da fusão entre o sagrado e o profano no Barroco',
        characteristics: ['Realismo', 'Sensualidade', 'Natureza-morta', 'Ambiguidade'],
        analysis: 'Caravaggio retrata Baco de forma realista e sensual, com unhas sujas e uma expressão lânguida. A natureza-morta em primeiro plano, com frutas apodrecendo, simboliza a efemeridade da vida e dos prazeres terrenos. A obra é um convite ao espectador, que se sente parte da cena, mas também uma reflexão sobre a transitoriedade da juventude e da beleza.',
        context: 'Pintada no início da carreira de Caravaggio, a obra demonstra seu interesse pelo realismo e pela representação de temas mitológicos de forma inovadora. A ambiguidade da figura, que pode ser interpretada como um jovem disfarçado de Baco, reflete a complexidade e a dualidade do pensamento barroco.'
      }
    ]
  }

  const toggleAnalysis = (workId) => {
    setShowAnalysis(prev => ({
      ...prev,
      [workId]: !prev[workId]
    }))
  }

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
            Obras <span className="text-primary">Essenciais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore as principais obras da literatura e da arte barroca, 
            suas características, contexto histórico e importância cultural.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={category === 'literatura' ? 'default' : 'outline'}
            onClick={() => setCategory('literatura')}
            className="flex items-center space-x-2"
          >
            <BookOpen size={16} />
            <span>Literatura</span>
          </Button>
          <Button 
            variant={category === 'arte' ? 'default' : 'outline'}
            onClick={() => setCategory('arte')}
            className="flex items-center space-x-2"
          >
            <Palette size={16} />
            <span>Arte</span>
          </Button>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {works[category].map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full hover-baroque cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-full h-48 rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {work.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {work.genre}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <User size={16} />
                      <span>{work.author}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{work.year}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base mb-4">
                    {work.description}
                  </CardDescription>
                  <Button 
                    onClick={() => setSelectedWork(work)}
                    className="w-full"
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Work View Modal */}
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">
                    {selectedWork.title}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    por {selectedWork.author} ({selectedWork.year})
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedWork(null)}
                >
                  Fechar
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Work Image and Basic Info */}
                <div className="text-center">
                  <div className="w-full h-60 mx-auto rounded-lg overflow-hidden border-4 border-primary/30 mb-4">
                    <img 
                      src={selectedWork.image} 
                      alt={selectedWork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {selectedWork.genre}
                  </Badge>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedWork.importance}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {selectedWork.characteristics.map((char) => (
                      <Badge key={char} variant="outline" className="text-xs">
                        {char}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Work Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Excerpt */}
                  {selectedWork.excerpt && (
                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex items-start space-x-3">
                        <Quote size={24} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-bold mb-3 text-secondary">Trecho da Obra</h3>
                          <p className="italic text-foreground font-medium leading-relaxed">
                            {selectedWork.excerpt}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Context */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-secondary">Contexto Histórico</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="initial-capital">
                        {selectedWork.context.charAt(0)}
                      </span>
                      {selectedWork.context.slice(1)}
                    </p>
                  </div>

                  {/* Analysis */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-secondary">Análise</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="initial-capital">
                        {selectedWork.analysis.charAt(0)}
                      </span>
                      {selectedWork.analysis.slice(1)}
                    </p>
                  </div>

                  {/* Literary Devices (if applicable) */}
                  {selectedWork.literaryDevices && selectedWork.literaryDevices.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-secondary">Recursos Literários</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedWork.literaryDevices.map((device) => (
                          <Badge key={device} variant="outline" className="text-sm">
                            {device}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Works



import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Scroll, Cross, Crown, Globe, Users, BookOpen } from 'lucide-react'

const Context = () => {
  const contextCards = [
    {
      id: 1,
      title: "Antropocentrismo vs Teocentrismo",
      description: "O conflito entre a visão humanista renascentista e a religiosidade medieval",
      icon: Users,
      content: "O período barroco surge em meio ao conflito entre duas visões de mundo: o antropocentrismo renascentista, que colocava o homem no centro do universo, e o teocentrismo medieval, que mantinha Deus como centro de todas as coisas. Esta tensão gerou a característica dualidade barroca, expressa na arte e literatura através de contrastes entre o sagrado e o profano, o espiritual e o material.",
      color: "bg-blue-500/10 border-blue-500/20",
      textColor: "text-blue-700"
    },
    {
      id: 2,
      title: "Representação de um Mundo Instável",
      description: "A arte barroca como reflexo das incertezas e transformações da época",
      icon: Globe,
      content: "A representação de um mundo instavel é representada no Barroco a partir de contrastes e o dualismo, sugerindo a dualidade do homem  entre forças opostas como a fé e a razão, a vida e morte, o ceu e o inferno. Contudo, o contraste e o dualismo na arte barroca reflete na efemeridade da vida e das coisas, gerando sentimentos de incerteza e pessimismo.",
      color: "bg-orange-500/10 border-orange-500/20",
      textColor: "text-orange-700"
    },
    {
  id: 3,
  title: "Significado da Palavra 'Barroco'",
  description: "Etimologia e evolução do termo que define o movimento artístico",
  icon: BookOpen,
  content: `O significado da palavra “barroco”, antes de ser denominado como o nome de um estilo artístico-literário, diz muito sobre o motivo pelo qual ela foi escolhida para esse período, tendo o significado de pérola irregular, imperfeita. Isso acontece pois o Barroco foi um período de conflito entre o teocentrismo e o antropocentrismo, além do catolicismo e o protestantismo, o que enfatiza bastante a ideia de uma era irregular. Ademais, há também uma relação com a arte barroca, sendo, por muito tempo, utilizada para criticar o estilo artístico que fugia do estilo do renascimento, valorizando o exagero, as formas retorcidas e as dualidades.`,
  color: "bg-purple-500/10 border-purple-500/20",
  textColor: "text-purple-700"
},
    {
      id: 4,
      title: "Contrarreforma e Concílio de Trento",
      description: "A resposta católica à Reforma Protestante e sua influência na arte",
      icon: Cross,
      content: "O Concílio de Trento (1545-1563) estabeleceu as diretrizes da Contrarreforma Católica, movimento que buscava combater o protestantismo e reafirmar os dogmas católicos. A Igreja incentivou uma arte que fosse didática, emocional e capaz de tocar os fiéis. O barroco surge como a expressão artística ideal para estes propósitos, utilizando dramaticidade, movimento e apelo sensorial para transmitir a mensagem religiosa.",
      color: "bg-red-500/10 border-red-500/20",
      textColor: "text-red-700"
    }
  ]

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
            Contexto <span className="text-primary">Histórico</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compreenda o cenário histórico, religioso e cultural que deu origem ao movimento barroco 
            e suas manifestações na arte e literatura dos séculos XVII e XVIII.
          </p>
        </motion.div>

        {/* Context Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {contextCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full hover-baroque ${card.color}`}>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 rounded-full bg-white/80 ${card.textColor}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold">
                          {card.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {card.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="initial-capital">
                        {card.content.charAt(0)}
                      </span>
                      {card.content.slice(1)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Cronologia do Contexto Histórico
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os principais eventos que moldaram o cenário para o surgimento do movimento barroco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Scroll className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">1517</h3>
              <p className="text-sm text-muted-foreground">Início da Reforma Protestante com Lutero</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Cross className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">1545-1563</h3>
              <p className="text-sm text-muted-foreground">Concílio de Trento e Contrarreforma</p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Crown className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Séc. XVII</h3>
              <p className="text-sm text-muted-foreground">Absolutismo monárquico na Europa</p>
            </div>

            <div className="text-center">
              <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <Globe className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">1600-1750</h3>
              <p className="text-sm text-muted-foreground">Apogeu do movimento barroco</p>
            </div>
          </div>
        </motion.div>

        {/* Key Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Conceitos-Chave do Período
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover-baroque">
              <CardHeader>
                <CardTitle className="text-primary">Dualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tensão constante entre opostos: sagrado/profano, luz/sombra, razão/emoção
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-baroque">
              <CardHeader>
                <CardTitle className="text-primary">Dramaticidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intensidade emocional e teatralidade como formas de expressão artística
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-baroque">
              <CardHeader>
                <CardTitle className="text-primary">Persuasão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Arte como instrumento de convencimento e reafirmação da fé católica
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Context


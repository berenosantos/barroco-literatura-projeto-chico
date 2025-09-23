import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Calendar, MapPin, Feather, User } from 'lucide-react'

// Importar imagens dos autores (assumindo que estão em src/assets)
import gregorioImg from '../assets/YhkOXcxSUcoH.jpg'
import vieiraImg from '../assets/ZgakHPqOfQBC.jpg'
import bentoImg from '../assets/xe4xMoRNq8om.jpg'

const Authors = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null)

  const authorsData = [
    {
      id: 1,
      name: 'Bento Teixeira',
      nickname: 'O Precursor',
      period: '1561-1618',
      birthPlace: 'Portugal/Brasil',
      mainWork: 'Prosopopeia',
      image: bentoImg,
      description: 'Considerado o marco inicial do Barroco brasileiro com sua obra "Prosopopeia".',
      biography: 'Bento Teixeira (1561-1618) é uma figura central para o início do Barroco no Brasil. Sua obra "Prosopopeia", publicada em 1601, é considerada o marco inaugural do movimento no país. Nascido em Portugal, Teixeira mudou-se para o Brasil, onde desenvolveu sua atividade literária. Sua vida foi marcada por controvérsias, incluindo acusações de judaísmo, que o levaram a ser perseguido pela Inquisição.',
      style: 'Seu estilo é predominantemente cultista, com forte influência de Camões. Caracteriza-se pela linguagem rebuscada, uso de figuras de linguagem complexas e uma estrutura poética formal, seguindo o modelo épico clássico.',
      works: ['Prosopopeia (1601)']
    },
    {
  id: 2,
  name: 'Gregório de Matos',
  nickname: 'Boca do Inferno',
  period: '1636-1696',
  birthPlace: 'Salvador, Bahia',
  mainWork: 'Poesia Lírica, Satírica e Sacra',
  image: gregorioImg,
  description: 'O maior poeta barroco brasileiro, conhecido por sua poesia satírica mordaz e sua lírica complexa.',
  biography: (
    <>
      <p>
        Nascido em 1636 na cidade de Salvador, Bahia, Gregório de Matos foi um dos maiores, senão o maior, escritor brasileiro do Barroco, trabalhando com poesias amorosas, circunstanciais e religiosas. Desde o início de sua vida, Gregório sempre teve uma posição privilegiada na sociedade, vindo de uma família de classe média-alta, tornando-se juiz em Coimbra - Portugal - e, ao voltar ao Brasil, aos 47 anos, exercendo os cargos de tesoureiro-mor e vigário-geral. No entanto, ele não se conformou com as injustiças vistas por ele e, através da escrita, trabalhou para criticar os corruptos e tentar mudar a sociedade em que ele vivia.
      </p>
      <p>
        Por conta disso, Gregório perdeu os seus cargos e foi perseguido pela alta casta, sendo julgado como irreverente e com comportamentos considerados indecorosos, ganhando o apelido de "Boca do Inferno" devido à ousadia nas suas críticas aos costumes e à sociedade da época. Além disso, houve um período em que foi exilado em Angola, na África e, ao retornar para o Brasil, não foi permitido entrar na Bahia, se estabelecendo no Recife, onde, aos 59 anos de idade, morreu.
      </p>
    </>
  ),
  style: (
    <>
      Tendo influência camoniana e herdado de sua estrutura poética, Gregório de Matos é marcado, principalmente por conta de sua poesia, utilizando bastante do cultismo - jogo de palavras sofisticadas, com figuras de linguagem e imagens poéticas para gerar efeito de sentido -, além de ser famoso por conta de suas críticas à sociedade. Além disso, a escrita e os poemas de Gregório podem ser definidos em três partes diferentes: a poesia amorosa, a circunstancial e a religiosa.
      <br /><br />
      A poesia amorosa contém tanto a poesia lírica, que trata de temas clássicos, como a oposição entre o espírito e a matéria, quanto a poesia erótico-irônica, que também inclui aspectos satíricos, mas é mais ligada a motivos relacionados a sensualidade. Ademais, a poesia religiosa se trata, principalmente, da poesia sacra, que tematiza a culpa e o perdão, a vida comum como um trânsito para a vida eterna, se relaciona com a poesia lírica, trabalha o senso de pecado e constata a fragilidade e a efemeridade da vida humana. Por fim, a poesia circunstancial é o tipo de poesia que mais representa Gregório de Matos, possuindo a poesia encomiástica, a poesia graciosa e, mais importante, a poesia satírica, em que Gregório fazia críticas gerais à sociedade, denunciando a corrupção econômica dos políticos, moral dos religiosos e a condição de vida na Bahia e em Pernambuco.
    </>
  ),
  works: [
    'Antologia Poética (póstuma)',
    'A Jesus Cristo Nosso Senhor (poesia sacra)',
    'À Cidade da Bahia (poesia satírica)',
    'Nasce o Sol, e não dura mais que um dia (poesia lírica)'
  ],
  worksNote: 'Por conta da dificuldade da propagação da literatura e da ausência de imprensa no Brasil, Gregório de Matos não teve nenhuma obra publicada em vida, tendo os seus poemas sendo circulados por meio da tradição oral e em manuscritos até meados do século XIX, quando seus poemas foram reunidos em um livro chamado “Tomo I do Florilégio da poesia brasileira”, de Francisco Adolfo de Varnhagen. Inclusive, por esse motivo, é comum que os poemas de Gregório apresentem variações no vocabulário quando comparadas diferentes edições e que haja controvérsias quanto a autoria do soteropolitano em alguns dos poemas a ele atribuídos. Apesar disso, Gregório de Matos ainda assim tem suas obras reconhecidas como as fundadoras da tradição lírica brasileira e foi a figura mais marcante do Barroco brasileiro.'
},
    {
      id: 3,
      name: 'Padre António Vieira',
      nickname: 'O Imperador da Língua Portuguesa',
      period: '1608-1697',
      birthPlace: 'Lisboa, Portugal',
      mainWork: 'Os Sermões',
      image: vieiraImg,
      description: 'Mestre do conceptismo e um dos maiores oradores sacros da língua portuguesa.',
      biography: (
        <>
          Padre Antônio Vieira foi um dos maiores oradores do período barroco e uma figura central da literatura luso-brasileira. Ele nasceu em Lisboa, mas viveu boa parte de sua vida no Brasil, principalmente em Salvador. Como jesuíta, dedicou-se à evangelização, à defesa dos povos indígenas e também foi conselheiro político do rei de Portugal.
          <br /><br />
          O sermão se tornou uma arma crucial para divulgar os valores da igreja romana, sendo bastante utilizado durante o século XVII, em meio às disputas entre católicos e protestantes.
        </>
      ),
      style: 'O estilo de escrita de Vieira é tipicamente barroco. Sua linguagem é rebuscada, marcada por contrastes, antíteses e paradoxos, recurso comum para transmitir a complexidade da vida humana diante de Deus. Fazia uso abundante de metáforas e imagens poéticas, muitas vezes retiradas da natureza ou do cotidiano, para ilustrar conceitos abstratos e espirituais. Além disso, sua oratória era dramática e persuasiva, sempre buscando tocar a razão e a emoção ao mesmo tempo.',
      works: ['Sermão da Sexagésima', 'Sermão pelo Bom Sucesso das Armas de Portugal contra as de Holanda', 'História do Futuro']
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
            Figuras <span className="text-primary">Importantes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça os grandes nomes que moldaram o Barroco na literatura brasileira.
          </p>
        </motion.div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {authorsData.map((author, index) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card 
                className="h-full hover-baroque cursor-pointer group"
                onClick={() => setSelectedAuthor(author)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                    <img 
                      src={author.image} 
                      alt={author.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {author.name}
                  </CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {author.nickname}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {author.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Author View Modal */}
        {selectedAuthor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedAuthor(null)}
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
                    src={selectedAuthor.image}
                    alt={selectedAuthor.name}
                    className="w-48 h-48 rounded-lg object-cover mx-auto mb-4 border-4 border-primary/20"
                  />
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    {selectedAuthor.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {selectedAuthor.nickname}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin size={14} />
                      <span>{selectedAuthor.birthPlace}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Calendar size={14} />
                      <span>{selectedAuthor.period}</span>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <User size={18} className="mr-2 text-primary" />
                      Biografia
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {selectedAuthor.biography}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Feather size={18} className="mr-2 text-primary" />
                      Estilo Literário
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {selectedAuthor.style}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <BookOpen size={18} className="mr-2 text-primary" />
                      Principais Obras
                    </h3>
                    <ul className="space-y-1">
                      {selectedAuthor.works.map((work, index) => (
                        <li key={index} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {work}
                        </li>
                      ))}
                      {selectedAuthor.worksNote && (
                        <li className="text-xs text-muted-foreground mt-2 italic">
                          {selectedAuthor.worksNote}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => setSelectedAuthor(null)}
                className="mt-6 w-full"
              >
                Fechar
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Authors
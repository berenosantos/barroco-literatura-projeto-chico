import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Coins, BookOpen, Users, Crown, Ship, Mountain } from 'lucide-react'

const Origins = () => {
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
            Origens do <span className="text-primary">Barroco</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como o movimento barroco surgiu na Europa e se desenvolveu no Brasil, 
            adaptando-se às realidades locais e criando características únicas.
          </p>
        </motion.div>

        {/* European Origins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Barroco Europeu
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover-baroque bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="text-blue-600" size={24} />
                  <CardTitle className="text-2xl text-blue-800">Surgimento na Itália</CardTitle>
                </div>
                <CardDescription className="text-blue-600">
                  Virada do século XVI para XVII
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  O movimento barroco nasceu na Itália no final do século XVI, especificamente em Roma, 
                  como uma resposta da Igreja Católica à Reforma Protestante. Artistas como Caravaggio, 
                  Bernini e Borromini criaram uma nova linguagem artística caracterizada pela dramaticidade, 
                  movimento e apelo emocional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Roma</Badge>
                  <Badge variant="secondary">Caravaggio</Badge>
                  <Badge variant="secondary">Bernini</Badge>
                  <Badge variant="secondary">Contrarreforma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="text-purple-600" size={24} />
                  <CardTitle className="text-2xl text-purple-800">Conexões Clássicas</CardTitle>
                </div>
                <CardDescription className="text-purple-600">
                  Tradição e inovação artística
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Embora mantivesse conexões com a cultura clássica greco-romana e renascentista, 
                  o barroco buscava caminhos próprios e inovadores. Os artistas barrocos não rejeitavam 
                  completamente a tradição, mas a reinterpretavam de forma mais dramática e emocional, 
                  criando uma síntese única entre tradição e modernidade.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Tradição Clássica</Badge>
                  <Badge variant="secondary">Inovação</Badge>
                  <Badge variant="secondary">Reinterpretação</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="text-amber-600" size={24} />
                  <CardTitle className="text-2xl text-amber-800">Dúvidas Existenciais</CardTitle>
                </div>
                <CardDescription className="text-amber-600">
                  A angústia do homem barroco
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                 O Barroco foi marcado por um período de constante conflito entre a fé e a razão, o corpo carnal e a alma, além da efemeridade da vida. A partir dessas oposições, nasceram dúvidas existenciais que moldaram a arte e a literatura da época, como o sentido da vida e qual é o certo entre o teocentrismo e o antropocentrismo. Ademais, essas dúvidas também tiveram grande influência na arte e na literatura barroca, enfatizando o uso de figuras de linguagem como antíteses e paradoxos, além dos contrastes entre o sagrado e o profano e o jogo do claro e escuro.

                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Brazilian Origins */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
            Barroco Brasileiro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover-baroque bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Crown className="text-green-600" size={20} />
                  <CardTitle className="text-lg text-green-800">Contexto Político</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Brasil colonial sob domínio português e espanhol (União Ibérica 1580-1640). 
                  Conflitos entre metropolitanos e colonos moldaram a expressão artística local.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Coins className="text-yellow-600" size={20} />
                  <CardTitle className="text-lg text-yellow-800">Economia Açucareira</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Havia uma gradual perda de clientes para a Holanda em relação à cana-de-açúcar. Esta era a base da economia colonial no período.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="text-red-600" size={20} />
                  <CardTitle className="text-lg text-red-800">Foco no Nordeste</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Os centros do Barroco no Brasil localizavam-se principalmente no Nordeste, na Bahia, por conta dos engenhos de cana-de-açúcar. A região gerou escritores famosos como Gregório de Matos e o Padre Antônio Vieira.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="text-blue-600" size={20} />
                  <CardTitle className="text-lg text-blue-800">Academias Literárias</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                   Entre 1720 e 1750, a literatura barroca brasileira recebeu um grande impulso a respeito das fundações de diversas academias literárias no país. Além disso, o desenvolvimento da arte barroca se viabilizou por conta da descoberta do ouro em minas gerais, sobretudo, manifestando no âmbito da arte religiosa produzida durante o seculo XVII.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Ship className="text-purple-600" size={20} />
                  <CardTitle className="text-lg text-purple-800">Influência Ibérica</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  Todo o material artístico e literário do Brasil advinha de origem portuguesa e, consequentemente, espanhola. Entre 1580-1640, Portugal e Espanha formaram uma só nação. Os escritores e artistas brasileiros tinham como modelo a estética cultivada em Portugal e na Espanha.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-baroque bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <Mountain className="text-orange-600" size={20} />
                  <CardTitle className="text-lg text-orange-800">Descoberta do Ouro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  A descoberta do ouro fez de Minas Gerais um centro para o Barroco, especialmente na arte religiosa. Produziu-se ali, no Barroco tardio, um dos maiores artistas brasileiros: Aleijadinho.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Prosopopeia Highlight */}
          <Card className="hover-baroque bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="text-primary" size={24} />
                <CardTitle className="text-2xl text-primary">Prosopopeia - Marco Inaugural</CardTitle>
              </div>
              <CardDescription className="text-lg">
                Bento Teixeira e o início oficial do Barroco brasileiro (1601)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A publicação de "Prosopopeia" por Bento Teixeira em 1601 marca oficialmente o início 
                do movimento barroco no Brasil. Este poema épico, inspirado em "Os Lusíadas" de Camões, 
                narra os feitos de Jorge de Albuquerque Coelho e representa a primeira manifestação 
                literária genuinamente barroca em solo brasileiro.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Características da Obra:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Poema épico em oitavas camonianas</li>
                    <li>• Influência direta de "Os Lusíadas"</li>
                    <li>• Temática heroica e colonial</li>
                    <li>• Linguagem rebuscada e cultista</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Importância Histórica:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Primeira obra barroca brasileira</li>
                    <li>• Modelo para autores posteriores</li>
                    <li>• Síntese entre tradição e inovação</li>
                    <li>• Marco da literatura colonial</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Challenges and Characteristics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <Card className="hover-baroque">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Dificuldades de Propagação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  O barroco brasileiro enfrentou dificuldades únicas de propagação devido ao isolamento 
                  das colônias, à censura metropolitana e à falta de imprensa local. Muitas obras 
                  circulavam apenas manuscritas, e a transmissão oral era fundamental para a 
                  disseminação da literatura.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-baroque">
              <CardHeader>
                <CardTitle className="text-xl text-secondary">Manifestação Literária</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  O barroco brasileiro caracterizou-se mais como uma manifestação literária do que 
                  como um estilo literário propriamente dito. Adaptou-se às condições locais, 
                  incorporando elementos da realidade colonial e criando uma síntese única entre 
                  influências europeias e características brasileiras.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Origins


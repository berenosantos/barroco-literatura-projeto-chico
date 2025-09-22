import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Clock, Brain, Scroll, Globe, Sparkles, Palette } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Home = () => {
  const features = [
    {
      icon: Scroll,
      title: 'Contexto Histórico',
      description: 'Entenda o cenário que moldou o Barroco',
      link: '/contexto',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Origens do Barroco',
      description: 'Descubra como o movimento surgiu na Europa e no Brasil',
      link: '/origens',
      color: 'text-green-500'
    },
    {
      icon: Sparkles,
      title: 'Características',
      description: 'Explore os traços marcantes da arte e literatura barroca',
      link: '/caracteristicas',
      color: 'text-yellow-500'
    },
    {
      icon: Palette,
      title: 'Figuras Globais',
      description: 'Conheça os grandes mestres do Barroco europeu',
      link: '/figuras-globais',
      color: 'text-purple-500'
    },
    {
      icon: Users,
      title: 'Autores Brasileiros',
      description: 'Aprofunde-se nos principais nomes da literatura barroca nacional',
      link: '/autores',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      title: 'Obras Essenciais',
      description: 'Analise as obras literárias e artísticas mais importantes',
      link: '/obras',
      color: 'text-secondary'
    },
    {
      icon: Clock,
      title: 'Linha do Tempo',
      description: 'Navegue pela cronologia completa do movimento',
      link: '/timeline',
      color: 'text-accent'
    },
    {
      icon: Brain,
      title: 'Quiz Interativo',
      description: 'Teste seus conhecimentos e aprenda de forma divertida',
      link: '/quiz',
      color: 'text-red-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-shadow">
              <span className="text-primary">Barroco</span> na
              <br />
              <span className="text-secondary">Literatura Brasileira</span>
            </h1>
            
            <div className="baroque-ornament mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Descubra a riqueza e complexidade do movimento barroco no Brasil, 
                suas características únicas, principais autores e obras que marcaram 
                a literatura colonial brasileira entre 1601 e 1768.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="hover-baroque">
                <Link to="/contexto" className="flex items-center space-x-2">
                  <span>Explorar Conteúdo</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="hover-baroque">
                <Link to="/timeline" className="flex items-center space-x-2">
                  <Clock size={20} />
                  <span>Ver Linha do Tempo</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 baroque-ornament">
              Explore o Movimento Barroco
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma jornada interativa pela literatura barroca brasileira, 
              com conteúdo didático e recursos educativos modernos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover-baroque cursor-pointer group">
                    <Link to={feature.link}>
                      <CardHeader className="text-center">
                        <div className={`mx-auto mb-4 p-3 rounded-full bg-primary/10 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={32} />
                        </div>
                        <CardTitle className="text-xl font-bold">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center text-base">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Context Section - Removed as it will be a dedicated page */}
    </div>
  )
}

export default Home



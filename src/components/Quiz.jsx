import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, RotateCcw, Trophy, Brain, Star } from 'lucide-react'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timerActive, setTimerActive] = useState(false)

  const questions = [
    {
      id: 1,
      question: "Qual o principal conflito ideológico que o Barroco reflete?",
      options: [
        "Entre o classicismo e o romantismo",
        "Entre o antropocentrismo e o teocentrismo",
        "Entre o racionalismo e o empirismo",
        "Entre o paganismo e o cristianismo"
      ],
      correct: 1,
      explanation: "O Barroco reflete o conflito entre o antropocentrismo (valorização do homem) do Renascimento e o teocentrismo (valorização de Deus) da Contrarreforma."
    },
    {
      id: 2,
      question: "Qual evento religioso teve grande influência no surgimento do Barroco?",
      options: [
        "Reforma Protestante",
        "Cruzadas",
        "Contrarreforma e Concílio de Trento",
        "Cisma do Ocidente"
      ],
      correct: 2,
      explanation: "A Contrarreforma Católica, impulsionada pelo Concílio de Trento, buscou reafirmar os dogmas da Igreja e influenciou a arte barroca a expressar dramaticidade e emoção religiosa."
    },
    {
      id: 3,
      question: "Onde o Barroco europeu teve seu surgimento?",
      options: [
        "França",
        "Espanha",
        "Itália",
        "Portugal"
      ],
      correct: 2,
      explanation: "O Barroco surgiu na Itália na virada do século XVI para o XVII, expandindo-se posteriormente pela Europa."
    },
    {
      id: 4,
      question: "Qual a obra que marca o início do Barroco na literatura brasileira?",
      options: [
        "Os Sermões",
        "Prosopopeia",
        "Poesia Satírica",
        "Caramuru"
      ],
      correct: 1,
      explanation: "A publicação de 'Prosopopeia' (1601), de Bento Teixeira, é considerada o marco inaugural do Barroco literário no Brasil."
    },
    {
      id: 5,
      question: "Qual região do Brasil foi o foco inicial do Barroco brasileiro?",
      options: [
        "Minas Gerais",
        "Rio de Janeiro",
        "Nordeste Brasileiro",
        "São Paulo"
      ],
      correct: 2,
      explanation: "O Barroco brasileiro teve seu foco inicial no Nordeste, especialmente na Bahia, devido ao ciclo da cana-de-açúcar e à presença de centros urbanos importantes."
    },
    {
      id: 6,
      question: "Qual característica barroca se refere ao contraste entre luz e sombra?",
      options: [
        "Conceptismo",
        "Cultismo",
        "Chiaroescuro",
        "Fusionismo"
      ],
      correct: 2,
      explanation: "O 'chiaroescuro' é uma técnica artística que utiliza fortes contrastes entre luz e sombra para criar dramaticidade, muito presente na pintura barroca."
    },
    {
      id: 7,
      question: "Quem é conhecido como 'Boca do Inferno' pela sua poesia satírica?",
      options: [
        "Padre António Vieira",
        "Bento Teixeira",
        "Gregório de Matos",
        "Aleijadinho"
      ],
      correct: 2,
      explanation: "Gregório de Matos Guerra recebeu o apelido de 'Boca do Inferno' devido à sua poesia satírica mordaz que criticava a sociedade baiana."
    },
    {
      id: 8,
      question: "Qual autor barroco é mestre do conceptismo e famoso por seus sermões?",
      options: [
        "Luís de Góngora",
        "Francisco de Quevedo",
        "Gregório de Matos",
        "Padre António Vieira"
      ],
      correct: 3,
      explanation: "Padre António Vieira é o maior expoente do conceptismo na língua portuguesa, conhecido por seus sermões de argumentação engenhosa."
    },
    {
      id: 9,
      question: "Qual pintor barroco é famoso pelo uso dramático do tenebrismo?",
      options: [
        "Rubens",
        "Rembrandt",
        "Velázquez",
        "Caravaggio"
      ],
      correct: 3,
      explanation: "Caravaggio revolucionou a pintura barroca com seu realismo e o uso intenso do claro-escuro, conhecido como tenebrismo."
    },
    {
      id: 10,
      question: "A 'efemeridade' no Barroco se refere a quê?",
      options: [
        "A permanência das obras de arte",
        "A fugacidade da vida e dos prazeres terrenos",
        "A busca pela eternidade divina",
        "A solidez das construções barrocas"
      ],
      correct: 1,
      explanation: "A efemeridade é uma característica barroca que expressa a consciência da transitoriedade da vida, da beleza e dos prazeres mundanos."
    }
  ]

  // Timer effect
  useEffect(() => {
    let interval = null
    if (timerActive && timeLeft > 0 && !showResult) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1)
      }, 1000)
    } else if (timeLeft === 0 && !showResult) {
      handleTimeUp()
    }
    return () => clearInterval(interval)
  }, [timerActive, timeLeft, showResult])

  const handleTimeUp = () => {
    setShowResult(true)
    setTimerActive(false)
    setAnswers([...answers, { questionId: questions[currentQuestion].id, selected: null, correct: false }])
  }

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correct
    if (isCorrect) setScore(score + 1)
    
    setAnswers([...answers, { 
      questionId: questions[currentQuestion].id, 
      selected: selectedAnswer, 
      correct: isCorrect 
    }])

    setShowResult(true)
    setTimerActive(false)
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowResult(false)
        setTimeLeft(30)
        setTimerActive(true)
      } else {
        setQuizCompleted(true)
      }
    }, 2000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
    setTimeLeft(30)
    setTimerActive(false)
  }

  const startQuiz = () => {
    setTimerActive(true)
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return { message: "Excelente! Você domina o Barroco!", icon: Trophy, color: "text-yellow-500" }
    if (percentage >= 70) return { message: "Muito bom! Bom conhecimento do Barroco!", icon: Star, color: "text-blue-500" }
    if (percentage >= 50) return { message: "Razoável! Continue estudando!", icon: Brain, color: "text-green-500" }
    return { message: "Precisa estudar mais sobre o Barroco!", icon: Brain, color: "text-red-500" }
  }

  if (!timerActive && currentQuestion === 0 && !quizCompleted) {
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 baroque-ornament">
              Quiz do <span className="text-primary">Barroco</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Teste seus conhecimentos sobre a literatura e arte barroca!
            </p>
            
            <Card className="baroque-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2">
                  <Brain className="text-primary" size={24} />
                  <span>Instruções do Quiz</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{questions.length} perguntas sobre o Barroco</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>30 segundos para responder cada pergunta</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Clique na resposta que considera correta</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Receba feedback imediato após cada resposta</span>
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={startQuiz}
              size="lg" 
              className="mt-8 hover-baroque"
            >
              Iniciar Quiz
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    const scoreData = getScoreMessage()
    const ScoreIcon = scoreData.icon
    
    return (
      <div className="min-h-screen py-20 px-4 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="baroque-border">
              <CardHeader>
                <div className={`mx-auto mb-4 p-4 rounded-full bg-primary/10 ${scoreData.color}`}>
                  <ScoreIcon size={48} />
                </div>
                <CardTitle className="text-3xl font-bold">Quiz Concluído!</CardTitle>
                <CardDescription className="text-xl">
                  {scoreData.message}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">
                    {score}/{questions.length}
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {Math.round((score / questions.length) * 100)}% de acertos
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="text-lg font-semibold">Resumo das Respostas:</h3>
                  {questions.map((question, index) => {
                    const answer = answers[index]
                    return (
                      <div key={question.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <span className="text-sm">Pergunta {index + 1}</span>
                        {answer?.correct ? (
                          <CheckCircle className="text-green-500" size={20} />
                        ) : (
                          <XCircle className="text-red-500" size={20} />
                        )}
                      </div>
                    )
                  })}
                </div>

                <Button 
                  onClick={resetQuiz}
                  className="w-full hover-baroque"
                  size="lg"
                >
                  <RotateCcw size={20} className="mr-2" />
                  Tentar Novamente
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Progress Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <Badge variant="outline">
              Pergunta {currentQuestion + 1} de {questions.length}
            </Badge>
            <Badge variant={timeLeft <= 10 ? "destructive" : "secondary"}>
              {timeLeft}s
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="baroque-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {question.options.map((option, index) => {
                    let buttonClass = "h-auto p-4 text-left justify-start hover-baroque"
                    
                    if (showResult) {
                      if (index === question.correct) {
                        buttonClass += " bg-green-100 border-green-500 text-green-800"
                      } else if (index === selectedAnswer && index !== question.correct) {
                        buttonClass += " bg-red-100 border-red-500 text-red-800"
                      }
                    } else if (selectedAnswer === index) {
                      buttonClass += " bg-primary/20 border-primary"
                    }

                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={buttonClass}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-primary">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span>{option}</span>
                          {showResult && index === question.correct && (
                            <CheckCircle className="ml-auto text-green-500" size={20} />
                          )}
                          {showResult && index === selectedAnswer && index !== question.correct && (
                            <XCircle className="ml-auto text-red-500" size={20} />
                          )}
                        </div>
                      </Button>
                    )
                  })}
                </div>

                {/* Answer Button */}
                {!showResult && (
                  <div className="mt-6 text-center">
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      size="lg"
                      className="hover-baroque"
                    >
                      {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima'}
                    </Button>
                  </div>
                )}

                {/* Explanation */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary"
                  >
                    <h4 className="font-semibold text-primary mb-2">Explicação:</h4>
                    <p className="text-muted-foreground">{question.explanation}</p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}


export default Quiz



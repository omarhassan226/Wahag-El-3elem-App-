import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { colors } from '../../colors/colors';

const quizQuestions = [
  {
    id: '1',
    title: 'Geography Quiz',
    RightAnswers:[{questionId:'1', answer:'Paris'}, {questionId:'2', answer:'Berlin'}],
    questions: [
      { id: '1', text: 'What is the capital of France?', choices: ['Paris', 'London', 'Rome'] },
      { id: '2', text: 'What is the capital of Germany?', choices: ['Berlin', 'Munich', 'Frankfurt'] },
    ],
  },
  {
    id: '2',
    title: 'Math Quiz',
    RightAnswers:[{questionId:'1', answer:'3'}, {questionId:'5', answer:'12'}],
    questions: [
      { id: '1', text: 'What is 2 + 2?', choices: ['3', '4', '5'] },
      { id: '2', text: 'What is 3 x 3?', choices: ['6', '9', '12'] },
    ],
  },
];



const QuizPopup = ({ questions, onClose, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); 

  // React.useEffect(() => {
  //   if (timeLeft <= 0) {
  //     handleComplete();
  //   }
  //   const timer = setInterval(() => {
  //     setTimeLeft(prevTime => prevTime - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [timeLeft]);

  const handleAnswerSelect = (questionId, answer) => {
    console.log(questionId, answer);
    
    setSelectedAnswers(prev => ([ ...prev, answer ]));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleComplete = () => {
    onComplete(selectedAnswers);
    onClose(selectedAnswers);
  };

  const question = questions[currentQuestionIndex];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200,
        cursor: 'pointer',
      }}
    >
      <Box sx={{ position: 'relative', width: '80%', maxWidth: '800px', bgcolor: 'white', borderRadius: '8px', p: 2 }}>
        <Typography variant="h6">Timer: {timeLeft} seconds</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>{question?.text}</Typography>
        <Box sx={{ mt: 2 }}>
          {question?.choices.map((choice, index) => (
            <Button
              key={index}
              variant={selectedAnswers[question.id] === choice ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleAnswerSelect(question.id, choice)}
              sx={{ display: 'block', mb: 1 }}
            >
              {choice}
            </Button>
          ))}
        </Box>
        <Box sx={{ mt: 2 }}>
          {currentQuestionIndex < questions.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNextQuestion}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleComplete}>
              Submit
            </Button>
          )}
        </Box>
        <Button onClick={() => handleComplete()} sx={{ position: 'absolute', top: 8, right: 8, color: 'black' }}>
          Close
        </Button>
      </Box>
    </Box>
  );
};

// UnCompletedSessions Component
const UnCompletedSessions = ({ onStartQuiz, id, title }) => (
  <Grid container spacing={2} alignItems="center" sx={{ direction: 'rtl', mb: 2 }}>
    <Grid item xs={12}>
      <Grid
        container
        sx={{
          backgroundColor: '#F2F2F2',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '50px',
          position: 'relative',
        }}
      >
        <Grid item xs={2} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ alignSelf: 'center', color: 'black' }}>الاختبار {title}</Typography>
        </Grid>
        <Grid
          item
          md={11}
          xs={8.5}
          sx={{
            width: '30%',
            padding: '5px',
            borderRadius: '50px',
            height: 15,
            position: 'absolute',
            left: '5px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            style={{
              backgroundColor: colors.lightBlue,
              width: '100%',
              color: 'white',
              borderRadius: '50px',
              height: '35px',
            }}
            onClick={onStartQuiz}
          >
            دخول
          </button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

// CompletedSessions Component
const CompletedSessions = ({ onStartQuiz, id, title, totalQuestions, answeredQuestions }) => {
  const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);

  return (
    <Grid onClick={() => onStartQuiz(id)} container spacing={2} alignItems="center" sx={{ direction: 'rtl', mb: 2, cursor: 'pointer' }}>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            backgroundColor: '#3C7098',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '50px',
            position: 'relative',
          }}
        >
          <Grid item xs={2} md={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: 'white', alignSelf: 'center', paddingRight: '5px' }}>الاختبار {title}</Typography>
          </Grid>
          <Grid
            item
            md={11}
            xs={8.5}
            sx={{
              width: progressPercentage+'%',
              padding: '5px',
              borderRadius: '50px',
              height: 25,
              backgroundColor: '#f5f5f5',
              position: 'absolute',
              left: '5px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ color: colors.lightBlue, alignSelf: 'center', paddingRight: '5px' }}>
              {progressPercentage < 100 ? progressPercentage+ '%' : progressPercentage + 'مكتمل%'}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const StudentsTests = () => {
  const [quizVisible, setQuizVisible] = useState(false);
  const [quizProgress, setQuizProgress] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizQuestions1, setQuizQuestions1] = useState(quizQuestions)

  const handleStartQuiz = (id) => {
    const quiz = quizQuestions.find((quiz) => quiz.id == id);
    if (quiz) {
      setCurrentQuiz(quiz.questions);
      setQuizVisible(true);
    }
  };

  const handleQuizComplete = (answers) => {
    const updatedProgress = [ ...quizProgress, ...answers ];
    setQuizProgress(updatedProgress);
  };

  const handleCloseQuiz = (answers) => {
    const updatedProgress = [ ...quizProgress, ...answers ];
    setQuizProgress(updatedProgress);
    setQuizVisible(false);
  };

  const getAnsweredQuestionsCount = (id) => {
    return Object.keys(quizProgress).filter(key => key.startsWith(id)).length;
  };

  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        bgcolor: 'white',
        borderRadius: '8px',
        boxShadow: 1,
        maxHeight: '300px',
        overflowY: 'auto',
      }}
    >
      {quizQuestions.map((quiz, index) => (
        <Box key={quiz.id}>
          {quizProgress[quiz.id-1] ? (
            <CompletedSessions
              onStartQuiz={handleStartQuiz}
              id={quiz.id}
              title={quiz.title}
              totalQuestions={quiz.questions.length}
              answeredQuestions={getAnsweredQuestionsCount(quiz.id)}
            />
          ) : (
            <UnCompletedSessions onStartQuiz={() => handleStartQuiz(quiz.id)} id={quiz.id} title={quiz.title} />
          )}
        </Box>
      ))}
      {quizVisible && (
        <QuizPopup
          questions={currentQuiz}
          onClose={handleCloseQuiz}
          onComplete={handleQuizComplete}
        />
      )}
    </Box>
  );
};

export default StudentsTests;

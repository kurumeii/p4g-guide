import type { ExamReturnType, ExamTypes } from '@/types'

export const Exams: Partial<Record<ExamTypes, ExamReturnType[]>> = {
  popQuiz: [
    {
      date: '4/14',
      question: 'What is the year before 1 A.D. called?',
      answer: '1 B.C.',
    },
    {
      date: '4/18',
      question:
        'The word "alphabet" comes from the word "alpha" and what other one?',
      answer: 'Beta',
    },
    {
      date: '4/20',
      question: 'Help a friend',
      answer: 'Three',
    },
    {
      date: '4/23',
      question: " What's this ergonomic bubble she's talking about?",
      answer: 'Tulip mania',
    },
    {
      date: '4/25',
      question:
        "What's it called when you gain more muscle after getting sore through exercise?",
      answer: 'Overcompensation',
    },
    {
      date: '4/26',
      question: 'Help a Friend',
      answer: 'Marriage numbers',
    },
    {
      date: '4/30',
      question: 'What is the greatest canyon in the solar system?',
      answer: 'Valles Marineris',
    },
    {
      date: '5/7',
      question:
        'Do you know how Soseki Natsume translated the English phrase "I Love you" into Japanese?',
      answer: "The Moon is beautiful, isn't it?",
    },
    {
      date: '5/26',
      question: 'Something about laborers?',
      answer: 'Attendance logs',
    },
    {
      date: '6/8',
      question: 'What sport is "heikin-dai"?',
      answer: 'Balance Beam',
    },
    {
      date: '6/1',
      question: ' What kind of excercise is a sprint classified as?',
      answer: 'Anaerobic',
    },
    {
      date: '6/1',
      question: 'Tell me what morale is!',
      answer: 'Cheerfulness of a group',
    },
  ],
}

import type { ExamReturnType, ExamTypes } from '@/types'

export const EXAMS: Partial<Record<ExamTypes, ExamReturnType[]>> = {
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
      question: 'Help a friend',
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
      date: '6/13',
      question: ' What kind of excercise is a sprint classified as?',
      answer: 'Anaerobic',
    },
    {
      date: '6/15',
      question: 'Tell me what morale is!',
      answer: 'Cheerfulness of a group',
    },
    {
      date: '6/20',
      question: 'What period did Japan first implement Bonus pay?',
      answer: 'Meiji',
    },
    {
      date: '6/27',
      question: 'Answer this: What is identity',
      answer: 'Individuality',
    },
    {
      date: '6/30',
      question: 'Which one of these is the name of a real river',
      answer: 'Pis Pis River',
    },
    {
      date: '7/4',
      question:
        'Who said this: “Man is but a reed, the most feeble thing in nature; but he is a thinking reed?”',
      answer: 'Pascal',
    },
    {
      date: '7/7',
      question: 'What is the beginning of “Gakumon no Susume” a reference to',
      answer: 'The U.S. Declaration of Independence.',
    },
    {
      date: '7/13',
      question: 'What is the medical term for brainfreeze?',
      answer: 'Sphenopalatine Ganglioneuralgia',
    },
    {
      date: '7/14',
      question:
        'Which famous Heian-ero monk famously used a wrong version of the kanji?',
      answer: 'KuuKai',
    },
    {
      date: '7/15',
      question: 'Which line can a typhoon never cross',
      answer: 'The equator',
    },
    {
      date: '7/16',
      question:
        'Tell me what makes the king of hearts look different from the other kings in a standard deck of cards.',
      answer: 'He has no mustache',
    },
    {
      date: '11/1',
      question: 'Tell me what the “figure” in “figure skating” refers to!',
      answer: 'Geometric Shapes',
    },
    {
      date: '11/4',
      question: 'Sorry, I have no idea.',
      answer: 'A cuckoo.',
    },
    {
      date: '11/7',
      question: 'Which country do you think the South Pole belongs to',
      answer: 'No country',
    },
    {
      date: '11/11',
      question: 'What desert is the Welwitschia from?',
      answer: 'Namib',
    },
    {
      date: '11/17',
      question: 'Is that even in a textbook? The roots of “bridal”? What…?',
      answer: 'Bride ale',
    },
    {
      date: '11/22',
      question: ' Do you know what an “atlas” is?',
      answer: 'A book of maps',
    },
    {
      date: '11/24',
      question: '0, 1, 1, 2, 3, 5, 8, 13… what is this sequence called?',
      answer: 'Fibonacci sequence',
    },
    {
      date: '11/25',
      question:
        'There are over 130 ancient pyramids in Egypt, but do you know who’s buried in the biggest one?',
      answer: 'Khufu',
    },
    {
      date: '11/26',
      question: 'Which one of these is considered a “rice cake”?',
      answer: 'Mochi',
    },
    {
      date: '1/10',
      question:
        'Tell me, what are you supposed to put on top of a kagami mochi',
      answer: 'An orange',
    },
    {
      date: '1/14',
      question:
        '“Toso” is a traditional drink for the new year, but what does the name mean?',
      answer: 'Bury the demons',
    },
    {
      date: '1/19',
      question:
        'In the Thai and Vietnamese Zodiacs, which animal is used in the place of the rabbit?',
      answer: 'Cat',
    },
    {
      date: '1/25',
      question: 'European snow in spring…? Do you know?',
      answer: 'Red',
    },
    {
      date: '1/30',
      question: 'What’s the next unit of measurement up from a terabyte?',
      answer: 'Petabyte',
    },
    {
      date: '2/1',
      question: 'What color were the pyramids originally',
      answer: 'White',
    },
  ],
  midterms: [
    {
      date: '5/9',
      question: 'What is it called when muscles grow after exercise?',
      answer: 'Overcompensation',
    },
    {
      date: '5/9',
      question: 'What is the year before 1 A.D. called?',
      answer: '1 B.C.',
    },
    {
      date: '5/10',
      question: 'Which of these numbers does not exist',
      answer: 'Marriage numbers.',
    },
    {
      date: '5/10',
      question:
        'Who translated “I love you” as “The moon is beautiful, isn’t it?”',
      answer: 'Soseki Natsume',
    },
    {
      date: '5/11',
      question:
        'Who said, "“As soon as laws are necessary for men, they are no longer fit for freedom?"',
      answer: 'Pythagoras',
    },
    {
      date: '5/11',
      question:
        'Which of the following is the highest mountain in the solar system?',
      answer: 'Olympus Mons',
    },
    {
      date: '5/26',
      question:
        'Tell me how the theory that the pyramids were built by slaves was disproven',
      answer: 'Attendance logs',
    },
    {
      date: '9/1',
      question: '“Venison” is the meat of which animal?',
      answer: 'All of the Above',
    },
    {
      date: '9/5',
      question: 'Which of the following is a kigo for fall?',
      answer: 'Brisk',
    },
    {
      date: '9/17',
      question: 'How short was history’s shortest war?',
      answer: '40 minutes',
    },
    {
      date: '9/20',
      question:
        'What do you call somebody who’s between ninety and one hundred years old?',
      answer: 'Nonagenarian',
    },
    {
      date: '9/28',
      question: 'Do you know the answer',
      answer: 'Throat',
    },
    {
      date: '10/4',
      question: 'Which of these sports also uses an anchor',
      answer: 'Tug-of-war',
    },
    {
      date: '10/5',
      question: 'Did you know the answer',
      answer: 'The right edge. ',
    },
    {
      date: '10/8',
      question: 'Tell me what bird’s name means “coward” in English!',
      answer: 'Chicken',
    },
    {
      date: '10/11',
      question: 'What did Napoleon have invented?',
      answer: 'Glass jars',
    },
    {
      date: '10/12',
      question:
        'Do you know what vegetable was used to make the first Jack o’ Lantern?',
      answer: 'Turnips',
    },
    {
      date: '10/13',
      question: 'What kind of fish was I talking about?',
      answer: 'Ojisan',
    },
    {
      date: '10/14',
      question: 'What part of the body contains the “Adam’s Apple”?',
      answer: 'Throat',
    },
    {
      date: '10/14',
      question: 'Where would you find Japan on a map made in a foreign country',
      answer: 'The right edge',
    },
    {
      date: '10/15',
      question: 'How short was history’s shortest war?',
      answer: '40 minutes',
    },
    {
      date: '10/15',
      question: ' “Venison” is the meat of what animal?',
      answer: 'All of the above',
    },
    {
      date: '10/17',
      question: 'What is the Japanese name for “panda”?',
      answer: 'Black and White Bear',
    },
    {
      date: '10/17',
      question:
        'Which bird is falsely known for being cowardly in the English phrase “to stick one’s head in the sand”',
      answer: 'Ostrich',
    },
    {
      date: '10/18',
      question:
        'What was the name of the Wasan textbook that came out in the Edo period?',
      answer: 'Math girl',
    },
    {
      date: '10/18',
      question: 'What did Napoleon have invented',
      answer: 'Glass jars',
    },
    {
      date: '10/19',
      question: 'Which season is the adjective “brisk” a kigo for?',
      answer: 'Fall',
    },
    {
      date: '10/19',
      question: 'What is “Dragon’s Blood”?',
      answer: 'Plant resin',
    },
  ],
  finals: [
    {
      date: '7/19',
      question: 'What is morale?',
      answer: 'Cheerfulness of a group',
    },
    {
      date: '7/19',
      question: 'What sport is “heikin-dai”?',
      answer: 'Balance Beam',
    },
    {
      date: '7/20',
      question:
        'It is said, “Even Kobo made mistakes in writing.” Which Kanji did he make a mistake on?',
      answer: 'Top',
    },
    {
      date: '7/20',
      question: 'In which period did Japan first implement bonus pay',
      answer: 'Meiji',
    },
    {
      date: '7/21',
      question: 'Which king in a deck of cards is missing a mustache',
      answer: 'King of Hearts',
    },
    {
      date: '7/21',
      question:
        'Who said this: “Man is but a reed, the most feeble thing in nature; but he is a thinking reed”? ',
      answer: 'Pascal',
    },
    {
      date: '7/22',
      question: 'Which one of these is the name of a real river?',
      answer: 'Pis Pis River',
    },
    {
      date: '7/22',
      question: 'What is the beginning of “Gakumon no Susume” a reference to',
      answer: 'The U.S. Declaration of Independence.',
    },
    {
      date: '7/23',
      question: 'Knowledge stat check lv4',
      answer: 'Knowledge stat check lv4',
    },
    {
      date: '11/28',
      question: 'What does French food stem from',
      answer: 'Italian food',
    },
    {
      date: '11/28',
      question: 'What does the “figure” in “figure skating” refer to?',
      answer: 'Geometric shapes',
    },
    {
      date: '11/29',
      question: 'Who is buried in the biggest pyramid in Egypt?',
      answer: 'Khufu',
    },
    {
      date: '11/29',
      question: 'What is the book of maps called?',
      answer: 'Atlas',
    },
    {
      date: '11/30',
      question: 'What word has the words “bride ale” as its roots?',
      answer: 'Bridal',
    },
    {
      date: '11/30',
      question: 'What kind of bird is a “kanko-dori”',
      answer: 'A Cuckoo',
    },
    {
      date: '12/1',
      question: 'Which country does the South Pole belong to?',
      answer: 'No country',
    },
    {
      date: '12/1',
      question: '0, 1, 1, 2, 3, 5, 8, 13… What is this sequence called?',
      answer: 'Fibonacci sequence',
    },
    {
      date: '12/2',
      question: 'What desert is the Welwitschia found in?',
      answer: 'Namib',
    },
    {
      date: '12/2',
      question: 'Which of these is considered a “rice cake”?',
      answer: 'Mochi',
    },
    {
      date: '12/3',
      question: 'Knowledge stat check max lv',
      answer: 'Knowledge stat check max lv',
    },
  ],
  advanced: [
    {
      date: '2/6 ',
      question:
        'The word “alphabet” comes from the words “alpha” and what other one?',
      answer: 'Beta',
    },
    {
      date: '2/6',
      question:
        'How was the theory that the pyramids were built by slaves disproven?',
      answer: 'Attendance logs',
    },
    {
      date: '2/7',
      question: 'What drink name means “bury demons”?',
      answer: 'Toso',
    },
    {
      date: '2/7',
      question: 'What is the medical term for brainfreeze?',
      answer: 'Sphenopalatine Ganglioneuralgia',
    },
    {
      date: '2/8',
      question:
        'What is the Japanese Zodiac equivalent to the “cat” in the Thai and Vietnamese Zodiacs?',
      answer: 'Cat',
    },
    {
      date: '2/8',
      question: 'What vegetable was first used to make Jack o’ Lanterns?',
      answer: 'Turnips',
    },
    {
      date: '2/9',
      question: 'What color were the pyramids when they were first built?',
      answer: 'White',
    },
    {
      date: '2/9',
      question:
        'What gets mixed with snow in Europe that sometimes causes it to turn red?',
      answer: 'The Sahara Desert sand',
    },
  ],
}

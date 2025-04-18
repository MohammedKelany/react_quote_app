const quotesList = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    text: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    text: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "Vas Montinigro",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Everything has beauty, but not everyone sees it.",
    author: "Confucius",
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  { text: "Limit your 'always' and your 'nevers'.", author: "Amy Poehler" },
  { text: "Try to be a rainbow in someone’s cloud.", author: "Maya Angelou" },
  { text: "Nothing will work unless you do.", author: "Maya Angelou" },
  {
    text: "Sometimes you will never know the value of a moment, until it becomes a memory.",
    author: "Dr. Seuss",
  },
  { text: "When you know better, you do better.", author: "Maya Angelou" },
  { text: "The best way out is always through.", author: "Robert Frost" },
  {
    text: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    text: "In a gentle way, you can shake the world.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Failure is the condiment that gives success its flavor.",
    author: "Truman Capote",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Don't wait. The time will never be just right.",
    author: "Napoleon Hill",
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    text: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    text: "If opportunity doesn’t knock, build a door.",
    author: "Milton Berle",
  },
  {
    text: "Shoot for the moon. Even if you miss, you'll land among the stars.",
    author: "Norman Vincent Peale",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Believe in yourself and all that you are.",
    author: "Christian D. Larson",
  },
  {
    text: "Learn as if you will live forever, live like you will die tomorrow.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  { text: "A goal is a dream with a deadline.", author: "Napoleon Hill" },
  {
    text: "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranath Tagore",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Success is how high you bounce when you hit bottom.",
    author: "George S. Patton",
  },
  {
    text: "He who opens a school door, closes a prison.",
    author: "Victor Hugo",
  },
  {
    text: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    author: "Roy T. Bennett",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    text: "Live in the sunshine, swim in the sea, drink the wild air.",
    author: "Ralph Waldo Emerson",
  },
  { text: "Light tomorrow with today.", author: "Elizabeth Barrett Browning" },
  {
    text: "You do not find the happy life. You make it.",
    author: "Camilla Eyring Kimball",
  },
  { text: "The power of imagination makes us infinite.", author: "John Muir" },
  {
    text: "With the new day comes new strength and new thoughts.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "A champion is defined not by their wins but by how they can recover when they fall.",
    author: "Serena Williams",
  },
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
  },
  {
    text: "Don’t count the days, make the days count.",
    author: "Muhammad Ali",
  },
  { text: "I never dream of success. I work for it.", author: "Estee Lauder" },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Act as though it were impossible to fail.",
    author: "Dorothea Brande",
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    text: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
  },
  {
    text: "Keep going. Everything you need will come to you at the perfect time.",
    author: "Unknown",
  },
  {
    text: "Make your life a masterpiece; imagine no limitations on what you can be, have or do.",
    author: "Brian Tracy",
  },
  {
    text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
  },
  {
    text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    author: "Mary Anne Radmacher",
  },
  {
    text: "Success is getting what you want. Happiness is wanting what you get.",
    author: "Dale Carnegie",
  },
  { text: "You can if you think you can.", author: "George Reeves" },
];

export default quotesList;

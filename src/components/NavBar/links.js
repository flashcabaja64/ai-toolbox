import { FontDownload, Summarize, QuestionAnswer, ChatBubble, Image, Lyrics } from '@mui/icons-material';

export const textLinks = [
  {
    heading: "Text To Image",
    subHeading: "Convert your text into images",
    path: "/text-to-image",
    component: <Image />
  },
  {
    heading: "Summarize your text",
    subHeading: "Condense your text into bite-size pieces",
    path: "/summarization",
    component: <Summarize />
  },
  {
    heading: "Questions & Answers",
    subHeading: "Ask a question, get an answer",
    path: "/questions-answers",
    component: <QuestionAnswer />
  },
  {
    heading: "ChatGPT",
    subHeading: "Have a chat with AI",
    path: "/chatgpt",
    component: <ChatBubble />
  },
];

export const imageLinks = [
  {
    heading: "Image To Text",
    subHeading: "Convert your images to text",
    path: "/image-to-text",
    component: <FontDownload />
  },
];

export const audioLinks = [
  {
    heading: "Text To Speech",
    subHeading: "Convert your text into speech audio",
    path: "/text-to-speech",
    component: <Lyrics />
  },
]
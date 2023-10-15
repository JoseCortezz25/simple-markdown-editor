import { useState } from 'react'
import { Editor } from './components/Editor'
import { Preview } from './components/Preview'
import { Header } from './components/Header'
import { jsPDF } from 'jspdf';
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css'
import dompurify from 'dompurify';

function App() {
  const [markdown, setMarkdown] = useState('# Markdown Editor')


  const handleMarkdownToPDF = () => {
    const doc = new jsPDF();

    const marked = new Marked(
      markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      })
    );
    
    const parsed = dompurify.sanitize(marked.parse(markdown) as string);

    doc.text(parsed, 10, 10);
    doc.save(`${Date.now()}.pdf`);
  }

  return (
    <main className="w-full h-screen overflow-hidden md:grid md:grid-cols-2 bg-gray-800">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
      <Header onDownloadFile={handleMarkdownToPDF} />
    </main>
  )
}

export default App

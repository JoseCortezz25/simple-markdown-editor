import React from 'react'
import dompurify from 'dompurify';
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css'

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
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
  return (
    <section className='overflow-scroll no-scrollbar'>
      <div className="fixed w-full bg-gray-900 p-3 text-lg text-gray-200 tracking-wider uppercase">Preview</div>
      <div className='text-gray-200 p-4 prose prose-invert prose-headings:underline mt-12' dangerouslySetInnerHTML={{ __html: parsed }} />
    </section>
  )
}

export { Preview }
import React from 'react'

interface EditorProps {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

const Editor: React.FC<EditorProps> = ({ markdown, setMarkdown }) => {
  return (
    <section className='border-r border-gray-200'>
      <div className="w-full bg-gray-900 p-3 text-lg text-gray-200 tracking-wider uppercase no-scrollbar">Markdown</div>
      <textarea className='w-full h-[90vh] no-scrollbar bg-gray-800 text-gray-200 outline-none p-4' onChange={(e) => setMarkdown(e.target.value)}>{markdown}</textarea>
    </section>
  )
}

export { Editor }
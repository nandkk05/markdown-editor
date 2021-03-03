import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {

  const [input, setInput] = useState();

  return (
    <div className="App">
    
     
      <textarea className="textarea" value={input} onChange={
        (e)=> setInput(e.target.value)
      }/>

      <ReactMarkdown source={input} className="markdown" renderers={{
        code: Component
      }}/>
    </div>
  );
}


const Component = ({value, lang}) => {
  return (
    <SyntaxHighlighter language={lang ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  );
};

export default App;

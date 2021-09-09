import marked from 'marked';
import hljs from 'highlight.js';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../contexts/Context';

const Preview = () => {
  const { value } = useContext(Context);
  const textTODisplay = marked(value);

  useEffect(() => {
    hljs.highlightAll()
  }, [value])
  return (
    <div className="row">
      <div dangerouslySetInnerHTML={{ __html: textTODisplay }} className='preview'></div>
      <div className='toolbar'>
      </div>
    </div>
  );
};

export default Preview;
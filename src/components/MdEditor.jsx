import { useEffect, useContext, useRef } from 'react';
import theme from '../themes/main.json';
import { Context } from '../contexts/Context';
import { useLocation, useHistory } from 'react-router-dom';
import { emmetHTML } from 'emmet-monaco-es';
import Editor, { useMonaco } from '@monaco-editor/react';

const MdEditor = () => {
  const monaco = useMonaco();
  const history = useHistory();
  const location = useLocation();

  const editorRef = useRef(null);
  const id = new URLSearchParams(location.search).get('noter');
  const noter = JSON.parse(localStorage.getItem('noters')).find(
    (not) => not.id === id
  );
  const { value, setValue } = useContext(Context);

  useEffect(() => {
    if (!noter) {
      history.push('/404');
    }
    monaco?.editor?.defineTheme('mynewtheme', theme);
    monaco?.editor?.setTheme('mynewtheme', theme);
    setValue(noter?.data);
  }, [monaco]);

  const handleEditorDidMount = () => {
    emmetHTML(editorRef.current);
    console.log(editorRef.current);
  };

  setTimeout(() => {
    const currentNoters = JSON.parse(localStorage.getItem('noters'));
    if (currentNoters.find((not) => not.id === id)) {
      currentNoters.find((not) => not.id === id).data = value;
    }
    localStorage.setItem('noters', JSON.stringify(currentNoters));
  }, 1000);

  const handleChange = (data) => {
    setValue(data);
  };
  return (
    <span>
      <Editor
        ref={editorRef}
        height="100vh"
        width="50vw"
        language="markdown"
        defaultLanguage="markdown"
        value={value}
        theme="main"
        editorDidMount={handleEditorDidMount}
        options={{
          fontSize: 20,
          fontFamily: 'Cascadia Code',
          fontLigatures: true,
          lineHeight: 35,
          minimap: {
            enabled: false,
          },
        }}
        onChange={(data) => handleChange(data)}
      />
    </span>
  );
};

export default MdEditor;

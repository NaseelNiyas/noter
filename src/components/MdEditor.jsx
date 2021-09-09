import { useEffect } from 'react';
import { useContext } from 'react';
import theme from '../themes/main.json';
import { Context } from '../contexts/Context';
import Editor, { useMonaco } from "@monaco-editor/react";

const MdEditor = () => {
  const monaco = useMonaco();
  const { value, setValue } = useContext(Context);

  useEffect(() => {
    monaco?.editor?.defineTheme('mynewtheme', theme);
    monaco?.editor?.setTheme('mynewtheme', theme);
  }, [monaco]);
  return (
    (
      <Editor
        height="100vh"
        width='50vw'
        language="markdown"
        defaultLanguage="markdown"
        defaultValue={value}
        theme='main'
        options={{
          fontSize: 20,
          fontFamily: 'Cascadia Code',
          fontLigatures: true,
          lineHeight: 35
        }}
        onChange={(data) => setValue(data)}
      />
    )
  );
};

export default MdEditor;

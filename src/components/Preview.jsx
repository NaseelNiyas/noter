import marked from 'marked';
import hljs from 'highlight.js';
import sanitizeHtml from 'sanitize-html';
import options from '../utils/codeOptions';
import { Context } from '../contexts/Context';
import { IoColorPalette, IoHomeOutline } from 'react-icons/io5';
import { AiOutlineFontSize } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

const Preview = () => {
  const { value } = useContext(Context);
  const [previewTheme, setPreviewTheme] = useState(
    localStorage.getItem('previewTheme')
  );
  const [previewFont, setPreviewFont] = useState(
    localStorage.getItem('previewFont')
  );
  const textTODisplay = sanitizeHtml(marked(value), options);
  useEffect(() => {
    hljs.highlightAll();
  }, [value]);

  useEffect(() => {
    if (!previewTheme) {
      localStorage.setItem('previewTheme', 'dark');
    }
    if (!previewFont) {
      localStorage.setItem('previewFont', 'Open Sans');
    }
  }, [previewTheme, previewFont]);
  const handleThemeChange = (e) => {
    setPreviewTheme(e.target.value);
    localStorage.setItem('previewTheme', e.target.value);
  };
  const handleFontChange = (e) => {
    setPreviewFont(e.target.value);
    localStorage.setItem('previewFont', e.target.value);
  };
  return (
    <div className="row">
      <div
        dangerouslySetInnerHTML={{ __html: textTODisplay }}
        className={`preview  ${
          previewTheme === 'editor-theme' && 'preview-editor-theme'
        } ${previewTheme === 'dark' && 'preview-dark'}`}
        style={{ fontFamily: `${previewFont}` }}
      ></div>
      <div className="toolbar">
        <div className="preview-settings">
          <div className="theme">
            <label htmlFor="previewTheme">
              Preview Theme <IoColorPalette />
            </label>
            <select
              id="previewTheme"
              value={previewTheme}
              onChange={(e) => handleThemeChange(e)}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="editor-theme">Editor</option>
            </select>
          </div>
          <div className="font">
            <label htmlFor="previewFont">
              Preview Font <AiOutlineFontSize />
            </label>
            <input
              type="text"
              value={previewFont}
              onChange={(e) => handleFontChange(e)}
              style={{ marginLeft: '5px' }}
            />
          </div>
        </div>
        <div className="home-link">
          <Link to="/">
            <h2>
              Go to Home Page <IoHomeOutline />
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Preview;

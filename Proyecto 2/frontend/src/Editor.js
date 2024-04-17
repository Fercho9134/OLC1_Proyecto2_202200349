// Editor.js
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { POST } from './api.js';
import './Editor.css'; // Importar estilos CSS
import Header from './Header.js';

export function EditorT() {
  const editorRef = useRef(null);
  const [resultado, setResultado] = useState("");

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    POST("http://localhost:8000/interpretar", editorRef.current.getValue()).then(res => {
      console.log(res.resultado);
      setResultado(res.resultado);
    });
    //alert(editorRef.current.getValue());
  }

  return (
    <>
      <Header />
      <div className="editor-container"> {/* Clase CSS para el contenedor */}
        <Editor
          height="60vh"
          width={"100vh"}
          defaultLanguage="javascript"
          defaultValue="// Tu código aqui"
          theme='vs-dark'
          onMount={handleEditorDidMount}
        />
        <textarea className="resultado-textarea" value={resultado} readOnly /> {/* Clase CSS para el textarea */}
      </div>
      <button className="interpretar-button" onClick={showValue}>Interpretar</button> {/* Clase CSS para el botón */}
    </>
  );
}

// Editor.js
import React, { useRef, useState } from 'react';
import Editor from '@monaco-editor/react';
import { POST } from './api.js';
import './Editor.css'; // Importar estilos CSS
import Header from './Header.js';

export function EditorT() {
  const editorRef = useRef(null);
  const [resultado, setResultado] = useState("");

  const handleFileOpen = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.sc'; // Puedes ajustar esto para aceptar diferentes tipos de archivos
    
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const content = e.target.result;
        if (editorRef.current) {
          editorRef.current.setValue(content);
        }
      };
      
      reader.readAsText(file);
    };
    
    input.click();
  };

  const handleSaveFile = () => {
    const content = editorRef.current.getValue();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo.sc'; // Nombre del archivo con extensión .sc
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

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
      <Header onFileOpen={handleFileOpen} onSave={handleSaveFile}  />
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

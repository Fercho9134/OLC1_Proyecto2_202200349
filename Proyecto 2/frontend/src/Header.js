// Header.js
import React from 'react';
import './Editor.css'; // Importamos estilos CSS

const Header = ({ onFileOpen, onSave }) => {
  const handleFileOpen = () => {
    onFileOpen();
  };

  const handleSaveFile = () => {
    onSave();
  };

  const handleCreateFile = () => {
    window.open(window.location.href, '_blank');
  };

  const handleGenerateAST = () => {
    // Aquí debes cargar la imagen del árbol AST
    const treeASTImageUrl = 'C:/Users/ferch/Documents/Repositorios Github/OLC1_Proyecto2_202200349/Proyecto 2/frontend/src/graphviz.svg';
  
    // Abrir una nueva ventana
    const newWindow = window.open('', '_blank');
    
    // Manipular el contenido de la nueva ventana
    if (newWindow) {
      newWindow.document.write('<html><head><title>Árbol AST</title></head><body>');
      newWindow.document.write('<img src="' + treeASTImageUrl + '" alt="Árbol AST">');
      newWindow.document.write('</body></html>');
    } else {
      alert('No se pudo abrir una nueva ventana.');
    }
  };



  return (
    <header className="header">
      <div className="menu">
        <div className="menu-item">Archivo
          <div className="submenu">
            <div className="submenu-item" onClick={handleCreateFile}>Crear archivo</div>
            <div className="submenu-item" onClick={handleFileOpen}>Abrir archivo</div>
            <div className="submenu-item" onClick={handleSaveFile}>Guardar archivo</div>
          </div>
        </div>
        <div className="menu-item">Reportes
          <div className="submenu">
            <div className="submenu-item">Reporte de errores</div>
            <div className="submenu-item" onClick={handleGenerateAST}>Generar árbol AST</div>
            <div className="submenu-item">Reporte de tabla de símbolos</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

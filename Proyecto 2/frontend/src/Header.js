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
            <div className="submenu-item">Generar árbol AST</div>
            <div className="submenu-item">Reporte de tabla de símbolos</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

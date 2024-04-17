// Header.js
import React from 'react';
import './Editor.css'; // Importamos estilos CSS

const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <div className="menu-item">Archivo
          <div className="submenu">
            <div className="submenu-item">Crear archivo</div>
            <div className="submenu-item">Abrir archivo</div>
            <div className="submenu-item">Guardar archivo</div>
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

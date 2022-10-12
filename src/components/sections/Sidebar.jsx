import { NavLink } from "react-router-dom";
import { ReactComponent as Tabla } from '../../assets/svg/tabla.svg';
import { ReactComponent as TablaG } from '../../assets/svg/tabla-g.svg';
import { ReactComponent as Reportes } from '../../assets/svg/reportes.svg';
import { ReactComponent as Herramientas } from '../../assets/svg/herramientas.svg';
import { ReactComponent as Empresas } from '../../assets/svg/empresas.svg';
import { ReactComponent as Down } from '../../assets/svg/down.svg';
import { useRef } from "react";


const Sidebar = () => {
  const menu = [
    {
      title: 'Tabla',
      items: ['Plan Contable', 'Grupos Contables', 'Dpto. Empresarial', 'Centro de Costos', 'Bancos'],
      logo: <Tabla className='nav__icon--item' />
    },
    {
      title: 'Tabla General',
      items: ['Tipo de Documentos', 'Unidad Economica', 'Zona', 'Tipo de Moneda'],
      logo: <TablaG className='nav__icon--item' />
    },
    {
      title: 'Reportes',
      items: ['Diario simplificado', 'Libro Mayor', 'Libro Caja y Bancos', 'Registro de Compras', 'Registro de Ventas'],
      logo: <Reportes className='nav__icon--item' />
    },
    {
      title: 'Herramientas',
      items: ['Parámetros', 'Abrir mes proceso', 'Cerrar mes proceso', 'Reabrir mes proceso'],
      logo: <Herramientas className='nav__icon--item' />
    },
    {
      title: 'Crear Empresa',
      items: ['Crear Empresa', 'Asignar Empresa', 'Crear Zona', 'Crear Unidad'],
      logo: <Empresas className='nav__icon--item' />
    }
  ]

  const nav = useRef(null)

  const menuOpen = e => {
    console.log(this);
    e.preventDefault();
    const icon = e.target.lastChild;
    const subMenu = e.target.nextSibling;
    if (icon.classList.contains('rot-0')) {
      icon.classList.remove('rot-0');
      subMenu.style.height = '0px';
    }
    else {

      subMenu.style.height = subMenu.scrollHeight + 'px';
      icon.classList.add('rot-0');
    }
  }
  return (
    <aside className="sidebar">
      <nav ref={nav} className="nav nav--sidebar">
        <div className="container container--sidebar">
          <ul className="menu menu--sidebar">
            {menu.map((element, index) => {
              return (
                <li key={index} className="prueba">
                  <NavLink onClick={menuOpen} className="menu__item menu__item--title" href=""> {element.logo} {element.title} <Down className='nav__icon--down' /></NavLink>
                  <ul className="menu menu--sub 1">
                    {
                      element.items.map((element, index) => {
                        return (
                          <li key={index}>
                            <NavLink className='menu__item menu__item--sub'>{element}</NavLink>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })}
          </ul >
        </div >
      </nav >
    </aside >
  );
}

export default Sidebar;
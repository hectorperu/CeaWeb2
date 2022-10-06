import { NavLink } from "react-router-dom";
import { ReactComponent as Tabla } from '../../assets/svg/tabla.svg';
import { ReactComponent as TablaG } from '../../assets/svg/tabla-g.svg';
import { ReactComponent as Reportes } from '../../assets/svg/reportes.svg';
import { ReactComponent as Herramientas } from '../../assets/svg/herramientas.svg';
import { ReactComponent as Empresas } from '../../assets/svg/empresas.svg';
import { ReactComponent as Down } from '../../assets/svg/down.svg';
import { useEffect } from "react";

const Sidebar = () => {
  const menu = [
    {
      title: 'Tabla',
      items: ['Plan Contable', 'Grupos Contables', 'Dpto. Empresarial', 'Centro de Costos', 'Bancos']
    },
    {
      title: 'Tabla General',
      items: ['Tipo de Documentos', 'Unidad Economica', 'Zona', 'Tipo de Moneda']
    },
    {
      title: 'Reportes',
      items: ['Diario simplificado', 'Libro Mayor', 'Libro Caja y Bancos', 'Registro de Compras', 'Registro de Ventas']
    },
    {
      title: 'Herramientas',
      items: ['Parámetros', 'Abrir mes proceso', 'Cerrar mes proceso', 'Reabrir mes proceso']
    },
    {
      title: 'Crear Empresa',
      items: ['Crear Empresa', 'Asignar Empresa', 'Crear Zona', 'Crear Unidad']
    }
  ]
  const menuOpen = e => {
    e.preventDefault();
    // console.log(e.target)
    // console.log(e.target.nextSibling)
    const subMenu = e.target.nextSibling;
    subMenu.style.height = subMenu.scrollHeight + 'px';
  }
  return (
    <aside className="sidebar">
      <nav className="nav nav--sidebar">
        <div className="container container--sidebar">
          <ul className="menu menu--sidebar">
            {menu.map((element, index) => {
              return (
                <li key={index} className="prueba">
                  <NavLink onClick={menuOpen} className="menu__item menu__item--title" href=""> <Tabla className='nav__icon--item' /> {element.title} <Down className='nav__icon--down' /></NavLink>
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
            {/* <li className="prueba">
              <NavLink onClick={menuOpen} className="menu__item menu__item--title" href=""> <Tabla className='nav__icon--item' /> Tabla <Down className='nav__icon--down' /></NavLink>
              <ul ref={subMenu} className="menu menu--sub 1">
                <li>
                  <NavLink className='menu__item menu__item--sub'>Plan Contable</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Grupos Contables</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Dpto. Empresarial</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Centro de Costos</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Bancos</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink onClick={menuOpen} className="menu__item menu__item--title" href="">
                <TablaG className='nav__icon--item' />Tabla General<Down className='nav__icon--down' />
              </NavLink>
              <ul className="menu menu--sub 2">
                <li>
                  <NavLink className='menu__item menu__item--sub'>Tipo de Documentos</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Undiad Economica</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Zona</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub'>Tipo de Moneda</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink onClick={menuOpen} className="menu__item menu__item--title" href="#">
                <Reportes className='nav__icon--item' />Reportes<Down className='nav__icon--down' />
              </NavLink>
              <ul className="menu menu--sub">
                <li>
                  <NavLink className='menu__item menu__item--sub' >Diario Simplificado</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Libro Mayor</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Libro Caja y Bancos</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Registro de Compras</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Registro de Ventas</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink onClick={menuOpen} className="menu__item menu__item--title" href="#">
                <Herramientas className='nav__icon--item' />Herramientas<Down className='nav__icon--down' />
              </NavLink>
              <ul className="menu menu--sub">
                <li>
                  <NavLink className='menu__item menu__item--sub' >Parametros</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Abrir mes proceso</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Cerrar mes proceso</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Reabrir mes proceso</NavLink>
                </li>
              </ul>
            </li >
            <li>
              <NavLink onClick={menuOpen} className="menu__item menu__item--title" href="#">
                <Empresas className='nav__icon--item' />Crear Empresa<Down className='nav__icon--down' />
              </NavLink>
              <ul className="menu menu--sub">
                <li>
                  <NavLink className='menu__item menu__item--sub' >Crear Empresa</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Asignar Empresa</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Crear Zona</NavLink>
                </li>
                <li>
                  <NavLink className='menu__item menu__item--sub' >Crear Unidad</NavLink>
                </li>
              </ul >
            </li > */}
          </ul >
        </div >
      </nav >
    </aside >
  );
}

export default Sidebar;
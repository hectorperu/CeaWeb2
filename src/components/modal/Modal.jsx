const Modal = () => {
  return (
    <div className="modal">
      <form className="form">
        <div className="container container--form">
          <h2 className="form__title">Actualizacion de Movimientos</h2>
          <div className=" elements elements--form">
            <div className="form__header">
              <div className="form__cuenta">
                <div>
                  <div className="group group--form">
                    <input className="input" id="email" type="text" placeholder=" " />
                    <label className="label__input" htmlFor="email">Cuenta Contable</label>
                  </div>
                  <h3 className="form__name">Servicio de lectura y cobro de recibos</h3>
                </div>
                <div>
                  <div className="group group--form">
                    <input className="input" id="email" type="text" placeholder=" " />
                    <label className="label__input" htmlFor="email">Cta. Abono</label>
                  </div>
                  <h3 className="form__name">Facturas y boletas por pagar M.N.</h3>
                </div>
              </div>
              <div className="form-checkgroup">
                <div className="form-checkgroup__title">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="gj">Aduana</label>
                </div>
                <div className="group group--form  form-checkgroup__select">
                  <select className="input input--select" name="" id="email" defaultValue={"sede"}>
                    <option value="sede" disabled>Sede</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <label className="label__input" htmlFor="email">Sede</label>
                </div>
                <div className="group group--form form-checkgroup__date">
                  <input className="input" id="email" type="date" placeholder=" " />
                  <label className="label__input" htmlFor="email">Fecha</label>
                </div>
                <div className="group group--form form-checkgroup__hour">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">Hora</label>
                </div>
              </div>
            </div>
            <div className="form__body">
              <div className="form__label-grid">
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">Proveedor</label>
                </div>
                <h3 className="form__name">CTEIN TEK S.A.C.</h3>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Tipo de Doc N°</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Serie</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">N°</label>
              </div>
              <div className="form__label-grid form__label-grid--column">
                <div className="group group--form">
                  <input className="input" id="email" type="date" placeholder=" " />
                  <label className="label__input" htmlFor="email">Fecha de Emisión</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="date" />
                  <div className="label__checkbox">
                    <input className="input__checkbox" id="date" type="checkbox" />
                    <label className="label__checkbox--label" htmlFor="date">Fecha de Vencimiento</label>
                  </div>
                </div>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Doc. Cancelación N°</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Serie</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">N°</label>
              </div>
              <div className="group group--form form__glosa">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Glosa</label>
              </div>
              <div className="group group--form group--checkbox">
                <input className="input__checkbox" type="checkbox" name="" id="" />
                <label htmlFor="gj">Reparo</label>
              </div>
              <div className="form-group form-group--igv">
                <div className="form-checkgroup__title">
                  <label>Impuestos</label>
                </div>
                <div className="group group--form group--checkbox">
                  <input className="input__checkbox" type="checkbox" name="" id="" />
                  <label htmlFor="gj">Costeo IGV</label>
                </div>
                <div className="group group--form group--checkbox">
                  <input className="input__checkbox" type="checkbox" name="" id="" />
                  <label htmlFor="gj">Afecto IGV [19%]</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">IGV</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" />
                  <div className="label__checkbox">
                    <input className="input__checkbox" id="date" type="checkbox" />
                    <label className="label__checkbox--label" htmlFor="date">Retención IGV (%)</label>
                  </div>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">=</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" />
                  <div className="label__checkbox">
                    <input className="input__checkbox" id="date" type="checkbox" />
                    <label className="label__checkbox--label" htmlFor="date">Ret. 4ta (15%)</label>
                  </div>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" />
                  <div className="label__checkbox">
                    <input className="input__checkbox" id="date" type="checkbox" />
                    <label className="label__checkbox--label" htmlFor="date">ISC (5%)</label>
                  </div>
                </div>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">C. Costo</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Flujo Efec.</label>
              </div>
              <div className="group group--form">
                <select className="input input--select" name="" id="email" defaultValue={"moneda"}>
                  <option value="moneda" disabled>Moneda</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <label className="label__input" htmlFor="email">Moneda</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Tipo de Cambio</label>
              </div>
              <div className="group group--form g-c2">
                <select className="input input--select" name="" id="email" defaultValue={"tOperacion"}>
                  <option value="tOperacion" disabled>Tipo de Operación</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <label className="label__input" htmlFor="email">Tipo de Operación</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Debe</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Haber</label>
              </div>
              <div className="form-checkgroup form-checkgroup--detraccion">
                <div className="form-checkgroup__title">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="gj">Detraccion</label>
                </div>
                <div className="group group--form  form-checkgroup__select form-checkgroup__select--detraccion">
                  <select className="input input--select" name="" id="email" defaultValue={"sede"}>
                    <option value="sede" disabled>Sede</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <label className="label__input" htmlFor="email">Detraccion</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">Hora</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">N°</label>
                </div>
                <div className="group group--form form-checkgroup__date">
                  <input className="input" id="email" type="date" placeholder=" " />
                  <label className="label__input" htmlFor="email">Fecha</label>
                </div>
              </div>
              <div className="form-checkgroup form-checkgroup--percepcion">
                <div className="form-checkgroup__title">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="gj">Percepcion</label>
                </div>
                <div className="group group--form  form-checkgroup__select form-checkgroup__select--detraccion">
                  <select className="input input--select" name="" id="email" defaultValue={"sede"}>
                    <option value="sede" disabled>Sede</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <label className="label__input" htmlFor="email">Percepción</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">Hora</label>
                </div>
                <div className="group group--form">
                  <input className="input" id="email" type="text" placeholder=" " />
                  <label className="label__input" htmlFor="email">N°</label>
                </div>
                <div className="group group--form form-checkgroup__date">
                  <input className="input" id="email" type="date" placeholder=" " />
                  <label className="label__input" htmlFor="email">Fecha</label>
                </div>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" />
                <div className="label__checkbox">
                  <input className="input__checkbox" id="date" type="checkbox" />
                  <label className="label__checkbox--label" htmlFor="date">Cta. ICBPER</label>
                </div>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Cta. ICPBER</label>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" />
                <div className="label__checkbox">
                  <input className="input__checkbox" id="date" type="checkbox" />
                  <label className="label__checkbox--label" htmlFor="date">Cta. Aux. Ajuste</label>
                </div>
              </div>
              <div className="group group--form">
                <input className="input" id="email" type="text" placeholder=" " />
                <label className="label__input" htmlFor="email">Cta. Ajuste</label>
              </div>
            </div>
            <div className="form__footer">
              <button className="button button--lg button--primary">Nuevo</button>
              <button className="button button--lg button--secondary">Grabar</button>
              <button className="button button--lg button--tertiary">cerrar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
import React from "react";
import {
  ErroresFormularioCuenta,
  FormularioCuenta,
  crearErroresFormularioCuentaVacios,
  crearFormularioCuentaVacio,
} from "../account.vm";
import { validarFormularioCuenta } from "../account.validation";
import classes from "./account-form.component.module.css";

interface Props {
  onGuardar: (formulario: FormularioCuenta) => void;
  onCancelar: () => void;
}

export const FormularioCuentaComponente: React.FC<Props> = (props) => {
  const { onGuardar, onCancelar } = props;
  const [formulario, setFormulario] = React.useState<FormularioCuenta>(
    crearFormularioCuentaVacio()
  );
  const [errores, setErrores] = React.useState<ErroresFormularioCuenta>(
    crearErroresFormularioCuentaVacios()
  );

  const onCampoTextoChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [evento.target.name]: evento.target.value,
    });
  };

  const onCampoTipoChange = (evento: React.ChangeEvent<HTMLSelectElement>) => {
    setFormulario({
      ...formulario,
      tipo: evento.target.value,
    });
  };

  const onSubmit = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const resultadoValidacion = validarFormularioCuenta(formulario);
    setErrores(resultadoValidacion.errores);

    if (resultadoValidacion.esValido) {
      onGuardar(formulario);
    }
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.campo}>
        <label htmlFor="tipo">Tipo de cuenta</label>
        <select
          id="tipo"
          value={formulario.tipo}
          onChange={onCampoTipoChange}
          className={`${classes.select} ${errores.tipo ? classes.inputError : ""}`}
        >
          <option value="">Selecciona una opción</option>
          <option value="1">Cuenta corriente</option>
          <option value="2">Ahorro</option>
        </select>
        {errores.tipo && <p className={classes.error}>{errores.tipo}</p>}
      </div>

      <div className={classes.campo}>
        <label htmlFor="alias">Alias</label>
        <input
          id="alias"
          name="alias"
          value={formulario.alias}
          onChange={onCampoTextoChange}
          placeholder="Ej: Gastos casa"
          className={errores.alias ? classes.inputError : ""}
        />
        {errores.alias && <p className={classes.error}>{errores.alias}</p>}
      </div>

      <div className={classes.acciones}>
        <button type="submit">GUARDAR</button>
        <button
          type="button"
          className={classes.btnCancelar}
          onClick={onCancelar}
        >
          CANCELAR
        </button>
      </div>
    </form>
  );
};

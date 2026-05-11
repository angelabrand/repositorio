import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { appRoutes } from "@/core/router";
import { FormularioCuentaComponente } from "./components";
import { saveAccount } from "./api";
import { FormularioCuenta } from "./account.vm";
import classes from "./account.page.module.css";

export const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const onGuardarCuenta = (formulario: FormularioCuenta) => {
    saveAccount({
      type: formulario.tipo,
      name: formulario.alias,
    }).then(() => navigate(appRoutes.accountList));
  };

  const onCancelar = () => navigate(appRoutes.accountList);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Agregar cuenta</h1>
        </div>
        <FormularioCuentaComponente
          onGuardar={onGuardarCuenta}
          onCancelar={onCancelar}
        />
      </div>
    </AppLayout>
  );
};

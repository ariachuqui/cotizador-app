import React from "react";

import "./mostrarCotizacion.scss";

export const MostrarCotización = ({ cotizacion }) => {
    const { plan, marca, year, mostrar, total } = cotizacion;


    

    return (
        <>
            {mostrar && (
                <div className="mostrarCotizacion">
                    <div className="resumen">
                        <h2>Resumen de Cotización</h2>
                        <p>Marca: {marca}</p>
                        <p>Plan: {plan}</p>
                        <p>Año del auto: {year}</p>
                    </div>

                    <div className="total">
                        <p>EL TOTAL ES: ${total}</p>
                    </div>
                </div>
            )}
        </>
    );
};

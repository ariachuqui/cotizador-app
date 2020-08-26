import React, { useState } from "react";

import { useForm } from "../hooks/useForm";

import "./cotizadorForm.scss";
import { obtValidacion } from "../helpers/validacion";
import { calculoTotal } from "../helpers/calculoTotal";

export const CotizadorForm = ({ setCotizacion }) => {
    const [warning, setWarning] = useState(false);

    const [values, handleOnChange] = useForm({ marca: "", year: "", plan: "" });

    const { marca, year, plan } = values;

    const handleSubmit = e => {
        e.preventDefault();

        if(obtValidacion([marca, year, plan]) ){
            const resultado = calculoTotal(marca, year, plan)
            setCotizacion({...values, total: resultado, mostrar:true})
            setWarning(false)
        }else{
            setWarning(true)
        }

    }

    return (
        <>

            {warning && (
                <p className="warning"> TODOS LOS CAMPOS SON OBLIGATORIOS </p>
            )}


            <form onSubmit={handleSubmit}>
                <div className="input">
                    <p>Marca</p>

                    <select
                        name="marca"
                        value={marca}
                        onChange={handleOnChange}
                    >
                        <option>-- Seleccione --</option>

                        <option>Americano</option>

                        <option>Europeo</option>

                        <option>Asiatico</option>
                    </select>
                </div>

                <div className="input">
                    <p>Año</p>

                    <select name="year" value={year} onChange={handleOnChange}>
                        <option>-- Seleccione --</option>

                        <option>2022</option>

                        <option>2021</option>

                        <option>2020</option>

                        <option>2019</option>

                        <option>2018</option>

                        <option>2017</option>

                        <option>2016</option>

                        <option>2015</option>

                        <option>2014</option>

                        <option>2013</option>
                    </select>
                </div>

                <div className="input">
                    <p>Plan</p>

                    <div>
                        <label>
                            <input
                                type="radio"
                                name="plan"
                                value="basico"
                                onChange={handleOnChange}
                            />
                            Basico
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="plan"
                                value="completo"
                                onChange={handleOnChange}
                            />
                            Completo
                        </label>
                    </div>
                </div>

                <button type="submit">COTIZAR</button>
            </form>
        </>
    );
};

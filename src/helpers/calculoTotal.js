import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from "../helpers/helpers";

export const calculoTotal = (marca, year, plan) => {
    let resultado = 2000;

    const diferenciaYear = obtenerDiferenciaYear(year);

    resultado -= ((diferenciaYear * 3) * resultado) / 100;
    
    const diferenciaMarca = calcularMarca(marca);

    resultado = resultado * diferenciaMarca;

    const diferenciaPlan = obtenerPlan(plan);

    resultado = resultado * diferenciaPlan;

    return parseInt(resultado);
}

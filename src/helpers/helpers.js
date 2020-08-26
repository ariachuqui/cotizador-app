export const obtenerDiferenciaYear = year => {
    return new Date().getFullYear() - year;
};

export const calcularMarca = marca => {
    let incremento;

    switch (marca) {
        case "Europeo":
            incremento = 1.30;
            break;

        case "Americano":
            incremento = 1.15;
            break;

        case "Asiatico":
            incremento = 1.5;
            break;

        default:
            incremento = 0;
            break;
    }

    return incremento
};

export const obtenerPlan = (plan) =>{
    return (plan === 'basico') ? 1.20 : 1.50
}

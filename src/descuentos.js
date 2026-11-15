function calcularDescuento(precio, porcentaje, esVip) {
  const descuentoBase = precio * porcentaje / 100;
    let descuento = descuentoBase;

    if (esVip === true) {
    descuento = descuento + 10;
    }

    if (porcentaje > 100) {
    console.log("Descuento inválido");
    }

    const total = precio - descuento;
    return total;
}

module.exports = { calcularDescuento };
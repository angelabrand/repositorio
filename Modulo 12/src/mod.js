class totalesDescuento {
    constructor(descuento){
        this.descuento = descuento;
        this._subtotal = 0;
        this.total = 0; 
    }
    
    set subtotal(nuevoValor) {
     this._subtotal = nuevoValor;
     this.total = this._subtotal - (this.descuento * this._subtotal) /100;
}
}
//Cuando usamos new estamos usando una instancia de la clase
const totalPerfumeria = new totalesDescuento(10);
const totalesSupermercado = new totalesDescuento(20);

totalPerfumeria.subtotal = 30;
console.log("Totales de perfumeria:", totalPerfumeria.total)

totalesSupermercado.subtotal=50
console.log("total de Supermercado:", totalesSupermercado.total)
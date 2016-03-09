(function(exports) {
  "use strict";

  function Medida (valor, tipo) {
    if(tipo === null) {
      console.log(valor);
    } else {
      this.valor = valor;
      this.tipo = tipo;
    }
  }

  this.getValue = function() {
    console.log("Medida getVal = " + this.valor);
    return this.valor;
  };

  exports.Medida = Medida;

})(this);

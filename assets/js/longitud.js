(function(exports) {
  "use strict;"

  function Longitud(valor, tipo) {
    Medida.call(this, valor, tipo);

    this.toPulgadas = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("metros".match(tipo))
        result = this.getValue() * 39.37;
      else
        result = this.getValue();
      return new Pulgadas(result);
    };
    this.toMetros = function() {
      var result;
      var tipo = this.getType().toLowerCase();
      if ("pulgadas".match(tipo))
        result = this.getValue() / 39.37;
      else
        result = this.getValue();
      return new Metros(result);
    };
  }

  Longitud.prototype = new Medida();
  Longitud.prototype.constructor = Longitud;

  function Metros(valor) {
    Longitud.call(this, valor, "Metros");
  }

  Metros.prototype = new Longitud();
  Metros.prototype.constructor = Metros;

  function Pulgadas(valor) {
    Longitud.call(this, valor, "Pulgadas");
  }

  Pulgadas.prototype = new Longitud();
  Pulgadas.prototype.constructor = Pulgadas;

  exports.Longitud = Longitud;
  exports.Metros = Metros;
  exports.Pulgadas = Pulgadas;

})(this);

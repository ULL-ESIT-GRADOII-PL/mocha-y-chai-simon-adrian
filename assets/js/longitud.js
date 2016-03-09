(function(exports) {
  "use strict";

  // Clase Longitud, padre de los distintos tipos de medida de longitud.
  function Longitud(valor, tipo) {
    Medida.call(this, valor, tipo);
  }
  Longitud.prototype = new Medida("32 m");
  Longitud.prototype.constructor = Longitud;

  // Clase Metro
  function Metro(valor) {
      Longitud.call(this, valor, "M");
  }
  Metro.prototype = new Longitud("32 m");
  Metro.prototype.constructor = Longitud;

  // Metodos de conversión
  Metro.prototype.toYarda = function() {
      this.valor = (this.valor / 0.9144);
      return this.valor;
  };
  Metro.prototype.toPulgada = function() {
      this.valor = (this.valor * 39.3701);
      return this.valor;
  };

  // Clase Pulgada
  function Pulgada(valor) {
      Longitud.call(this, valor, "P");
  }
  Pulgada.prototype = new Longitud("32 P");
  Pulgada.prototype.constructor = Longitud;

  // Metodos de conversion
  Pulgada.prototype.toMetro = function() {
      this.valor = (this.valor / 39.3701);
      return this.valor;
  };
  Pulgada.prototype.toYarda = function() {
      this.valor = (this.valor / 36);
      return this.valor;
  };

  // Clase Yarda
  function Yarda(valor) {
      Longitud.call(this, valor, "Y");
  }
  Yarda.prototype = new Longitud("32 Y");
  Yarda.prototype.constructor = Longitud;

  // Metodos de conversion
  Yarda.prototype.toMetro = function() {
      this.valor = (this.valor * 0.9144);
      return this.valor;
  };
  Yarda.prototype.toPulgada = function() {
      this.valor = (this.valor * 36);
      return this.valor;
  };

  // Exports de cada clase
  exports.Longitud = Longitud;
  exports.Metro = Metro;
  exports.Pulgada = Pulgada;
  exports.Yarda = Yarda;

})(this);

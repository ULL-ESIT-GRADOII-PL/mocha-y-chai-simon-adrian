(function(exports) {
  "use strict";

  function Medida(valor, tipo) {
    var value = valor;
    var type = tipo;
    if (!tipo && valor) {
      var match = valor.match(/[a-z]+$/i);
      type = match[0];
    }

    this.getValue = function() {
      return value;
    };
    this.getType = function() {
      return type;
    };
    this.toString = function() {
      return value.toFixed(2) + " " + type;
    }
  }

  Medida.REGEXP = XRegExp(
    '(?<numero>    ^[ ]*[+-]?[0-9]+[ ]*        # Entero \n\
     (?<decimal>    (.[0-9]+)?)[ ]*            # Decimal \n\
     (?<exponente>  (e[+-]?[ ]*[0-9]+)?)[ ]*)  # Exponente \n\
     (?<tipo>       [a-z]+)[ ]+(?:to[ ]+)?     # Tipo \n\
     (?<nuevo_tipo> [a-z]+)[ ]*$               # Nuevo tipo', 'xi');

  Medida.match = function(valor) {
    return XRegExp.exec(valor, Medida.REGEXP);
  }

  Medida.measures = function() {
    return {
      'c': Celsius,
      'f': Fahrenheit,
      'k': Kelvin,
      'm': Metros,
      'p': Pulgadas
    };
  }

  Medida.convertir = function(valor, elemento) {
    var measures = Medida.measures();

    valor = Medida.match(valor);
    if (valor) {
      var numero = parseFloat(valor.numero.replace(/\s+/g, '')),
        tipo = valor.tipo.toLowerCase(),
        nuevo_tipo = valor.nuevo_tipo.toLowerCase();

      try {
        elemento.style.color = "rgb(115, 231, 179)";
        var inicial = new measures[tipo](numero);
        var destino = "to" + measures[nuevo_tipo].name;
        return inicial[destino](); // inicial[destino]().toFixed(2) + " " + measures[nuevo_tipo].name;
      } catch (err) {
        elemento.style.color = "rgb(242, 92, 39)";
        return 'ERROR. Introduzca una medida y conversión válida. Desconozco como convertir desde "' + tipo + '" hasta "' + nuevo_tipo + '"';
      }
    } else {
      elemento.style.color = "rgb(242, 92, 39)";
      return "ERROR. Introduzca una conversión válida, por ejemplo: 32.5e10 F to K";
    }
  };

  exports.Medida = Medida;

})(this);

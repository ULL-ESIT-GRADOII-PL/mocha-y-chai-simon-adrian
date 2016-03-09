(function(exports) {
    "use strict";

    // Clase Temperatura, padre de todos los diferentes tipos de temperatura que maneja el conversor.
    function Temperatura(valor, tipo) {
      Medida.call(this, valor, tipo);
    }
    Temperatura.prototype = new Medida("32 c");
    Temperatura.prototype.constructor = Temperatura;


    // Clase Celsius
    function Celsius(valor) {
      Temperatura.call(this, valor, "C");
    }
    Celsius.prototype = new Temperatura("32 c");
    Celsius.prototype.constructor = Temperatura;

    // Métodos de conversion de Celsius
    Celsius.prototype.toFarenheit = function() {
        this.valor = (this.valor * 9 / 5) + 32;
        return this.valor;
    };
    Celsius.prototype.toKelvin = function() {
        this.valor = this.valor + 273.15;
        return this.valor;
    };


    // Clase Farenheit
    function Farenheit(valor) {
        Temperatura.call(this, valor, "F");
    }
    Farenheit.prototype = new Temperatura("32 f");
    Farenheit.prototype.constructor = Temperatura;

    // Métodos de conversión de Farenheit
    Farenheit.prototype.toCelsius = function() {
        this.valor = (this.valor - 32) * 5 / 9;
        return this.valor;
    };
    Farenheit.prototype.toKelvin = function() {
        this.valor = (5 * (this.valor - 32) / 9) + 273.15;
        return this.valor;
    };


    // Clase Kelvin
    function Kelvin(valor) {
        Temperatura.call(this, valor, "K");
    }
    Kelvin.prototype = new Temperatura("32 k");
    Kelvin.prototype.constructor = Temperatura;

    // Métodos de conversión de Kelvin
    Kelvin.prototype.toCelsius = function() {
        this.valor = this.valor - 273.15;
        return this.valor;
    };
    Kelvin.prototype.toFarenheit = function() {
        this.valor = (this.valor * 1.8) - 459.67;
        return this.valor;
    };


})(this);

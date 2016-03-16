var expect = chai.expect;

describe("Temperatura", function() {

  describe("Constructor", function() {
    it("Debería aceptar un valor y un tipo", function() {
      var temperatura = new Temperatura(23, 'c');
      expect(temperatura.getValue()).to.equal(23);
      expect(temperatura.getType()).to.equal('c');
    });

    it("Debería aceptar un valor-tipo como un solo parametro", function() {
      var temperatura = new Temperatura("23c");
      expect(temperatura.getValue()).to.equal(23);
      expect(temperatura.getType()).to.equal("c");
    });
  });

  describe("Herencia", function() {
    it("Temperatura debe ser hija de la clase Medida", function(){
      var herencia = new Temperatura('23m');
      expect(herencia).to.be.instanceof(Medida);
    });
  });

  describe("#toCelsius", function() {
    it("Debería convertir Kelvin a Celsius", function() {
      var kelvinACelsius = new Temperatura("23k");
      var celsius = kelvinACelsius.toCelsius();
      expect(celsius).to.be.instanceof(Celsius);
      expect(celsius.getValue()).to.equal(-250.14999999999998);
      expect(celsius.getType()).to.equal('Celsius');
    });

    it("Debería convertir Farenheit a Celsius", function() {
      var farenACelsius = new Temperatura("23f");
      var celsius = farenACelsius.toCelsius();
      expect(celsius).to.be.instanceof(Celsius);
      expect(celsius.getValue()).to.equal(-5);
      expect(celsius.getType()).to.equal('Celsius');
    });
  });

  describe("#toFahrenheit", function() {
    it("Debería convertir Celsius a Farenheit", function() {
      var celsiusAFaren = new Temperatura("23c");
      var faren = celsiusAFaren.toFahrenheit();
      expect(faren).to.be.instanceof(Fahrenheit);
      expect(faren.getValue()).to.equal(73.4);
      expect(faren.getType()).to.equal('Fahrenheit');
    });

    it("Debería convertir Kelvin a Fahrenheit", function() {
      var kelvinAFaren = new Temperatura("23k");
      var faren = kelvinAFaren.toFahrenheit();
      expect(faren).to.be.instanceof(Fahrenheit);
      expect(faren.getValue()).to.equal(-418.27000000000004);
      expect(faren.getType()).to.equal('Fahrenheit');
    });
  });

  describe("#toKelvin", function() {
    it("Debería convertir Celsius a Kelvin", function() {
      var celsiusAKelvin = new Temperatura("23c");
      var kelvin = celsiusAKelvin.toKelvin();
      expect(kelvin).to.be.instanceof(Kelvin);
      expect(kelvin.getValue()).to.equal(296.15);
      expect(kelvin.getType()).to.equal('Kelvin');
    });

    it("Debería convertir Fahrenheit a Kelvin", function() {
      var farenAKelvin = new Temperatura("23f");
      var kelvin = farenAKelvin.toKelvin();
      expect(kelvin).to.be.instanceof(Kelvin);
      expect(kelvin.getValue()).to.equal(268.15);
      expect(kelvin.getType()).to.equal('Kelvin');
    });
  });

});

describe("Celsius", function() {
  describe("Constructor", function() {
    it("Debe aceptar un valor y guardarlo con tipo 'Celsius'", function() {
      var temperatura = new Celsius(25);
      expect(temperatura.getValue()).to.equal(25);
      expect(temperatura.getType()).to.equal('Celsius');
    });
  });

  describe("Herencia", function() {
    it("Una instancia de 'Celsius' debe ser hija de la clase Temperatura", function() {
      var temperatura = new Celsius(25);
      expect(temperatura).to.be.instanceof(Temperatura);
    });
  });
});

describe("Fahrenheit", function() {
  describe("Constructor", function() {
    it("Debe aceptar un valor y guardarlo con tipo 'Fahrenheit'", function() {
      var temperatura = new Fahrenheit(25);
      expect(temperatura.getValue()).to.equal(25);
      expect(temperatura.getType()).to.equal('Fahrenheit');
    });
  });

  describe("Herencia", function() {
    it("Una instancia de 'Fahrenheit' debe ser hija de la clase Temperatura", function() {
      var temperatura = new Fahrenheit(25);
      expect(temperatura).to.be.instanceof(Temperatura);
    });
  });
});

describe("Kelvin", function() {
  describe("Constructor", function() {
    it("Debe aceptar un valor y guardarlo con tipo 'Kelvin'", function() {
      var temperatura = new Kelvin(25);
      expect(temperatura.getValue()).to.equal(25);
      expect(temperatura.getType()).to.equal('Kelvin');
    });
  });

  describe("Herencia", function() {
    it("Una instancia de 'Kelvin' debe ser hija de la clase Temperatura", function() {
      var temperatura = new Kelvin(25);
      expect(temperatura).to.be.instanceof(Temperatura);
    });
  });
});

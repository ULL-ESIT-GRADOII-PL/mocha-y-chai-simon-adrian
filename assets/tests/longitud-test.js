var expect = chai.expect;

describe("Longitud", function() {

  describe("Constructor", function() {
    it("Debería aceptar un valor y un tipo", function() {
      var longitud = new Longitud(23, 'm');
      expect(longitud.getValue()).to.equal(23);
      expect(longitud.getType()).to.equal('m');
    });

    it("Debería aceptar un valor-tipo como un solo parametro", function() {
      var longitud = new Longitud("23m");
      expect(longitud.getValue()).to.equal(23);
      expect(longitud.getType()).to.equal("m");
    });
  });

  describe("Herencia", function() {
    it("Longitud debe ser hija de la clase Medida", function(){
      var herencia = new Longitud('23m');
      expect(herencia).to.be.instanceof(Medida);
    });
  });

  describe("#toPulgadas", function() {
    it("Debería convertir Metros a Pulgadas", function() {
      var metrosAPulgadas = new Longitud("23m");
      var pulgadas = metrosAPulgadas.toPulgadas();
      expect(pulgadas).to.be.instanceof(Pulgadas);
      expect(pulgadas.getValue()).to.equal(905.51);
      expect(pulgadas.getType()).to.equal('Pulgadas');
    });
  });

  describe("#toMetros", function() {
    it("Debería convertir Pulgadas a Metros", function() {
      var pulgadasAMetros = new Longitud("23p");
      var metros = pulgadasAMetros.toMetros();
      expect(metros).to.be.instanceof(Metros);
      expect(metros.getValue()).to.equal(0.5842011684023368);
      expect(metros.getType()).to.equal('Metros');
    });
  });

});

describe("Metros", function() {
  describe("Constructor", function() {
    it("Debe aceptar un valor y guardarlo con tipo 'Metros'", function() {
      var metros = new Metros(25);
      expect(metros.getValue()).to.equal(25);
      expect(metros.getType()).to.equal('Metros');
    });
  });

  describe("Herencia", function() {
    it("Una instancia de 'Metros' debe ser hija de la clase Longitud", function() {
      var metros = new Metros(25);
      expect(metros).to.be.instanceof(Longitud);
    });
  });
});

describe("Pulgada", function() {
  describe("Constructor", function() {
    it("Debe aceptar un valor y guardarlo con tipo 'Pulgadas'", function() {
      var pulgadas = new Pulgadas(25);
      expect(pulgadas.getValue()).to.equal(25);
      expect(pulgadas.getType()).to.equal('Pulgadas');
    });
  });

  describe("Herencia", function() {
    it("Una instancia de 'Metros' debe ser hija de la clase Longitud", function() {
      var pulgadas = new Pulgadas(25);
      expect(pulgadas).to.be.instanceof(Longitud);
    });
  });
});

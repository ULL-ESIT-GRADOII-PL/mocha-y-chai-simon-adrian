var expect = chai.expect;

describe("Medida", function() {

  describe("Constructor", function() {
    it("Debería aceptar un valor y un tipo", function() {
      var medida = new Medida(23, 'f');
      expect(medida.getValue()).to.equal(23);
      expect(medida.getType()).to.equal('f');
    });

  });
});
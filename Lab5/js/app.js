var app = new Vue({
  el: "#baseband-encoder",
  data: {
    bits: [],
    encodedBits: [],
    encodedNrzBits: [],
    encodedNrzmBits: [],
    encodedNrzsBits: [],
    encodedRzBits: [],
    encodedBiphmBits: [],
    encodedBiphsBits: [],
    status: "",
    numberOfBits: 8,
    validateBit: validateBit,
  },
  created: function () {
    this.bits = getBitstream(this.numberOfBits);
  },
  methods: {
    encode: function () {
      this.encodedBits = getManchesterLevelEncoding(this.bits);
      this.encodedNrzBits = getNRZ(this.bits);
      this.encodedNrzmBits = getNRZM(this.bits);
      this.encodedNrzsBits = getNRZS(this.bits);
      this.encodedRzBits = getRZ(this.bits);
      this.encodedBiphmBits = getBiphM(this.bits);
      this.encodedBiphsBits = getBiphS(this.bits);
    },
  },
});

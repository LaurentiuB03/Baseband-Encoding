var app = new Vue({
  el: "#baseband-encoder",
  data: {
    bits: [],
    encodedBits: [],
    encodedNrzBits: [],
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
    },
  },
});

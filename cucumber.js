module.exports = {
  default: {
    require: ["tests/step-definitions/**/*.ts"], // ✅ must match your step definition folder
    format: ["progress"],
    paths: ["tests/features/**/*.feature"],
    requireModule: ["ts-node/register"],
    timeout: 60000
  }
};
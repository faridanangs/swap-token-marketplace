const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SwapToken", (m) => {

  const lock = m.contract("CustomDex", [], {});

  return { lock };
});

// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function(config) {
  config.set({
    mutate: [
      "src/**/*.ts?(x)",

      // "!src/shared/components/**/*.ts?(x)",
      "!src/shared/components/error-handling/**/*.ts?(x)",
      "!src/shared/components/icon/**/*.ts?(x)",
      // "!src/shared/components/label/**/*.ts?(x)",
      "!src/shared/components/tekst-input/**/*.ts?(x)",

      "!src/shared/utils/**/*.ts?(x)",

      "!src/shared/generic-parts/**/*.ts?(x)",

      "!src/*.ts?(x)",

      "!src/**/*@(.test|.spec|Spec).ts?(x)"
    ],
    mutator: "typescript",
    testRunner: "jest",
    reporters: ["progress", "clear-text", "html"],
    coverageAnalysis: "off",
    tempDirName: "stryker-tmp",
    jest: {
      projectType: "react"
    }
  });
};

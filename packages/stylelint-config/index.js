module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
  rules: {
    "max-nesting-depth": null,
    "length-zero-no-unit": null,
    "shorthand-property-no-redundant-values": null,
    "selector-max-compound-selectors": null,
    "selector-no-qualifying-type": null,
    "property-no-vendor-prefix": null,
    "selector-max-id": null,
    "color-hex-length": "long",
  },
};

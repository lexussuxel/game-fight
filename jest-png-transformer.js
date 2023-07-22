/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  process(src, filePath) {
    if (path.extname(filePath) !== ".png") {
      return src;
    }

    const name = `png-${path.basename(filePath, ".png")}`
      .split(/\W+/)
      .map((x) => `${x.charAt(0).toUpperCase()}${x.slice(1)}`)
      .join("");

    return {
      code: `
const React = require('react');
function ${name}(props) {
  return React.createElement(
    'svg',
    Object.assign({}, props, {'data-file-name': ${name}.name})
  );
}
module.exports = ${name};
            `,
    };
  },
};

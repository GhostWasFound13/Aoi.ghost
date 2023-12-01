const { version } = require("../../package.json");

module.exports = {
    fnError: (d, msg) => {
        try {
            let Warn = require('./Warn.js');
            let data = d.util.aoiFunc(d);
            console.log(`\x1b[91mGhostError:\x1b[97m ${msg}  |  \x1b[94mIn\x1b[97m ${data.function}.  |  \x1b[94mCode: \x1b[97m\`${data.code}\``);
            d.channel.send(`
${"```js"}\n
ghostError: ${msg}
{
  in : "${data.function}",
  version : ${version},
  where in code : \`${data.code}\`
}
\n${"```"}`);
        } catch (err) {
          console.error(err)
        }
    }
}

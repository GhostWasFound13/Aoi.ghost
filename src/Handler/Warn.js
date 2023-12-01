module.exports = {
    fnWarn: (msg) => {
        try {
            console.log(`\x1b[33maoi.ghostWarning:\x1b[97m ${msg}`);
        } catch (err) {
            console.error(err);
        }
    }
}

const yaml = require('js-yaml');
const fs = require('fs');

module.exports.load = function() {
    return new Promise((resolve, reject) => {
        //const invNames = yaml.load(fs.readFileSync('G:/documents/Own/Programming/eve-prod-calc/sde/bsd/invNames.yaml', 'utf8'));
        fs.readFile('G:/documents/Own/Programming/eve-prod-calc/sde/fsd/marketGroups.yaml', function(err, file) {
            if (err) { reject(err) }
            const marketGroups = yaml.load(file);
            resolve(marketGroups);
        })
    })
}

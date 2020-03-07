const core = require('@actions/core');
const github = require('@actions/github');

let fs = require('fs');
const src = core.getInput('src');
const dist = core.getInput('dist');

console.log(src);
console.log(dist);

function base64_encode(file) {
    let f = fs.readFileSync(file);
    return f.toString('base64');
}

fs.readdirSync('./' + src + '/img/').forEach(f => {
    if(f.startsWith("."))return;
    fs.writeFileSync('./' + dist + '/asset/' + f + ".txt", base64_encode('./' + src + '/img/' + f))
});

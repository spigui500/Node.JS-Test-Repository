let fs = require('fs');
let data = JSON.parse(fs.readFileSync(process.argv[2]).toString());
const entries = Object.entries(data);
let content = '<html>\n<body>\n<form>\n';
let contentend = '</form>\n</body>\n</html>';
let str = process.argv[2];
let filename = str.replace(".json", ".html")
for(let i = 0; i < entries.length; ++i)
{
  content = `${content}<label for='${entries[i][0]}'>${entries[i][0]}</label>\n<input name='${entries[i][0]}' type='${entries[i][1]}'/>\n`;
  //FORMERLY: content = content + "<label for='" + entries[i][0] + "'>" + entries[i][0] + "</label>" + '\n' + "<input name='" + entries[i][0] + "'/>" + '\n';
  //Pluses not needed in code, interpolation more efficient//
}
content = content + contentend;

fs.writeFileSync(filename, content);
console.log(`Converted ${process.argv[2]} to ${filename}, as requested.`);
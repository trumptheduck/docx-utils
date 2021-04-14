function formatHTML(string) {
    var html = string.replace('<html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"></head>','')
                    .replace('</html>','')
                    .replace('<body','<div')
                    .replace('</body>','<div>')
                    .replace('<table','<button>Click Me</button><table')
    return html
}
function markdownTables(html) {
    
}
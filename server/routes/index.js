module.exports = (router) => {
    
    var member = require('./member')(router);
    var clan = require('./clan')(router);
    // router.get('/', (req, res) => {
    //     res.sendFile('index.html', {"root": 'public'});
    // })
    
}
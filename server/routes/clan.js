module.exports = (router) => {

    var cc = require('../controllers/index').clan;

    router.get('/api/clan/:tag', (req, res) => {

        console.log(req.query);
        var hash = '';
        if(req.query.hash == 'true'){
            hash = '#';
        }
        console.log(hash);
        cc.getClanByTag(hash + req.params.tag, (clan) => {
            //console.log(clan);
            res.send(clan);
        })
    });
    
    router.get('/api/clan/members/:tag', function(req, res){
        var hash = '';
        if(req.query.hash == 'true'){
            hash = '#';
        }
        cc.getClanMembersByTag(hash + req.params.tag, function(members){
            res.send(members);
        })
        
    })
    

}
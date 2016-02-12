module.exports = (router) => {

    var mc = require('../controllers/index').member;

    // router.get('/api/members/:name', function(req, res) {
    //     mc.getUserByName(req.params.name,
    //         function(user) {
    //             console.log(user);
    //             res.send();
    //         });

    // })

    router.get('/api/members/:tag', function(req, res){
        var hash = '';
        if(req.query.hash == 'true'){
            hash = '#';
        }
        mc.getClanMembers(hash + req.params.tag, function(members){
            res.send(members);
        })
        
    })



}
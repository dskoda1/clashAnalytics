//var User = require('../models/user.js');
var clashApi = require('clash-of-clans-api');
var _ = require('underscore');


exports = module.exports = {};
// exports.getUserByName = (name, next) => {

//     User.findOne({name: name}, function(err, user) {
//         if (err) {
//             console.log(err);
//             console.log("error");
//         }
//             console.log(user);
//             next(user);
        
//     });
// }

exports.getClanMembers = (clanTag, next) => {
    var client = clashApi({
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY5NzQ3NjY1LTFlYjYtNDFkZS1hNmFjLTJiYTIxNWI5OTU3MCIsImlhdCI6MTQ1NTE2MzIwNywic3ViIjoiZGV2ZWxvcGVyL2E5MjA5NTI2LWUxNzItNTdmMy0wMzM5LTI1MDRiZTE4MjA2MiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwOC41OS44NC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.V_XE8fabxfLQSQ61dpw4_kRGHux4w96PQlCf6yteB09_my5WANl_VIDoFRJA-Bt5hGpDMGsNnNwjoHzNtkfhfQ'
    });
    
    client
    .clanByTag(clanTag)
    .then((response) => {
          var members = [];
          _.each(response.memberList, (mem) => {
             members.push(mem);
          })
          next(members);
      })
      .catch(err => console.log(err));
    
}

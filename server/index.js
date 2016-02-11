import clashApi from 'clash-of-clans-api';
import User from './models/user';
import _ from 'underscore';
import mongoose from 'mongoose';



let client = clashApi({
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjY5NzQ3NjY1LTFlYjYtNDFkZS1hNmFjLTJiYTIxNWI5OTU3MCIsImlhdCI6MTQ1NTE2MzIwNywic3ViIjoiZGV2ZWxvcGVyL2E5MjA5NTI2LWUxNzItNTdmMy0wMzM5LTI1MDRiZTE4MjA2MiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwOC41OS44NC4xMzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.V_XE8fabxfLQSQ61dpw4_kRGHux4w96PQlCf6yteB09_my5WANl_VIDoFRJA-Bt5hGpDMGsNnNwjoHzNtkfhfQ'
});


var memberList;
client
  .clanByTag('#PVLU9G9')
  .then(response => {
    
    var members = [];
    _.each(response.memberList, (mem) => {
      
      User.create(mem, function (err, mem) {
      if (err) console.log(err);
      console.log(mem);
      
      });
      
    })
  })
  .catch(err => console.log(err));
  
mongoose.connect('mongodb://localhost:27017/clashv1');

  
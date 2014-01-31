var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if(err) throw err;

    var studenti = db.collection('students') ;
    for (var l= 0; l< 200;                         l++ )   {
        var query = {_id: l };
        studenti.findOne( query, function(err, hw) {
            if(err) throw err;
            if(!hw) {
                console.log('No documents for assignment ' + query._id + ' found!');
                return db.close();
            }

            var j, k, h1 = 0 , h2 = 0; 
            for (i=0;i<hw.scores.length;i++) {
                if (hw.scores[i].type == "homework" ) {
                    if (h1 == 0 ) {
                        h1 = hw.scores[i].score;
                        j= i ;
                    } else { 
                        h2 = hw.scores[i].score; 
                        k = i ;
                    }
                }
            }
            if ( ( h1 - h2 ) < 0 ){
                    hw_pul = { $pull : { 'scores' : {'type' : 'homework', 'score' : h1 }} } ;
            } else { 
                    hw_pul = { $pull : { 'scores' : {'type' : 'homework', 'score' : h2 }} } ;
            }
            
            var query = {'_id' : hw ['_id'] };

            studenti.update(query, hw_pul, function(err, result) {
                "use strict";
                if(err) throw err;
                console.log("Successfully updated " + result + '  = ' + query['_id'] + " document!");
            });

        });
    }
});


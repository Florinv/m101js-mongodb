 Homework 3.1 one solution :
There are many problems:
- you must now the numbers of students;
- for every students you must find in 'scores array' the {type: homework and the little scores.score if he have two, between the two,
- find in 'scores array' who scores.score with type: homework is little and retain the little value h1 if(h1<h2 ) or h2 if(h1>h2).
( when make update:>
students.update({'_id': x},{ $pull : { 'scores' : {'type' : 'homework', 'score' : h2 }} } , function(err, result) { )
- si asa mai departe pentru 200 de students for(x=0x<200;x++) { ..here find h1 or h2 and update from above ... },

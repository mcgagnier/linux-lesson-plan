//What is indexing on a database?

//When I have a column in a database, say a first name column, that column may be 50 characters long per record. These records are not going to be unique and neither will they be sorted according to their binary values. So, in order to find all matching occurences of the name 'Zach' in a table in that column, the database much search through every single record. If I have 5 million records in a table, it must search all 5 million records to decide that there are only 15 instances of 'Zach' in the entire table.

//Indexes aim to solve this problem. I can create an index on the first name column and drastically reduce the amount of time that it takes to search a column. if I create an index on firstName with the first 4 characters, the database will create another table behind the scenes that is an binary orded column of the first 4 characters in the first name column.

//Example
//'ange'
//'arty'
//....
//'zach'
//'zack'

//Now, the next time that I go to search this table's first name column, and I ask for all records of 'Zach', it jumps to the first instance of 'Zach', goes until it not longer has a match and knows that there are no further matches in the table. It may only search through 100 records instead of 5 million. This is why indexing can speed up the process so much.

//The downside of indexing is that it takes 1. physical space on the disk to create the indexed table and 2. it takes longer to write a new record to the table for each indexed column because it must not only write the record to the original table, but then has to go write it to the indexed table and reorganize that table

//Show examples of using databse indexes using postgresql and index.js and logging out times 

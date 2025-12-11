const quizData = {
    DBMS: [
        {
            level: 'easy',
            question: 'What does DBMS stand for?',
            options: ['Database Management System', 'Data Base Management Software', 'Database Manipulation System', 'Data Backup Management System'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'Which of the following is a type of database model?',
            options: ['Hierarchical', 'Relational', 'Network', 'All of the above'],
            correct: 3
        },
        {
            level: 'hard',
            question: 'In SQL, what does ACID stand for?',
            options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Integrity, Data', 'Atomic, Consistent, Isolated, Durable', 'All Correct, Integrity, Data'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a foreign key?',
            options: ['A key that references another table', 'A unique key', 'A primary key', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a join in SQL?',
            options: ['Combining rows from tables', 'Selecting data', 'Updating data', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is a view in DBMS?',
            options: ['Virtual table', 'Physical table', 'Index', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is DDL?',
            options: ['Data Definition Language', 'Data Manipulation Language', 'Data Control Language', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is DML?',
            options: ['Data Manipulation Language', 'Data Definition Language', 'Data Control Language', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain indexing.',
            options: ['Improves query performance', 'Stores data', 'Normalizes data', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a tuple?',
            options: ['Row in table', 'Column', 'Database', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a schema?',
            options: ['Structure of database', 'Data', 'Queries', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is concurrency control?',
            options: ['Managing simultaneous access', 'Storing data', 'Querying data', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a trigger?',
            options: ['Automatic action on event', 'Query', 'Index', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a stored procedure?',
            options: ['Precompiled SQL code', 'Table', 'View', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is data warehousing?',
            options: ['Central repository for data', 'Database', 'Table', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is NoSQL?',
            options: ['Non-relational database', 'SQL database', 'Relational', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is MongoDB?',
            options: ['NoSQL database', 'SQL database', 'Tool', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain CAP theorem.',
            options: ['Consistency, Availability, Partition tolerance', 'Atomicity, Consistency, Isolation', 'None', 'All'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a transaction?',
            options: ['Unit of work', 'Query', 'Table', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is rollback?',
            options: ['Undo changes', 'Commit changes', 'Save changes', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is sharding?',
            options: ['Horizontal partitioning', 'Vertical partitioning', 'Indexing', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is ER diagram?',
            options: ['Entity-Relationship diagram', 'Data flow', 'Schema', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is cardinality?',
            options: ['Number of relationships', 'Data type', 'Key', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain BCNF.',
            options: ['Boyce-Codd Normal Form', 'First Normal Form', 'Second', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a cursor?',
            options: ['Pointer to result set', 'Query', 'Table', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a deadlock?',
            options: ['Circular wait', 'Single wait', 'No wait', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is OLAP?',
            options: ['Online Analytical Processing', 'Online Transaction Processing', 'Data Mining', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a blob?',
            options: ['Binary large object', 'Text data', 'Number', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a clob?',
            options: ['Character large object', 'Binary', 'Number', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain data mining.',
            options: ['Extracting patterns from data', 'Storing data', 'Querying', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a database administrator?',
            options: ['Manages database', 'Develops apps', 'Designs UI', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is backup?',
            options: ['Copy of data', 'Original data', 'New data', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is replication?',
            options: ['Copying data to multiple sites', 'Backing up', 'Indexing', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a query?',
            options: ['Request for data', 'Data', 'Table', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a subquery?',
            options: ['Query within query', 'Main query', 'Simple query', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain SQL injection.',
            options: ['Security vulnerability', 'Optimization', 'Indexing', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a relation?',
            options: ['Table', 'Column', 'Row', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is an attribute?',
            options: ['Column', 'Row', 'Table', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is functional dependency?',
            options: ['Relationship between attributes', 'Data type', 'Key', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a domain?',
            options: ['Set of values', 'Table', 'Column', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a candidate key?',
            options: ['Potential primary key', 'Foreign key', 'Super key', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain 3NF.',
            options: ['Third Normal Form', 'First', 'Second', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a super key?',
            options: ['Set of attributes identifying row', 'Primary key', 'Foreign key', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a composite key?',
            options: ['Key with multiple attributes', 'Single attribute', 'Foreign', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is data integrity?',
            options: ['Accuracy of data', 'Speed', 'Storage', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a log file?',
            options: ['Records changes', 'Stores data', 'Queries', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a checkpoint?',
            options: ['Point to recover from', 'Start point', 'End point', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain two-phase locking.',
            options: ['Concurrency control protocol', 'Recovery', 'Backup', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a database schema?',
            options: ['Logical structure', 'Physical', 'Data', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is a data dictionary?',
            options: ['Metadata repository', 'Data storage', 'Queries', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is ETL?',
            options: ['Extract, Transform, Load', 'Extract, Transfer, Load', 'Edit, Transform, Load', 'None'],
            correct: 0
        }
    ],
    OOPS: [
        {
            level: 'easy',
            question: 'What does OOPS stand for?',
            options: ['Object Oriented Programming System', 'Object Oriented Programming Software', 'Object Oriented Program Structure', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is encapsulation?',
            options: ['Hiding data', 'Inheriting properties', 'Polymorphism', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is polymorphism?',
            options: ['Many forms', 'Single form', 'No forms', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is a class?',
            options: ['Blueprint for objects', 'Instance of object', 'Method', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is inheritance?',
            options: ['Acquiring properties', 'Hiding properties', 'Overloading', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain method overriding.',
            options: ['Same method in subclass', 'Different method', 'No method', 'None'],
            correct: 0
        }
    ],
    CN: [
        {
            level: 'easy',
            question: 'What does CN stand for?',
            options: ['Computer Networks', 'Central Network', 'Communication Node', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is TCP/IP?',
            options: ['Protocol suite', 'Hardware', 'Software', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is subnetting?',
            options: ['Dividing network', 'Combining networks', 'Routing', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is IP address?',
            options: ['Unique identifier', 'Domain name', 'Port number', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is HTTP?',
            options: ['Hypertext Transfer Protocol', 'Hyper Transfer Protocol', 'High Transfer Protocol', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain OSI model.',
            options: ['7 layers', '5 layers', '3 layers', 'None'],
            correct: 0
        }
    ],
    Software: [
        {
            level: 'easy',
            question: 'What is SDLC?',
            options: ['Software Development Life Cycle', 'System Development Life Cycle', 'Software Design Life Cycle', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is Agile?',
            options: ['Methodology', 'Tool', 'Language', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is Scrum?',
            options: ['Framework', 'Method', 'Process', 'None'],
            correct: 0
        },
        {
            level: 'easy',
            question: 'What is testing?',
            options: ['Finding bugs', 'Writing code', 'Designing', 'None'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'What is version control?',
            options: ['Managing changes', 'Compiling code', 'Running code', 'None'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'Explain CI/CD.',
            options: ['Continuous Integration/Deployment', 'Code Integration/Development', 'Continuous Code/Deployment', 'None'],
            correct: 0
        }
    ],
    Aptitude: [
        {
            level: 'easy',
            question: 'What is 2 + 2?',
            options: ['3', '4', '5', '6'],
            correct: 1
        },
        {
            level: 'intermediate',
            question: 'Solve: 5 * 6',
            options: ['30', '25', '35', '40'],
            correct: 0
        },
        {
            level: 'hard',
            question: 'What is the square root of 144?',
            options: ['10', '12', '14', '16'],
            correct: 1
        },
        {
            level: 'easy',
            question: 'What is 10 % 3?',
            options: ['1', '2', '3', '0'],
            correct: 0
        },
        {
            level: 'intermediate',
            question: 'Solve: 8 / 2',
            options: ['3', '4', '5', '6'],
            correct: 1
        },
        {
            level: 'hard',
            question: 'What is 2^3?',
            options: ['6', '8', '10', '12'],
            correct: 1
        }
    ]
};

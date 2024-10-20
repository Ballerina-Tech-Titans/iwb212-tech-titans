import ballerinax/mysql;
import ballerinax/mysql.driver as _; // This bundles the driver to the project so that you don't need to bundle it via the Ballerina.toml file.
import ballerina/sql;

public type User record {|
    int id?;
    string name;
    string email;
    string password;  // Only store the hashed password
    string cpassword; // Should also be hashed before storing
|};

public type Organizer record {|
    int id?;
    string event_name;
    string event_description;
    string date;
    string event_category;
    string ticket;
    string organizer_name;
    string contact_no;
    string email;
|};



configurable string USER = ?;
configurable string PASSWORD = ?;
configurable string HOST = ?;
configurable int PORT = ?;
configurable string DATABASE = ?;

final mysql:Client dbClient = check new(
    host=HOST, user=USER, password=PASSWORD, port=PORT, database="ballerina"
);

isolated function register(User user) returns int|error {
    // Insert the plain text passwords into the database
    sql:ExecutionResult result = check dbClient->execute(`
        INSERT INTO users (id, name, email, password, cpassword)
        VALUES (${user.id}, ${user.name}, ${user.email}, 
                ${user.password}, ${user.cpassword})
    `);

    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}



isolated function getAllUsers() returns User[]|error {
    User[] users = [];
    stream<User, error?> resultStream = dbClient->query(
        `SELECT * FROM users`
    );
    check from User user in resultStream
        do {
            users.push(user);
        };
    check resultStream.close();
   return users;
}












isolated function registerOrganizer(Organizer organizer) returns int|error {
    // Insert the plain text passwords into the database
    sql:ExecutionResult result = check dbClient->execute(`
    INSERT INTO organizers (id, event_name, event_description, date, event_category, ticket, organizer_name, contact_no, email)
    VALUES (${organizer.id}, ${organizer.event_name}, ${organizer.event_description}, ${organizer.date}, 
            ${organizer.event_category}, ${organizer.ticket}, ${organizer.organizer_name}, ${organizer.contact_no}, 
            ${organizer.email})
`);


    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}

isolated function getAllOrganizers() returns Organizer[]|error {
    Organizer[] organizers = [];
    stream<Organizer, error?> resultStream = dbClient->query(
        `SELECT * FROM organizers`
    );
    check from Organizer organizer in resultStream
        do {
            organizers.push(organizer);
        };
    check resultStream.close();
   return organizers;
}


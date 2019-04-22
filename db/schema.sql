CREATE TABLE dvorane (
    id SERIAL,
    ime VARCHAR(30),
    size SMALLINT,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id SERIAL,
    username VARCHAR(30),
    logininfo PASSWORD,
    privilege TINYINT,
    PRIMARY KEY (id) --verified, regular, admin
);

CREATE TABLE admin_sessions (
    id SERIAL,
    lastacces DATETIME,
    created DATETIME,
    userid INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE reservations (
    id SERIAL,
    reserved_from DATETIME,
    reserved_untill DATETIME,
    r_status TINYINT,
    reserved_by INT,
    dvorana INT,
    PRIMARY KEY (id),
    FOREIGN KEY (reserved_by) REFERENCES users(id),
    FOREIGN KEY (dvorana) REFERENCES dvorane(id),
);
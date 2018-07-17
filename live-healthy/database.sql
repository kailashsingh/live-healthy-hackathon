DROP DATABASE IF EXISTS liveHealthy;
CREATE DATABASE liveHealthy;

\c liveHealthy;

CREATE TABLE Reminder (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  active Boolean,
  datetime timestamp,
  goal_id VARCHAR
);

CREATE TABLE Goal (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  active Boolean,
  description VARCHAR
);

CREATE TABLE User (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  active Boolean,
  corrdinates point
);


INSERT INTO Reminder (name, active, datetime, goal_id)
  VALUES ('Alert M1', true, '2018-06-22 19:10:25-07', 1);
INSERT INTO Reminder (name, active, datetime, goal_id)
  VALUES ('Alert M2', true, '2018-05-22 19:10:25-07', 2);
INSERT INTO Reminder (name, active, datetime, goal_id)
  VALUES ('Alert M3', true, '2018-06-21 19:10:25-07', 3);
INSERT INTO Reminder (name, active, datetime, goal_id)
  VALUES ('Alert M4', true, '2018-06-22 10:10:25-07', 4);
INSERT INTO Reminder (name, active, datetime, goal_id)
  VALUES ('Alert M5', true, '2018-06-12 19:10:25-07', 1);

INSERT INTO Goal (name, active, description)
  VALUES ('Goal M1', true, 'Medicine Schedule');
INSERT INTO Goal (name, active, description)
  VALUES ('Goal M2', true, 'Medicine Schedule');
INSERT INTO Goal (name, active, description)
  VALUES ('Goal M3', true, 'Medicine Schedule');
INSERT INTO Goal (name, active, description)
  VALUES ('Goal M4', true, 'Medicine Schedule');
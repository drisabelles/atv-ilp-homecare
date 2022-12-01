CREATE DATABASE luminus;

CREATE TABLE Patients (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    age INT(3),
    gender BOOLEAN,
    street VARCHAR(30),
    city VARCHAR(30),
    state VARCHAR(30),
    phone FLOAT(15),
    secondaryPhone FLOAT(15)
);

CREATE TABLE Anamnesis (
	code INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    bloodType BOOLEAN,
    rhFactor BOOLEAN,
    liveAlone BOOLEAN,
    deficiency BOOLEAN,
    locomotion BOOLEAN,
    basicActivities BOOLEAN,
    instrumentalActivities BOOLEAN,
    smoke BOOLEAN,
    drink BOOLEAN,
    fisicalActivities BOOLEAN,
    diseases VARCHAR(100),
    patient_id INT
);

CREATE TABLE Medicals (
	code INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    doctorName VARCHAR (30),
    doctorPhone FLOAT(15),
    medicalInsuranceName VARCHAR(30),
    patient_id INT
);

CREATE TABLE Medicines (
	code INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    dosage FLOAT(15),
    howManyTimes INT(2),
    howManyPills FLOAT(2),
    patient_id INT
);

CREATE TABLE Relatives (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(40),
    kinship VARCHAR(15),
    phone FLOAT(15),
    secondaryPhone FLOAT(15),
    email VARCHAR(50),
    patient_id INT
);

CREATE TABLE Users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(10),
    email VARCHAR(50),
    password VARCHAR(30)
);


ALTER TABLE Relatives ADD CONSTRAINT FK_RelativePatient FOREIGN KEY (patient_id) REFERENCES Patient(id);
ALTER TABLE Medicals ADD CONSTRAINT FK_MedicalsPatient FOREIGN KEY (patient_id) REFERENCES Patient(id);
ALTER TABLE Medicines ADD CONSTRAINT FK_MedicinesPatient FOREIGN KEY (patient_id) REFERENCES Patient(id);
ALTER TABLE Anamnesis ADD CONSTRAINT FK_AnamnesisPatient FOREIGN KEY (patient_id) REFERENCES Patient(id);


CREATE DATABASE DocToken;

CREATE TABLE token(
 token_id SERIAL PRIMARY KEY,
 name VARCHAR(255),
 phoneNumber VARCHAR(255),
 token_type VARCHAR(255)
);
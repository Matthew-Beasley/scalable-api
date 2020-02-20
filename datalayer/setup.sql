CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS dogs;
DROP TABLE IF EXISTS shelters;

CREATE TABLE shelters (
  shelter_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  shelter_name VARCHAR(100),
);

CREATE TABLE dogs (
  dog_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
  dog_name VARCHAR(100) NOT NULL,
  shelter_id UUID REFERENCES shelters(shelter_id)
);

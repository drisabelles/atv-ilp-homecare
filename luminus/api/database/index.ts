import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "luminus123",
  database: "luminus",
});

client.connect();

export default async (query: string, values?: any) => {
  const { rows } = await client.query(query, values);
  return rows;
};
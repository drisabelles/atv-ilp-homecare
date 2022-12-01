import dbQuery from "../../api/database";

export type User = {
  username: string;
  email: string;
  password: string;
}

class UserRepository {

  async create(user: User) {
    const [row] = await dbQuery(
      `
      INSERT INTO Users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [user.username, user.email, user.password]
    );
    return row;
  }

  async update(id: string, user: User) {
    const row = await dbQuery(
      `
      UPDATE users
      SET username = $1, email = $2, password = $3
      WHERE id = $4
      RETURNING *
      `,
      [user.username, user.email, user.password, id]
    );
    return row;
  }

  async deleteById(id: string) {
    const deleteOp = await dbQuery(
      `
      DELETE FROM Users
      WHERE id = $1
      `,
      [id]
    );
    return deleteOp;
  }
}

export default new UserRepository();
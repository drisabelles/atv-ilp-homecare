import dbQuery from "../../api/database";

export type Relative = {
  name: string;
  kinship: string;
  phone: string;
  secondaryPhone: string;
  email: string;
};

class RelativeRepository {
  async findAll(patient_id: number) {
    const rows = await dbQuery(
      `
      SELECT * FROM Relatives
      WHERE patient_id = $1
      `,
      [patient_id]
    );
    return rows;
  }

  async create(relative: Relative) {
    const [row] = await dbQuery(
      `
      INSERT INTO Relatives (name, kinship, phone, secondaryPhone, email)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [relative.name, relative.kinship, relative.phone, relative.secondaryPhone, relative.email]
    );
    return row;
  }

  async update(code: string, relative: Relative) {
    const row = await dbQuery(
      `relatives
      UPDATE Relatives
      SET name = $1, dosage = $2, howManyTimes = $3, howManyPills = $4, WHERE code = $5
      RETURNING *
      `,
      [relative.name, relative.kinship, relative.phone, relative.secondaryPhone, relative.email, code]
    );
    return row;
  }

  async deleteById(id: number) {
    const deleteOp = await dbQuery(
      `
      DELETE FROM Relatives
      WHERE id = $1
      `,
      [id]
    );
    return deleteOp;
  }

}

export default new RelativeRepository();
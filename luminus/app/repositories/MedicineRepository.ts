import dbQuery from "../../api/database";

export type Medicine = {
  name: string;
  dosage: number;
  howManyTimes: number;
  howManyPills: number;
};

class MedicineRepository {
  async findAll(patient_id: number) {
    const rows = await dbQuery(
      `
      SELECT * FROM Medicines
      WHERE patient_id = $1
      `,
      [patient_id]
    );
    return rows;
  }

  async create(medicines: Medicine) {
    const [row] = await dbQuery(
      `
      INSERT INTO Medicines (name, dosage, howManyTimes, howManyPills)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [medicines.name, medicines.dosage, medicines.howManyTimes, medicines.howManyPills]
    );
    return row;
  }

  async update(code: string, medicines: Medicine) {
    const row = await dbQuery(
      `medicines
      UPDATE Medicines
      SET name = $1, dosage = $2, howManyTimes = $3, howManyPills = $4, WHERE code = $5
      RETURNING *
      `,
      [medicines.name, medicines.dosage, medicines.howManyTimes, medicines.howManyPills, code]
    );
    return row;
  }

  async deleteById(id: number) {
    const deleteOp = await dbQuery(
      `
      DELETE FROM Medicines
      WHERE id = $1
      `,
      [id]
    );
    return deleteOp;
  }

}

export default new MedicineRepository();
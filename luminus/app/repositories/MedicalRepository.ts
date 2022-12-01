import dbQuery from "../../api/database";

export type Medical = {
  doctorName: string;
  doctorPhone: number;
  medicalsInsuranceName: string;
};

class MedicalRepository {
  async findAll(patient_id: number) {
    const rows = await dbQuery(
      `
      SELECT * FROM Medicals
      WHERE patient_id = $1
      `,
      [patient_id]
    );
    return rows;
  }

  async create(medicals: Medical) {
    const [row] = await dbQuery(
      `
      INSERT INTO medicals (doctorName, doctorPhone, medicalsInsuranceName)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [medicals.doctorName, medicals.doctorPhone, medicals.medicalsInsuranceName]
    );
    return row;
  }

  async update(code: string, medicals: Medical) {
    const row = await dbQuery(
      `medicals
      UPDATE Medicals
      SET doctorName = $1, doctorPhone = $2, medicalsInsuranceName = $3, WHERE code = $4
      RETURNING *
      `,
      [medicals.doctorName, medicals.doctorPhone, medicals.medicalsInsuranceName, code]
    );
    return row;
  }

  async deleteById(id: number) {
    const deleteOp = await dbQuery(
      `
      DELETE FROM Medicals
      WHERE id = $1
      `,
      [id]
    );
    return deleteOp;
  }

}

export default new MedicalRepository();
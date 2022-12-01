import dbQuery from "../../api/database";

export type Patient = {
  name: string;
  age: number;
  gender: string;
  street: string;
  city: string;
  state: string;
  phone: string;
  secondaryPhone: string;
};

class PatientRepository {
  async findAll() {
    const rows = await dbQuery(
      `
      SELECT * FROM Patients
      ORDER BY name ASC
      `
    );
    return rows;
  }

  async findById(id: string) {
    const [row] = await dbQuery(
      `
      SELECT * FROM Patient
      WHERE id = $1
      `,
      [id]
    );
    return row;
  }

  async create(patient: Patient) {
    const [row] = await dbQuery(
      `
      INSERT INTO Patients (name, age, gender, street, city, state, phone, secondaryPhone)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [patient.name, patient.age, patient.gender, patient.street, patient.city, patient.state, patient.phone, patient.secondaryPhone]
    );
    return row;
  }

  async update(id: string, patient: Patient) {
    const row = await dbQuery(
      `Patient
      UPDATE Patients
      SET name = $1, age = $2, gender = $3, street = $4, city = $5, state = $6, phone = $7, secondaryPhone = $8
      WHERE id = $9
      RETURNING *
      `,
      [patient.name, patient.age, patient.gender, patient.street, patient.city, patient.state, patient.phone, patient.secondaryPhone, id]
    );
    return row;
  }

  async deleteById(id: string) {
    const deleteOp = await dbQuery(
      `
      DELETE FROM Patients
      WHERE id = $1
      `,
      [id]
    );
    return deleteOp;
  }

}

export default new PatientRepository();
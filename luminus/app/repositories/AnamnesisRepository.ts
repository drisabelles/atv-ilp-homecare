import dbQuery from "../../api/database";

export type Anamnesis = {
  bloodType: string;
  rhFactor: string;
  liveAlone: string;
  deficiency: string;
  locomotion: string;
  basicActivities: string;
  instrumentalActivities: string;
  smoke: string;
  drink: string;
  fisicalActivities: string;
  diseases: string;
};

class AnamnesisRepository {
  async findAll(patient_id: number) {
    const rows = await dbQuery(
      `
      SELECT * FROM Anamnesis
      WHERE patient_id = $1
      `,
      [patient_id]
    );
    return rows;
  }

  async create(anamnesis: Anamnesis) {
    const [row] = await dbQuery(
      `
      INSERT INTO Anamnesiss (bloodType, rhFactor, liveAlone, deficiency, locomotion, basicActivities, instrumentalActivities, smoke, drink, fisicalActivities, diseases)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [anamnesis.bloodType, anamnesis.rhFactor, anamnesis.liveAlone, anamnesis.deficiency, anamnesis.locomotion, anamnesis.basicActivities, anamnesis.instrumentalActivities, anamnesis.smoke, anamnesis.drink, anamnesis.fisicalActivities, anamnesis.diseases]
    );
    return row;
  }

  async update(code: string, anamnesis: Anamnesis) {
    const row = await dbQuery(
      `anamnesis
      UPDATE Anamnesis
      SET bloodType = $1, rhFactor = $2, liveAlone = $3, deficiency = $4, locomotion = $5, basicActivities = $6, instrumentalActivities = $7, smoke = $8, drink = $9, fisicalActivities = $10, diseases = $11
      WHERE code = $12
      RETURNING *
      `,
      [anamnesis.bloodType, anamnesis.rhFactor, anamnesis.liveAlone, anamnesis.deficiency, anamnesis.locomotion, anamnesis.basicActivities, anamnesis.instrumentalActivities, anamnesis.smoke, anamnesis.drink, anamnesis.fisicalActivities, anamnesis.diseases, code]
    );
    return row;
  }

  async deleteById(id: string) {
    const deleteOp = await dbQuery(
      `
      DELETE FROM Anamnesis
      WHERE id = $1
      `,
      [id]
    );
    return deleteOp;
  }

}

export default new AnamnesisRepository();
import { MigrationInterface, QueryRunner } from "typeorm";

export class editAdmMigration1679858010623 implements MigrationInterface {
    name = 'editAdmMigration1679858010623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdm" boolean NOT NULL`);
    }

}

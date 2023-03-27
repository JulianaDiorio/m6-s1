import { MigrationInterface, QueryRunner } from "typeorm";

export class deleteContactMigration1679660666344 implements MigrationInterface {
    name = 'deleteContactMigration1679660666344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "deletedAt"`);
    }

}

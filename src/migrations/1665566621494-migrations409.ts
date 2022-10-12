import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations4091665566621494 implements MigrationInterface {
    name = 'migrations4091665566621494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying(50) NOT NULL, "name" character varying(50) NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

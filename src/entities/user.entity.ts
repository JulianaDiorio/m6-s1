import { Contacts } from "./contacts.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { hashSync } from "bcryptjs";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 18 })
  phone: string;

  @Column({ length: 120 })
  password: string;

  @Column({ type: "boolean" })
  isAdm: boolean;

  @Column({ nullable: true, default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  encryptPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Contacts, (contacts) => contacts.user)
  contacts: Contacts[];
}

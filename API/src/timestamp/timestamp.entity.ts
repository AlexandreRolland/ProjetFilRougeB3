import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class TimeStamp {
    @CreateDateColumn({ nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
}

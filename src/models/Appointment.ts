import { parse, v4 as uuid } from 'uuid'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
@Entity('appointments')
class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;
    @Column('time without time zone')
    date: Date;

    constructor({ provider, date }: Omit<Appointment, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }

}

export default Appointment;
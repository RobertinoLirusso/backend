import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Club {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    city: string;
  
    @Column()
    country: string;
  
    @Column()
    badge: string;
  
    @Column()
    founded: string;
  
    @Column()
    stadium: string;
}
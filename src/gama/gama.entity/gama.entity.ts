export class GamaEntity {}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Producto } from '/root/masgjardineria/masg-api-jardineria/src/producto/producto.entity/producto.entity';

@Entity()
export class Gama{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    @OneToMany(() => Producto, producto => producto.gama)
    productos: Producto[];
}
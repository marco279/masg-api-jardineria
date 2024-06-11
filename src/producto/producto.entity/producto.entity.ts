export class ProductoEntity {}
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Gama } from '/root/masgjardineria/masg-api-jardineria/src/gama/gama.entity/gama.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @ManyToOne(() => Gama, (gama: { productos: any; }) => gama.productos)
  gama: Gama;
}

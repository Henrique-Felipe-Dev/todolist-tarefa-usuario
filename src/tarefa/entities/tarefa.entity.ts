import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: 'tb_tarefa'})
export class Tarefa {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @MaxLength(500)
    @Column({nullable: false, length: 500})
    @ApiProperty()
    descricao: string
    
    @Column()
    @ApiProperty()
    data: Date

    @Column()
    @ApiProperty()
    status: boolean

    @ManyToOne(() => Usuario, (usuario) => usuario.tarefas, {
        onDelete: "CASCADE"
    })
    @ApiProperty({type: () => Usuario})
    usuario: Usuario

}
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "../../tarefa/entities/tarefa.entity";

@Entity('tb_usuario')
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length: 50})
    @ApiProperty()
    nome: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({nullable: false, length: 255})
    @ApiProperty()
    senha: string

    @OneToMany(() => Tarefa, (tarefa) => tarefa.usuario)
    @ApiProperty()
    tarefas: Tarefa[]

}
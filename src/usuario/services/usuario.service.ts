import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";

export class CategoriaService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) {}

    async findAll(): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            relations: {
                tarefas: true
            }
        })
    }

    async findById(id: number): Promise<Usuario> {
        let categoria = await this.usuarioRepository.findOne({
            where: {
                id
            },
            relations: {
                tarefas: true
            }
        })

        if(!categoria)
            throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND)

        return categoria

    }

    async findByNome(nome: string): Promise<Usuario[]> {
        return this.usuarioRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                tarefas: true
            }
        })
    }

    async create(usuario: Usuario): Promise<Usuario> {
        return this.usuarioRepository.save(usuario)
    }

    async update(usuario: Usuario): Promise<Usuario> {

        let usuarioUpdate = await this.findById(usuario.id)

        if(!usuarioUpdate || !usuario.id)
            throw new HttpException('usuário não encontrado!', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.save(usuario)

    }

    async delete(id: number): Promise<DeleteResult> {

        let usuarioDelete = await this.findById(id)

        if(!usuarioDelete)
            throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND)

        return this.usuarioRepository.delete(id)
    }

}
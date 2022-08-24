import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "../controllers/usuario.controller";
import { Usuario } from "../entities/usuario.entity";
import { CategoriaService } from "../services/usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [CategoriaService],
    controllers: [UsuarioController],
    exports: [TypeOrmModule]
})
export class CategoriaModule {}
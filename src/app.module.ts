import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Usuario } from './usuario/entities/usuario.entity';
import { CategoriaModule } from './usuario/modules/usuario.module';
import { Tarefa } from './tarefa/entities/tarefa.entity';
import { TarefaModule } from './tarefa/modules/tarefa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_todolist',
      entities: [Tarefa, Usuario],
      synchronize: true
    }),
    TarefaModule,
    CategoriaModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

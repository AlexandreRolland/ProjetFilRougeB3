import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientModule } from './client/client.module';
import { DecorateurModule } from './decorateur/decorateur.module';
import { ConfigModule } from '@nestjs/config';
import { AnnonceModule } from './annonce/annonce.module';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    AuthModule,
    ClientModule,
    DecorateurModule,
    AnnonceModule,
    ProfileModule,
    ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

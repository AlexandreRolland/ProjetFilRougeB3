import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
  } from "typeorm";
  import { ClientEntity } from "../../client/entities/client.entity";
  import { DecorateurEntity } from "../../decorateur/entities/decorateur.entity";
  import { AnnonceEntity } from "../../annonce/entities/annonce.entity";
  
  @Entity("conversation")
  export class ChatEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToOne(() => ClientEntity, client => client.id)
    @JoinColumn()
    client: ClientEntity;
  
    @OneToOne(() => DecorateurEntity, decorateur => decorateur.id)
    @JoinColumn()
    decorateur: DecorateurEntity;
  
    @OneToOne(() => AnnonceEntity, annonce => annonce.id)
    @JoinColumn()
    annonce: AnnonceEntity;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  
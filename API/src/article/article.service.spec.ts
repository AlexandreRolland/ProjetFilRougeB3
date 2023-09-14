import { Test, TestingModule } from '@nestjs/testing';
import { ArticleService } from './article.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ArticleEntity } from './entities/article.entity';
import { UnauthorizedException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticleCategory } from './entities/article.entity';

// Début des tests pour le service ArticleService.
describe('ArticleService', () => {
  let service: ArticleService;
  let mockRepository;

  // Cette fonction est exécutée avant chaque test.
  beforeEach(async () => {
    // Création d'un faux dépôt avec des méthodes mockées pour la création et la sauvegarde.
    mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
    };

    // Configuration du module de test avec le service ArticleService et le faux dépôt.
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        {
          provide: getRepositoryToken(ArticleEntity), // Indique comment injecter le dépôt dans le service.
          useValue: mockRepository, // Utilise le faux dépôt à la place du vrai.
        },
      ],
    }).compile();

    // Récupération d'une instance du service ArticleService à partir du module de test.
    service = module.get<ArticleService>(ArticleService);
  });

  // Groupe de tests pour la méthode createArticle du service.
  describe('createArticle', () => {
    // Test pour vérifier que la création d'un article fonctionne correctement.
    it('should create an article successfully', async () => {
      const dto: CreateArticleDto = {
        title: 'Test Title',
        category: ArticleCategory.NEWS,
        content: 'Test Content',
        image: 'Test Image',
      };

      // Simule le comportement du dépôt lors de la création et de la sauvegarde d'un article.
      mockRepository.create.mockReturnValueOnce(dto);
      mockRepository.save.mockResolvedValueOnce(dto);

      // Appelle la méthode createArticle du service et vérifie que le résultat est correct.
      const result = await service.createArticle(dto);
      expect(result).toEqual(dto);
    });

    // Test pour vérifier que la méthode createArticle gère correctement les erreurs.
    it('should throw an error when creation fails', async () => {
      const dto: CreateArticleDto = {
        title: 'Test Title',
        category: ArticleCategory.NEWS,
        content: 'Test Content',
        image: 'Test Image',
      };

      // Simule une erreur lors de la sauvegarde d'un article dans le dépôt.
      mockRepository.create.mockReturnValueOnce(dto);
      mockRepository.save.mockRejectedValueOnce(new Error('Test Error'));

      // Vérifie que la méthode createArticle lance bien une exception en cas d'erreur.
      await expect(service.createArticle(dto)).rejects.toThrow(UnauthorizedException);
    });
  });
});

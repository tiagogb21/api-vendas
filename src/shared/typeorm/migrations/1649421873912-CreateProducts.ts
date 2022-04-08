import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1649421873912 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Vamos criar uma tabela que será responsável por trazer todas as configurações dos atributos que teremos na tela:
    await queryRunner.createTable(
      new Table({
        // nome da tabela:
        name: 'products',
        // Cada objeto vai ser uma coluna da tabela
        columns: [
          {
            // O atributo "name" é determinado para dizer qual o nome que a coluna irá ter
            name: 'id',
            // Qual o tipo que os valores da coluna irão assumir
            type: 'uuid', // uuid --> tipo universal para id, gerenciado automaticamente pelo typeorm
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'quantity',
            type: 'int',
          },
          {
            // Para que possamos obter a informação de quando o registro foi criado
            name: 'created_at',
            type: 'time_stamp',
            default: 'now()',
          },
          {
            // Para que possamos obter a informação de quando o registro foi alterado
            name: 'update_at',
            type: 'time_stamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Passamos como parâmetro o nome da tabela que foi criada
    await queryRunner.dropTable('products');
  }
}

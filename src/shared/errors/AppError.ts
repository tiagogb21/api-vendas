// Evita que precisemos usar try catch no nosso código, deixando-o mais limpo
class AppError {
  // Pode ser somente leitura porque estaremos exibindo a mensagem para o usuário
  public readonly message: string;
  public readonly statusCode: number;
  // Por padrão colocamos o statusCode como 400
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;

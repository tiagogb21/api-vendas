class AppError {
  // Pode ser somente leitura porque estaremos exibindo a mensagem para o usuário
  public readonly message: string;
  public readonly statusCode: number;
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;

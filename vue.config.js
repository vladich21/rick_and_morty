module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rick_and_morty/'  // Убедитесь, что это путь к вашему репозиторию на GitHub
    : '/'
}

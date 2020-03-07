module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarbaer',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

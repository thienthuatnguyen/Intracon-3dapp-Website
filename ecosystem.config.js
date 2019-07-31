module.exports = {
  apps: [
    {
      name: 'DMIFE',
      script: 'app/server/index.js',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        autorestart: false, // let docker handles restarts
        vizion: false
      }
    }
  ]
}

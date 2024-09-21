module.exports = {
    apps: [
      {
        name: 'waterposture',
        script: '/home/ram/workspaces/posture_reminder/dist/index.js',
        env: {
          NODE_ENV: 'production',
          DISPLAY: ':0'
        }
      }
    ]
  };
  
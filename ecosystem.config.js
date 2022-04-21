module.exports = {
    apps: [
        {
            name: 'testing3',
            script: 'dist/src/app.js',

            instances: '1',
            exec_mode: 'fork',
            autorestart: false,
            restart_delay: 5000,
            kill_timeout: 1000,
            merge_logs: true,
            error_file: 'c:\\eradaniApps\\testing3/logs/out.log',
            out_file: 'c:\\eradaniApps\\testing3/logs/out.log',
            env: {
                APP_ENV: 'development',
                NODE_ENV: 'development'
            },
            env_production: {
                APP_ENV: 'production',
                NODE_ENV: 'production'
            }
        }
    ]
};

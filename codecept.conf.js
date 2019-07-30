exports.config = {
    tests: './tests/**/*.js',
    timeout: 10000,
    output: './output',
    require: ['import-export', 'chai/register-expect'],
    helpers: {
        Puppeteer: {
            url: 'https://www.ag-grid.com/example.php#/',
            restart: false,
            keepBrowserState: true,
            keepCookies: true,
            fullPageScreenshots: true,
            show: true,
            windowSize: '3060x1600',
            waitForNavigation: ['networkidle2', 'domcontentloaded'],
            waitForAction: 1000,
            chrome: {
                args: ['--no-sandbox', '--lang=de', '--window-size=2000,1000'],
                defaultViewport: {
                    width: 2000,
                    height: 800,
                },
            },
        },
    },
    name: 'mcmakler-ui-tests',
    multiple: {
        parallel: {
            chunks: 6,
        },
    },
    plugins: {
        allure: {
            outputDir: './allureReport',
            enabled: true,
        },
        autoDelay: {
            enabled: false,
        },
    },
};

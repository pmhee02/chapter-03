
System.config({
    baseUrl: 'http://localhost:3000/',
    transpiler: 'typescript',
    typescriptOptions: { emitDecoratorMetadata: true }, 
    packages: { 
        'app': { main: 'application.ts', defaultExtension: 'ts' },
        'rxjs': { defaultExtension: 'js' }
    },
    map: {
        'rxjs': '/node_modules/rxjs',
        'typescript': 'node_modules/typescript/lib/typescript.js'
    }
});

System.import('app/bootstrap').then(null, console.error.bind(console));
/* const { moduleFileExtensions } = require("./jest.config");

module.exports = api => {
    const isTest = api.env('test');
    api.cache(true);
    return {
        presets:[
            
                
                [ 
                    '@babel/preset-env',   
                    { 
                      targets: {
                          browsers:['last 2 versions'],
                          node: 'current'
                        },
                      modules: isTest ? 'commonjs' : false
                    }
                ],
                '@babel/preset-typescript'
            
            ],
        plugins:[['@babel/plugin-proposal-decorators', {legacy: true}]]
    }
} */
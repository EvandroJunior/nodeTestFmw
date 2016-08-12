module.exports = {

    pessoa: {
        
        Fields: [
            {
                Type: 'input',
                Name: 'Nome',
                Value: 'teste121a3'
            }
        ]
    },

    processo: {
        
        Fields: [
            {
                Type: 'lookup',
                Name: 'NaturezaText',
                Value: 'Cível'
            },
            {
                Type: 'lookup',
                Name: 'Cliente_EnvolvidoText',
                Value: 'Escritório local'
            },
            {
                Type: 'lookup',
                Name: 'Cliente_PosicaoEnvolvidoText',
                Value: 'Chamado ao processo'
            },
            {
                Type: 'lookup',
                Name: 'Responsavel_EnvolvidoText',
                Value: 'Administrador',
                ClearBefore: true
            },
            {
                Type: 'lookup',
                Name: 'Responsavel_PosicaoEnvolvidoText',
                Value: 'Responsável',
                ClearBefore: true
            },
            {
                GrupoN : {
                    Link: 'add_outro_envolvido',
                    
                    Data: [
                        {
                            Type: 'select',
                            Name: 'SituacaoEnvolvidoId',
                            Value: 4
                        },
                        {
                            Type: 'lookup',
                            Name: 'PosicaoEnvolvidoText',
                            Value: 'Contador'
                        },
                        {
                            Type: 'lookup',
                            Name: 'EnvolvidoText',
                            Value: 'colucci08'
                        }                        

                    ]

                }
            }
                                                     
            
        ]
    }    

};
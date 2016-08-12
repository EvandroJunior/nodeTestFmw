require('should');
var basicModule = require('../infra/ui/modules/module.js');

function Mock() {
    this.compCount = 0;
}

var mockFunction = function(componentName, componentValue) {
    this.componentName = componentName;
    this.componentValue = componentValue;
    this.compCount++;
    return this;
};

Mock.prototype = {
    save: basicModule.save,
    inputFill: mockFunction,
    lookupFill: mockFunction,
    lookupClear: mockFunction,
    inputClear: mockFunction,
    click: function () {
        return {
            waitForNextPage: () => {
                this.nextPage = true;
                return this;
            }
        };
    }
};

var data =  {
    
    Fields: [
        {
            Type: 'input',
            Name: 'Nome',
            Value: 'teste123'
        },
        {
            Type: 'input',
            Name: 'Teste',
            Value : '123123'
        }
    ]
};


describe('Module', () => {
    
    it('Save should identify inputs', () => {
        var mock = new Mock();

        var data =  {
            Fields: [
                {
                    Type: 'input',
                    Name: 'Nome',
                    Value: 'colucci'
                }
            ]
        };
        
        mock.save(data);
        mock.componentName.should.be.exactly('Nome');
        mock.componentValue.should.be.exactly('colucci');
        mock.nextPage.should.be.true;
    });

    it('Save should identify lookups', () => {
        var mock = new Mock();
        
        var data =  {
            Fields: [
                {
                    Type: 'lookup',
                    Name: 'Nome',
                    Value: 'colucci'
                }
            ]
        };

        mock.save(data);
        mock.componentName.should.be.exactly('Nome');
        mock.componentValue.should.be.exactly('colucci');
        mock.nextPage.should.be.true;
    });

    it('Save should not accept strings', () => {
        var mock = new Mock();
        var comp = '[{ lookup$Nome: "colucci" }]';
        (() => mock.save(comp)).should.throw();
    });

    it('Save should identify inputs and lookups', () => {
        var mock = new Mock();

        var data =  {
            
            Fields: [
                {
                    Type: 'input',
                    Name: 'Nome',
                    Value: 'colucci'
                },
                {
                    Type: 'lookup',
                    Name: 'Nome',
                    Value : 'colucci'
                }
            ]
        };        

        mock.save(data);
        mock.compCount.should.be.exactly(2);
        mock.nextPage.should.be.true;
    });    

    it('Save should not care about components using capital letters', () => {
        var mock = new Mock();

        var data =  {
            
            Fields: [
                {
                    Type: 'Lookup',
                    Name: 'Nome',
                    Value: 'colucci'
                },
                {
                    Type: 'Input',
                    Name: 'Nome',
                    Value : 'colucci'
                }
            ]
        };        
        
        mock.save(data);
        mock.compCount.should.be.exactly(2);
        mock.nextPage.should.be.true;
    });   

    it('Save should not accept an undefined component name', () => {
        var mock = new Mock();

        var data =  {
            
            Fields: [
                {
                    Type: 'Lookup',
                    Name: '',
                    Value: 'colucci'
                }
            ]
        };        
        
        (() => mock.save(data)).should.throw();
    });    

    it('Save should not accept an undefined component type', () => {
        var mock = new Mock();

        var data =  {
            
            Fields: [
                {
                    Type: '',
                    Name: 'Teste',
                    Value: 'colucci'
                }
            ]
        };        

        (() => mock.save(data)).should.throw();
    });    

    it('Save should accept component blank value ', () => {
        var mock = new Mock();

        var data =  {
            
            Fields: [
                {
                    Type: 'Lookup',
                    Name: 'Nome',
                    Value: ''
                }
            ]
        }; 

        mock.save(data);
        mock.componentName.should.be.exactly('Nome');
        mock.componentValue.should.be.exactly('');
        mock.nextPage.should.be.true;
    });    
});

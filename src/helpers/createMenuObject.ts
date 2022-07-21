//criando types 
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

//criado a funcao q vai receber os parametros do nemu
export const createMenuObject = (activeMenu: MenuOptions)=>{
    let returnObject = {
        all: false,
        dog: false,
        cat:false,
        fish: false
    };

    if(activeMenu !== ''){
        
        returnObject[activeMenu] = true;
    }
    
    return returnObject;
}
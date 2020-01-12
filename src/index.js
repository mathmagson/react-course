import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import A, {CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponentesClasse from './componentes/ComponentesClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial = {100} /> */}
        {/* <ComponentesClasse valor = "Sou um componente de classe!" /> */}
        {/* <Pai /> */}
        {/* <ComponenteComFuncao /> */}
        {/* <Familia sobrenome = "Pereira">
            <Membro nome = "Andre" />
            <Membro nome = "Mariana" />
        </Familia> */}
        {/* <Familia>
            <Membro nome = "Bia" sobrenome = "Arruda" />
            <Membro nome = "Gustavo" sobrenome = "Arruda" />
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <MultiElementos /> */}
        {/* <A valor = "Olá eu sou A!" /> */}
        {/* <B valor = "Olá eu sou B!" /> */}
        {/* <PrimeiroComponente valor = "Bom dia!" aBcD = {Math.pow(2, 8)} /> */}
    </div>
, elemento)

//const elemento = document.getElementById('root')
//ReactDOM.render(<h1>Olá React</h1>, elemento)
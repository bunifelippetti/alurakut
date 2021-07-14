import React, { useState } from 'react'
import MainGrid from '../src/Components/MainGrid'
import Box from '../src/Components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/Components/ProfileRelations'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

function ProfileSidebar (propriedades) {
  return (
    <Box>
    <img src={`http://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: `8px` }} />
    <hr />

    <p>
      <a className="boxLink" href={`http://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
      </a>
    </p>
    <hr />

    <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'bunifelippetti';
  const [comunidades, setComunidades] = React.useState([{
    id: '912371936941635',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'

  }]);
  console.log(comunidades);
  //const comunidades =[ 'Alurakut']
  const pessoasFavoritas = [
    'juunegreiros',
    'rafaballerini',
    'mayra-ak',
    'ibere82',
    'peas',
    'omariosouto'
  ]

  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      {/* <Box style="gridArea: profileArea;"> */}
      <div className="profileArea" style={{ gridArea: `profileArea` }}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
      </div>
      <div className="welcomeArea" style={{ gridArea: `welcomeArea` }}>
        <Box>
          <h1 className='title'>
          Bem-vindo(a)
          </h1>
          
        <OrkutNostalgicIconSet />
        </Box>

        <Box>
          <h2 className="subtitle">
            O que você deseja fazer?
          </h2>
          <div>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault ();
              const dadosDoForm = new FormData(e.target);

              console.log('Campo:', dadosDoForm.get('title'))
              console.log('Campo:', dadosDoForm.get('image'))
             
              //comunidades.push('Alura Stars');
              const comunidade = {
                id: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image')
              }
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }}>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />          
            </form>
          </div>
          <div>
            <form>
              <input 
                placeholder="Coloque uma URL para usarmos de capa."
                name="image"
                aria-label="Coloque uma URL para usarmos de capa."
              />          
            </form>
            </div>

            <button>
              Criar comunidade
            </button>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: `profileRelationsArea` }}>
      <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
               
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return ( 
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} >
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>
            Comunidades ({comunidades.length})
          </h2>
               
          <ul>
            {comunidades.map((itemAtual) => {
              return ( 
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual.title}`} key={itemAtual}>
                  <img src={itemAtual.image} />
                  <span>{itemAtual.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
      
    </MainGrid>
  </>
  )
}

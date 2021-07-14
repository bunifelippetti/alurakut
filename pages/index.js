import MainGrid from '../src/Components/MainGrid'
import Box from '../src/Components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/alurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/Components/ProfileRelations'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

function ProfileSidebar (propriedades) {
  return (
    <Box>
    <img src={`http://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: `8px` }} />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'bunifelippetti';
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
      </div>
      <div className="profileRelationsArea" style={{ gridArea: `profileRelationsArea` }}>
        <ProfileRelationsBoxWrapper>
          <h2 className='smallTitle'>
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
               
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return ( 
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
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

import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1}></FiltroCard>
        <FiltroCard legenda="concluídas" contador={2}></FiltroCard>
        <FiltroCard legenda="urgentes" contador={1}></FiltroCard>
        <FiltroCard legenda="importantes" contador={4}></FiltroCard>
        <FiltroCard legenda="normal" contador={1}></FiltroCard>
        <FiltroCard legenda="todas" contador={10} ativo></FiltroCard>
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral

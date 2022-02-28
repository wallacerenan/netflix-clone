import { Wrapper } from './styles'

import Container from '@mui/material/Container'

const Footer: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Wrapper>
        <span>© 2022 Renan Wallace, Inc.</span>
      </Wrapper>
    </Container>
  )
}

export default Footer

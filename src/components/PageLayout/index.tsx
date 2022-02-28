import { Container, Content } from './styles'

import Header from 'components/Header'
import Footer from 'components/Footer'

const PageLayout: React.FC = ({ children }) => {
  return (
    <Container className="page-layout">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default PageLayout

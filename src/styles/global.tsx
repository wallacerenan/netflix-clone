import GlobalStyles from '@mui/material/GlobalStyles'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Global = () => (
  <GlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
      },
      li: {
        listStyleType: 'none',
      },
      'html, body': {
        backgroundColor: '#141414 !important',
        color: '#fff',
        height: '100%',
      },

      body: {
        overflowX: 'hidden',
      },

      'a, a:visited': {
        color: 'inherit',
        textDecoration: 'inherit',
      },
    }}
  />
)

export default Global

import GlobalStyles from '@mui/material/GlobalStyles'

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

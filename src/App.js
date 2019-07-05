/* Dependencies */
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
/* Theme */
import theme, { GlobalStyle } from './theme'
/* Pages */
import { Home } from './pages'
/* Container */
import { AppWrapper } from './containers'

const App = props => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyle />
			<AppWrapper {...props}>
				<Home />
			</AppWrapper>
		</Fragment>
	</ThemeProvider>
)

export default App

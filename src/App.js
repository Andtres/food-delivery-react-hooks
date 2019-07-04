/* Dependencies */
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
/* Theme */
import theme, { GlobalStyle } from './theme'
/* Container */
import { AppWrapper } from './containers'

const App = props => (
	<ThemeProvider theme={theme}>
		<Fragment>
			<GlobalStyle />
			<AppWrapper {...props}>
				<h2>hello world</h2>
			</AppWrapper>
		</Fragment>
	</ThemeProvider>
)

export default App

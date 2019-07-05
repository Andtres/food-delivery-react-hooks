/* Dependencies */
import styled, { withTheme, css } from 'styled-components'
import { ifProp } from 'styled-tools'

export default styled.div`
	margin: 0 auto;
	width: 90%;
	max-width: 1366px;
	${ifProp(
		'relative',
		css`
			position: relative;
		`
	)}
	${ifProp(
		'fullWrapper',
		css`
			width: 100%;
		`
	)}
`

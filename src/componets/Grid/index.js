/* Dependencies */
import styled, { withTheme } from 'styled-components'
import { prop } from 'styled-tools'

export default withTheme(styled.div`
	display: grid;
	grid-template-columns: ${prop('templateColumns', '2.8fr 1fr')};
`)

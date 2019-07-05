/* Dependencies */
import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Header = styled.header`
	padding-top: ${prop('theme.spacing.bigger')};
	.blue {
		background: blue;
    width: 100%;
    height: 20px;
	}
	.red {
		background: red;
    width: 100%;
    height: 20px;
	}
`

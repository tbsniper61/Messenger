import * as React from 'react';
import * as css from './theme/messages.css';
import {themr} from 'react-css-themr';
import {Component, ComponentClass} from 'react';
import {MakeTheme} from '../../../../utils/make-theme';
import {ObjectOptional} from '../../../../utils/object-optional';

export type TRawMessagesProps = {
	theme: MakeTheme<'container'>;
};

export class RawMessages extends Component<TRawMessagesProps> {
	render() {
		const {theme} = this.props;

		return <div className={theme.container}>Hello! I'm a Messages component!</div>
	}
}

const defaultTheme = {
	...css,
};

export type TMessagesProps = ObjectOptional<TRawMessagesProps, 'theme'>;

export const Messages: ComponentClass<TMessagesProps> = themr(
	'Messages',
	defaultTheme
)(RawMessages);

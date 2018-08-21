import * as React from 'react';
import * as css from './theme/message.css';
import {themr} from 'react-css-themr';
import {Component, ComponentClass} from 'react';
import {MakeTheme} from '../../../../utils/make-theme';
import {ObjectOptional} from '../../../../utils/object-optional';

export type TRawMessageProps = {
	theme: MakeTheme<'container'>;
};

export class RawMessage extends Component<TRawMessageProps> {
	render() {
		const {theme} = this.props;

		return <div className={theme.container}>Hello! I'm a Message component!</div>
	}
}

const defaultTheme = {
	...css,
};

export type TMessageProps = ObjectOptional<TRawMessageProps, 'theme'>;

export const Message: ComponentClass<TMessageProps> = themr(
	'Message',
	defaultTheme
)(RawMessage);

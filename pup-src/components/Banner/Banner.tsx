import React from 'react';
import { Wrapper } from './Atoms';

interface Props {
	title: string;
	subtitle: string;
}

const Banner: React.FC<Props> = ({
	title,
	subtitle,
}): React.ReactElement => (
	<Wrapper>
		<h1 className="text-3xl font-bold leading-7 text-white sm:text-4xl sm:leading-9 sm:truncate mt-5">
			{title}
		</h1>
		<h2 className="text-3xl font-bold leading-7 text-white sm:text-4xl sm:leading-9 sm:truncate mb-5">
			{subtitle}
			{/* <span data-hover="React TypeScript Template"/> */}
		</h2>
	</Wrapper>
);

export default Banner;

import React from 'react';
import styles from './deck-tile-grid.module.css';

export interface DeckTileGridProps {
	data: DeckTileGridItemDataModel[];
}

export interface DeckTileGridItemDataModel {
	id: string;
	description: string;
	name: string;
}

export const DeckTileGrid: React.FunctionComponent<DeckTileGridProps> = ({
	data,
}) => {
	return (
		<div className={styles['deck-tile-grid']}>
			{data.map((item) => {
				<pre key={item.id}>
					{item.name}
					{item.description}
				</pre>;
			})}
		</div>
	);
};

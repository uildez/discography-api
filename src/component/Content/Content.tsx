import * as React from 'react';

import { SearchBar } from '../SearchBar/SearchBar'
import { TableAPI } from '../Table/TableAPI';

export function Content() {
    return (
        <>
            <SearchBar />
            <TableAPI />
        </>
    );
}
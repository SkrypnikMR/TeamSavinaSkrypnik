import React from 'react';

import { withTheme } from '../withTheme';

describe('withTheme', () => {
    it('toBe defined', () => {
        expect(withTheme).toBeDefined();
    });
    it('toBe function', () => {
        expect(typeof withTheme).toBe('function');
    });
    it('should call', () => {
        const div = React.createElement('div');
        withTheme(div);
    });
});

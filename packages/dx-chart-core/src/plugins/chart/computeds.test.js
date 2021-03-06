import { prepareData } from './computeds';

describe('Prepare data', () => {
  it('should return data with extra fields', () => {
    const data = [{ arg: 1, val1: 3, val2: 4 }, { arg: 1.5 }, { arg: 2, val1: 5, val2: 6 }];
    const series = [{ valueField: 'val1', name: 'series1' }, { valueField: 'val2', name: 'series2' }];
    expect(prepareData(data, series)).toEqual([{
      arg: 1, val1: 3, val2: 4, 'val1-series1-stack': [0, 3], 'val2-series2-stack': [0, 4],
    }, {
      arg: 1.5,
    }, {
      arg: 2, val1: 5, val2: 6, 'val1-series1-stack': [0, 5], 'val2-series2-stack': [0, 6],
    }]);
  });

  it('should perform function passed to prepareData', () => {
    expect(prepareData([], [], jest.fn(() => 'preparedData'))).toBe('preparedData');
  });
});

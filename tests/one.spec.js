import { changeInOut, changeInOutArr } from '../src/utils/utils';

describe('utils', () => {
  it('utils changeInOut out', () => {
    const arr1 = ['0', '1', '2'];
    const value1 = '1';

    expect(changeInOut(arr1, value1)).toStrictEqual(['0', '2']);
  });
  it('utils changeInOut in', () => {
    const arr1 = ['0', '1', '2'];
    const value1 = '3';

    expect(changeInOut(arr1, value1)).toStrictEqual(['0', '1', '2', '3']);
  });

  it('utils changeInOutArr in', () => {
    const arr1 = ['0', '1', '2'];
    const value1 = ['3'];

    expect(changeInOutArr(arr1, value1)).toStrictEqual(['0', '1', '2', '3']);
  });
  it('utils changeInOutArr out', () => {
    const arr1 = ['0', '1', '2'];
    const value1 = ['1'];

    expect(changeInOutArr(arr1, value1)).toStrictEqual(['0', '2']);
  });

  it('utils changeInOutArr in out', () => {
    const arr1 = ['0', '1', '2'];
    const value1 = ['1', '3'];

    expect(changeInOutArr(arr1, value1)).toStrictEqual(['0', '2', '3']);
  });
  it('utils changeInOutArr in out', () => {
    const arr1 = ['0', '1', '2', '3', '4', '6'];
    const value1 = ['1', '3', '8', '11'];

    expect(changeInOutArr(arr1, value1)).toStrictEqual([
      '0',
      '2',
      '4',
      '6',
      '8',
      '11',
    ]);
  });
});

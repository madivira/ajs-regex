import Validator from '../Validator';

describe('Test Validator Falsy', () => {
  test('1test number', () => {
    const name = new Validator();
    expect(name.validateUsername('abra2323aa')).toBeFalsy();
  });

  test('2test home _', () => {
    const name = new Validator();
    expect(name.validateUsername('_abrcAA2x3aa')).toBeFalsy();
  });

  test('3test home -', () => {
    const name = new Validator();
    expect(name.validateUsername('-absdcZ123aa')).toBeFalsy();
  });

  test('4test home number', () => {
    const name = new Validator();
    expect(name.validateUsername('1ab1ra232aa')).toBeFalsy();
  });


  test('5test end _', () => {
    const name = new Validator();
    expect(name.validateUsername('abra23aa_')).toBeFalsy();
  });

  test('6test end-', () => {
    const name = new Validator();
    expect(name.validateUsername('abra123aa-')).toBeFalsy();
  });

  test('7test end number', () => {
    const name = new Validator();
    expect(name.validateUsername('abrAA23aa4')).toBeFalsy();
  });

  test('8test end+home', () => {
    const name = new Validator();
    expect(name.validateUsername('-abrAA23aa4')).toBeFalsy();
  });

  test('9test rus', () => {
    const name = new Validator();
    expect(name.validateUsername('abrыы23aa')).toBeFalsy();
  });

  test('10test rus all', () => {
    const name = new Validator();
    expect(name.validateUsername('вы123ыва-чч')).toBeFalsy();
  });

  test('11test all number', () => {
    const name = new Validator();
    expect(name.validateUsername('232341')).toBeFalsy();
  });
});

describe('Test Validator Truthy', () => {
  test('1test', () => {
    const name = new Validator();
    expect(name.validateUsername('a1b-z23aa')).toBeTruthy();
  });

  test('2test Up', () => {
    const name = new Validator();
    expect(name.validateUsername('aS-_22z23aa')).toBeTruthy();
  });

  test('3test Up all', () => {
    const name = new Validator();
    expect(name.validateUsername('SKABKJ112XSD_C')).toBeTruthy();
  });

  test('4test without number', () => {
    const name = new Validator();
    expect(name.validateUsername('Ss_ABKadSD-C')).toBeTruthy();
  });

  test('5test without -_', () => {
    const name = new Validator();
    expect(name.validateUsername('SscKadSDC')).toBeTruthy();
  });
});

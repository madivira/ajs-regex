import Validator from '../Validator';

describe('Test Validator Falsy', () => {
  test('1test number', () => {
    expect(Validator.validateUsername('abra2323aa')).toBeFalsy();
  });

  test('2test home _', () => {
    expect(Validator.validateUsername('_abrcAA2x3aa')).toBeFalsy();
  });

  test('3test home -', () => {
    expect(Validator.validateUsername('-absdcZ123aa')).toBeFalsy();
  });

  test('4test home number', () => {
    expect(Validator.validateUsername('1ab1ra232aa')).toBeFalsy();
  });

  test('5test end _', () => {
    expect(Validator.validateUsername('abra23aa_')).toBeFalsy();
  });

  test('6test end-', () => {
    expect(Validator.validateUsername('abra123aa-')).toBeFalsy();
  });

  test('7test end number', () => {
    expect(Validator.validateUsername('abrAA23aa4')).toBeFalsy();
  });

  test('8test end+home', () => {
    expect(Validator.validateUsername('-abrAA23aa4')).toBeFalsy();
  });

  test('9test rus', () => {
    expect(Validator.validateUsername('abrы23aa')).toBeFalsy();
  });

  test('10test rus home', () => {
    expect(Validator.validateUsername('фsdjl11s2z')).toBeFalsy();
  });

  test('11test rus end', () => {
    expect(Validator.validateUsername('sdSl11s2Rч')).toBeFalsy();
  });

  test('12test all number', () => {
    expect(Validator.validateUsername('232341')).toBeFalsy();
  });
});

describe('Test Validator Truthy', () => {
  test('1test', () => {
    expect(Validator.validateUsername('a1b-z23aa')).toBeTruthy();
  });

  test('2test Up', () => {
    expect(Validator.validateUsername('aS-_22z23aa')).toBeTruthy();
  });

  test('3test Up all', () => {
    expect(Validator.validateUsername('SKABKJ112XSD_C')).toBeTruthy();
  });

  test('4test without number', () => {
    expect(Validator.validateUsername('Ss_ABKadSD-C')).toBeTruthy();
  });

  test('5test without -_', () => {
    expect(Validator.validateUsername('SscKadSDC')).toBeTruthy();
  });

  test('6test two words', () => {
    expect(Validator.validateUsername('he')).toBeTruthy();
  });

  test('7test home&end words ', () => {
    expect(Validator.validateUsername('h11-231_32_4-e')).toBeTruthy();
  });
});

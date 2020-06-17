import { TitlePipe } from './title.pipe';

describe('TitlePipe', () => {
  const scenarios = [
    {
      id: '1a',
      input: 'go for bath',
      output: 'Go for bath',
    },
    {
      id: '1b',
      input: 'swimming',
      output: 'Swimming',
    },
    {
      id: '2a',
      input: '',
      output: '',
    },
  ];
  
  let pipe;
  beforeAll(() => {
    pipe = new TitlePipe();
  });

  scenarios.forEach((scenario) => {
    it(`${scenario.id} - ${scenario.input}`, () => {
      const actual = pipe.transform(scenario.input);
      expect(actual).toBe(scenario.output);
    });
  });
});

import '../../styles/generator/ResponseDisplay.scss';
import { useAppSelector } from '../../store/hooks';
import {
  selectSimpleResponseOn,
  selectComplexResponseOn,
} from '../../store/slices/dashboardSlice';
import Response from './Response';

const ResponseDisplay = () => {
  const simpleResponseOn = useAppSelector(selectSimpleResponseOn);
  const complexeResponseOn = useAppSelector(selectComplexResponseOn);
  return (
    <div className='response-display'>
      <h2>Output</h2>
      {simpleResponseOn && (
        <Response
          responseType='Simple'
          response=' Maggie Carey as a female ballet dancer in an arabesque, supported by a
          male dancer in a blue backdrop.'
        />
      )}

      {complexeResponseOn && (
        <Response
          responseType='Complex'
          response=" In this mesmerizing image featuring ballet dancers Maggie Carey and
          her partner, Maggie extends one leg in a graceful arabesque while
          being supported by her male counterpart. Their sleek costumes
          highlight their athleticism: Maggie wears a delicate fitted bodysuit,
          while her partner sports a white top with subtle lines. Their
          expressions reveal a profound emotional connection; Maggie gazes
          upward with determination, while her partner admires her with focus.
          The deep blue gradient backdrop enhances the serene ambiance,
          capturing the essence of ballet's beauty and lyricism."
        />
      )}
    </div>
  );
};

export default ResponseDisplay;

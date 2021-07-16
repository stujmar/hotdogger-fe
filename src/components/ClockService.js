import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpeed } from '../../redux/clockSlice';
import { selectDay, resetDay, incrementDay } from '../../redux/daySlice';
import { selectHour, resetHour, incrementHour } from '../../redux/hourSlice';

const ClockService = () => {
        // let [count, setCount] = useState(Math.floor(Math.random() * (366 - 1) + 1));
        const dispatch = useDispatch();
        let speed = useSelector(selectSpeed);
        let hour = useSelector(selectHour);
        let day = useSelector(selectDay);

        // let [day, setDay] = useState(Math.floor(Math.random() * (366 - 1) + 1));

        function useInterval(callback, delay) {
            const savedCallback = useRef();
          
            // Remember the latest callback.
            useEffect(() => {
              savedCallback.current = callback;
            }, [callback]);
          
            // Set up the interval.
            useEffect(() => {
              function tick() {
                savedCallback.current();
              }
              if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
              }
            }, [delay]);
        }
        useInterval(() => {
          console.log("Click");
        }, speed); // How many milliseconds it takes for an hour to pass in game.
    return (<></>)
}

export default ClockService;
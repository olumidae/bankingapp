'use client'
import CountUp from 'react-countup/build';

const AnimatedCounter = ({amount} : {amount: number}) => {
  return (
    <>
        <CountUp 
            end={amount}
            decimal='.'
            prefix='$'
            decimals={2}
        />
    </>
  )
}

export default AnimatedCounter
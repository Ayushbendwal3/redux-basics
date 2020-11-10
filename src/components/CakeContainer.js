import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'
import { buyPastry } from '../redux/cakes/cakeActions'

function CakeContainer(props) {
  const numOfCakes = useSelector((state) => state.numOfCakes)
  const pastry = useSelector((state) => state.pastry)

  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Cakes = {numOfCakes}</h2>
      <h2>Number of pastry = {pastry}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake </button>
      <button onClick={() => dispatch(buyPastry())}>Buy Pastry</button>
    </div>
  )
}

export default CakeContainer

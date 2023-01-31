import React from 'react'
import { Container } from '../styles';
import Skeleton from '../../Skeleton';

const SkeletonSnack = () => {
  return (
    <div className='skeleton-wrapper'>
        <Container>
            <Skeleton type='title'/>
            <Skeleton type='thumbnail'/>
            <Skeleton type='text'/>
            <Skeleton type='text'/>

            <div>
                <Skeleton type='title'/>
                <Skeleton type='image'/>
            </div>
        </Container>
    </div>
  )
}

export default SkeletonSnack;
import { SkeletonElement } from './styles';

export interface SkeletonProps {
  type: 'title' | 'text' | 'image' | 'thumbnail'
}

const Skeleton = ({type}: SkeletonProps) => {
  return (
    <SkeletonElement type={type}/>
  )
}

export default Skeleton;

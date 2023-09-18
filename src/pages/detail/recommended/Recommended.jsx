import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousal from '../../../components/carousal/Carousal'

const Recommended = ({mediaType,id}) => {
    const {data,loading}=useFetch(`/${mediaType}/${id}/recommendations`)
  return (
    <div>
   
    <Carousal data={data?.results} loading={loading} title="Recommendations" endpoint={mediaType}/>

      
    </div>
  )
}

export default Recommended

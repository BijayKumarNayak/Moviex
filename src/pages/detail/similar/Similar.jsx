import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousal from '../../../components/carousal/Carousal'



const Similar = ({mediaType,id}) => {
    const {data,loading}=useFetch(`/${mediaType}/${id}/similar`)
    const title= mediaType==="tv" ? "Similar TV Shows" : "Similar Movies"
    
  
  return (
    <div>
    <Carousal title={title} data={data?.results} loading={loading} endpoint={mediaType}/>
    
      
    </div>
  )
}

export default Similar

import React from 'react'
import {ChannelCard,VideoCard} from './index';
import { Stack,Box} from '@mui/material'


const Videos = ({videos,direction}) => {
 if(!videos?.length) return 'Loading....'

  return (
    <Stack direction={direction || "row"} flexWrap='wrap'
    justifyContent='start' alignItems="start" gap={2}>
      {videos.map((eachItem,index)=>(
        <Box key={index}>
          {eachItem.id.videoId && <VideoCard video={eachItem}/>}
           {eachItem.id.channelId && <ChannelCard 
          channelDetail={eachItem}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
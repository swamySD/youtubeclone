import { Stack, Typography } from "@mui/material"
import { categories } from "../utils/constants"




const SideBar = ({selectedCategory,setSelectedCategory}) => 
   (
    <Stack
    direction="row"
    sx={{overflowY:'auto',
    height:{sx:'auto',md:'95%'},
    flexDirection:{md:'column'},
    }}
   >
    {categories.map((Category)=>(
        <button className="category-btn"
        onClick={()=>setSelectedCategory(Category.name)}
        key={Category.name}
        style={{background:Category.name === selectedCategory
        && '#FC1503', color:'white'
        }}
        >
          <Typography component='span'
             style={{color:Category.name ===
            selectedCategory ? 'white':'red',marginRight:'15px'
            }}>{Category.icon}</Typography>
            <Typography component='span'
             style={{opacity:Category.name ===
            selectedCategory ? '1':'0.8'
            }}>{Category.name}</Typography>
            
        </button>
    ))}
  </Stack>
  )


export default SideBar
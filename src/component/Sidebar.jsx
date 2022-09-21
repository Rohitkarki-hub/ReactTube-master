
import {Stack} from "@mui/material";

import {categories} from "../utlis/contants";


const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflow:"auto",
      height:{sx: 'auto', md:'95%'},
      flexDirection:{md: 'column'},
    }}
  >
    {categories.map((category)=>(
      <button
      className="category-btn"
      onClick={()=>setSelectedCategory
      (category.name)}
      style={{
        background:category.name === selectedCategory && '#FC1503',
        color:'white'
      }}
      key ={category.name}
      >
        <span style={{
          color:category.name === selectedCategory ? 'white' : 'red',
           margin: '15px'
        }}>
        {category.icon}
        </span>
        <span style={{
          opapcity:category.name === selectedCategory? '1':'0.8'
        }}>
        {category.name}
        </span>
        
       </button> 

    ))}

  </Stack>
)

export default Sidebar
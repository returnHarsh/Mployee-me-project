import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from '@chakra-ui/react'

const MdHeader = () => {
    return (

            <div className='flex flex-1 justify-center items-center'> 
                <Menu>
                <MenuButton as={Button} bg={"#FF9800"} color={"white"} display={{ base: "block", md: "none" }}>
                    Options
                </MenuButton>
                <MenuList>
                    <MenuItem fontSize={{ base: "12px", lg: "16px" }} p="10px" color="#FF9800" fontWeight="600">
                        Resume Scan
                    </MenuItem>
                    <MenuItem fontSize={{ base: "12px", lg: "16px" }} p="10px" fontWeight="500">
                        Job Recommendation
                    </MenuItem>
                    <MenuItem fontSize={{ base: "12px", lg: "16px" }} p="10px" fontWeight="500">
                        Resume Keywords
                    </MenuItem>
                    <MenuItem fontSize={{ base: "12px", lg: "16px" }} p="10px" fontWeight="500">
                        Resume Services
                    </MenuItem>
                    <MenuItem fontSize={{ base: "12px", lg: "16px" }} p="10px" fontWeight="500">
                        Career Blogs
                    </MenuItem>
                </MenuList>
            </Menu>
            </div>

    )
}

export default MdHeader

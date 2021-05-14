import React, {useState} from 'react'
import {Menu} from 'semantic-ui-react'

const Navigation = () => {

    const [activeItem, setActiveItem] = useState('');

    return (
        <Menu>
            <Menu.Item
                name='editorials'
                active={activeItem === 'editorials'}
                onClick={() => setActiveItem('editorials')}
            >
                Editorials
            </Menu.Item>

            <Menu.Item
                name='reviews'
                active={activeItem === 'reviews'}
                onClick={this.handleItemClick}
            >
                Reviews
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
                active={activeItem === 'upcomingEvents'}
                onClick={this.handleItemClick}
            >
                Upcoming Events
            </Menu.Item>
        </Menu>
    )
}

export default Navigation
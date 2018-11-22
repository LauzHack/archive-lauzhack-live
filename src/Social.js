import React, {Component} from 'react';
import Iframe from 'react-iframe';


class Social extends Component {
    render() {
        return (
            <Iframe url="https://walls.io/v3ujz?nobackground=1&amp;show_header=0"
                    width="100%"
                    height="1440px"
                    id="myId"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
        )
    }
}

export default Social;

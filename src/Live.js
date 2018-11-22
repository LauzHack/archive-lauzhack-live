import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const BACKEND_URL = 'http://127.0.0.1:5000/';

class Live extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };

        this.fetchData();
    }

    fetchData() {
        fetch(BACKEND_URL + 'messages')
            .then(res => res.json())
            .then(data => this.setState({messages: data}));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.fetchData(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <Grid>
                    {this.state.messages.length > 0 ?
                        this.state.messages.map(message => (
                            <Row key={message.id} className="show-grid">
                                <Col xs={12}>
                                    <h2>{message.text}</h2>
                                </Col>
                            </Row>
                        )) :
                        <Row className="show-grid">
                            <Col xs={12}>
                                <h2>There are no messages to display.</h2>
                            </Col>
                        </Row>
                    }
                </Grid>
            </div>
        )
    }
}

export default Live;

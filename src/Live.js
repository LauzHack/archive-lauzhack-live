import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const BACKEND_URL = 'https://zoh1fivbel.execute-api.eu-central-1.amazonaws.com/prod/';

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
            .then(data => {
                data.sort((a, b) => b.timestamp - a.timestamp);
                this.setState({messages: data})
            });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.fetchData(), 60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <Grid>
                    <h1>Announcements</h1>
                    {this.state.messages.length > 0 ?
                        this.state.messages.map((message, index) => (
                            <Row key={message.id} className="show-grid">
                                <Col xs={12}>
                                    {index === 0 ? <h2>{message.text}</h2> : <h3>{message.text}</h3>}
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

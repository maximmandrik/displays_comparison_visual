import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <div style={props.style} id="square-a" className={'square square--' + props.index} />
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        let a = {
            width: 2560,
            height: 1600,
            diagonal: 8.4,
            px: true,
        };

        let scale = 30;

        a.aspectX = 1;
        a.aspectY = a.height / a.width;
        a.ppi = a.px ? Math.round(Math.sqrt((a.width * a.width) + (a.height * a.height)) / a.diagonal) : '';
        a.style = {
            width: a.aspectX * scale * a.diagonal,
            height: a.aspectY * scale * a.diagonal,
        };

        a.space = parseInt(a.style.width * a.style.height);

        let b = {
            width: 1920,
            height: 1200,
            diagonal: 10.1,
            px: true,
        };

        b.aspectX = 1;
        b.aspectY = b.height / b.width;
        b.ppi = b.px ? Math.round(Math.sqrt((b.width * b.width) + (b.height * b.height)) / b.diagonal) : '';
        b.style = {
            width: b.aspectX * scale * b.diagonal,
            height: b.aspectY * scale * b.diagonal,
        };

        b.space = parseInt(b.style.width * b.style.height);

        this.state = {
            a: a,
            b: b,
        };
    }

    render() {
        return (
            <div>
                <div className="compare">
                    <Square style={this.state.a.style} index="a" />
                    <Square style={this.state.b.style} index="b" />
                </div>
                <div className="clear" />

                <div className="info">
                    <div className="info-a">
                        <div>A:</div>
                        <div>Плотность: {this.state.a.ppi} px</div>
                        <div>Площадь: {this.state.a.space} px</div>
                    </div>
                    <br />
                    <div className="info-b">
                        <div>B:</div>
                        <div>Плотность: {this.state.b.ppi} px</div>
                        <div>Площадь: {this.state.b.space} px</div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

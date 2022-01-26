'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable */


// ES6


var propTypes = {};

var Otp = function (_React$Component) {
    _inherits(Otp, _React$Component);

    function Otp(props) {
        _classCallCheck(this, Otp);

        var _this = _possibleConstructorReturn(this, (Otp.__proto__ || Object.getPrototypeOf(Otp)).call(this, props));

        _this.resendOTP = _this.resendOTP.bind(_this);

        _this.state = {
            start: Date.now(),
            diff: 0,
            minutes: 0,
            seconds: 0,
            duration: 60 * _this.props.minutes,
            resend: false
        };
        _this.timerState = '';
        _this.timerCount = '';
        _this.count = 0;

        return _this;
    }

    _createClass(Otp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            window.clearInterval(this.timerCount);
            this.timerCount = setInterval(function () {
                _this2.timer();
            }, 1000);
        }
    }, {
        key: 'starttimer',
        value: function starttimer() {
            var _this3 = this;

            window.clearInterval(this.timerCount);
            this.timerCount = setInterval(function () {
                _this3.timer();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.clearInterval(this.timerCount);
        }
    }, {
        key: 'timer',
        value: function timer() {

            var diff = this.state.diff;
            var minutes = this.state.minutes;
            var seconds = this.state.seconds;

            diff = this.state.duration - ((Date.now() - this.state.start) / 1000 | 0);
            minutes = diff / 60 | 0;
            seconds = diff % 60 | 0;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            this.setState({ minutes: minutes, seconds: seconds });

            if (diff <= 0) {
                this.setState({ resend: true });
                window.clearInterval(this.timerCount);
            }
        }
    }, {
        key: 'resendOTP',
        value: function resendOTP(evt) {
            this.setState({ start: Date.now(), minutes: 0, seconds: 0, duration: 60 * this.props.minutes });
            this.props.resendEvent();
            this.starttimer();
            evt.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    { className: 'errMsg', style: this.props.style.otpTimer },
                    this.state.minutes,
                    ' : ',
                    this.state.seconds
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'resend', style: this.props.style.resendBtn, onClick: this.resendOTP },
                    'Resend'
                )
            );
        }
    }]);

    return Otp;
}(_react2.default.Component);

Otp.propTypes = propTypes;

exports.default = Otp;
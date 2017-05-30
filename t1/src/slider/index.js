import React from 'react';
import Slider from 'react-slick';
import './slider.css';

var Slick = React.createClass({
	render() {
		var settings = {
			dots: true,
			centerPadding: 0,
			centerMode: true,
			arrows: true,
			slidesToShow: 1,
			initialSlide: 1,
			focusOnSelect: true,
			variableWidth: true,
			infinite: true,
		}

		return (
			<div className='container'>
				<Slider {...settings}>
					<div><img src='http://placekitten.com/g/400/200' /></div>
					<div><img src='http://placekitten.com/g/400/200' /></div>
					<div><img src='http://placekitten.com/g/400/200' /></div>
					<div><img src='http://placekitten.com/g/400/200' /></div>
				</Slider>
			</div>
		);
	}
});

export default Slick;
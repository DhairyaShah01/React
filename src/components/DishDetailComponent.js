import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

	function Comments({comments}) {
		if (comments == null) {
			return (<div></div>)
		}
		const cmnts = comments.map((comments) => {
			return (
				<li key={comments.id}>
					<p>{comments.comment}</p>
					<p>--{comments.author}
					&nbsp;
					{new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comments.date))}
     				</p>
				</li>
			)
		})
		return (
			<div className="col-12 col-md-5 m-1">
				<h4> Comments </h4>
				<ul className="list-unstyled">
					{cmnts}
				</ul>
			</div>
		)
	}

	function RenderDish({dish}) {
		if (dish != null) {
			return(
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
			)
		}
		else {
			return(
				<div></div>
			)
		}
	}

	const DishDetail = (props) => {
		const dish=props.dish
		if(dish == null) {
			return(<div></div>)
		}
		return (
			<div class="container">
				<div className="row">
					<RenderDish dish={props.dish} />
					<Comments comments={props.dish.comments} />
				</div>
			</div>
		)
	}

export default DishDetail;
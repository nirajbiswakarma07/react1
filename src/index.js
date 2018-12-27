import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

let booklist=[
	{"title":"GGGG","author":"NirajBK" },
	{"title":"The sun also rises","author":"Niraj Pro","pages":260},
	{"title":"The sun doesn't rises","pages":260},
	{"author":"Niraj","pages":260},
		{"title":"GGGG","author":"NirajBK","pages":360}

]
const Book = ({title="No title provided",author="No Author",pages=0,freeBookmark}) => {
	return(
		<section>
			<h2>{title}</h2>
			<p> By: {author}</p>
			<p>Pages:{pages} pages</p>
			<p>Free Bookmark Today:{freeBookmark?'Yes!':'No!'}</p>
		</section>
		)
}
const Hiring = () =>
	<div>
		<p>The library is Hiring.go to jobs for more</p>
	</div>
const NotHiring = () =>
	<div>
		<p>The library is not Hiring maybe next time.</p>
	</div>


class Library extends React.Component{
	static defaultProps ={
		books:[
		{"title":"ABCD", "author":"A", "pages":1000}
		]
	}


	state = {
		open:true,
		freeBookmark:false,
		hiring:true,
		data:[],
		loading:false
	}
	componentDidMount(){
		this.setState({loading:true})
		fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
		.then(data=>data.json())
		.then(data=>this.setState({data,loading:false}))
	}
	componentDidUpdate(){
		console.log("The component just updated")
	}

	toggleOpenClosed=()=>{
 		this.setState(prevState => ({
			open:!prevState.open
		}))
	}
	render(){
		const { books }=this.props
	return( 
		<div>
			{this.state.hiring?<Hiring/>:<NotHiring/>}
			{this.state.loading?"loading.."
			:
			<div>
				{this.state.data.map(product =>{
					return (
						<div key={product.id}>
							<h3>Library product of the week!</h3>
							<h4>{product.name}</h4>
							<img alt={product.name} src ={product.image} height={100}/>
						</div>
					)

				})}
			</div>}
		<h1>The Library is {this.state.open ? 'Open' : 'Closed' }</h1>
		<button onClick = {this.toggleOpenClosed}>Change!</button>
		{books.map(
			(book,i) => 
			<Book 
			key={i}
			title={book.title} 
			author={book.author} 
			pages={book.pages}
			freeBookmark={this.state.freeBookmark}/>
			)}
		</div>
		)
	}
}

Library.propTypes={
	books:PropTypes.array
}
Book.propTypes={
	title:PropTypes.string,
	author:PropTypes.string,
	pages:PropTypes.number,
	freeBookmark:PropTypes.bool
}

ReactDOM.render(
	<Library books={booklist}/>,
	document.getElementById("root")
)
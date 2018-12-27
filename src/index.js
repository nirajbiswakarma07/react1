import React from 'react'
import ReactDOM from 'react-dom'
import Library from './Library'

let booklist=[
	{"title":"GGGG","author":"NirajBK" },
	{"title":"The sun also rises","author":"Niraj Pro","pages":260},
	{"title":"The sun doesn't rises","pages":260},
	{"author":"Niraj","pages":260},
		{"title":"GGGG","author":"NirajBK","pages":360}

]

ReactDOM.render(
	<Library books={booklist}/>,
	document.getElementById("root")
)

import React, { Component } from 'react'

export default class Admin extends Component {
	static onEnter(nextState, replace) {
		const login = window.localStorage.getItem('rr_login')
		if (login !== 'admin') {
			/*console.log('Все ОК. Пропусти :-)')*/
			replace('/')
		}
	}
	render() {
		return (
			<div className='row'>
				<div className="col-md-12">
					Страница: "Админка"
				</div>
			</div>
		)
	}
}
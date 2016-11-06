const React = require( 'react' );
const Link = require( 'react-router' ).Link;


const App = function() {
	const MAILBOX = require( '../constants/mailbox.js' );

	// create menu
	const navLinks = Object.keys( MAILBOX ).map(function( key ) {
		return <Link key={ key } to={ `/${ key }` }>{ MAILBOX[ key ].title }</Link>;
	});

	return (
		<div>
			<nav>
				<ul>
					{ navLinks }
				</ul>
			</nav>

			<main>
				<p>TODO</p>
			</main>
		</div>
	);
};

module.exports = App;

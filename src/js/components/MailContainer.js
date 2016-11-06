const React = require( 'react' );


const MailContainer = function( props ) {
	const MAIL = require( '../constants/mail.js' )[ props.mailboxId ];

	// any mail?
	if (! MAIL) {
		return <p>No mail.</p>;
	}

	const mailTableBody = Object.keys( MAIL ).map(function( mailId ) {
		const mail = MAIL[ mailId ];
		return (
			<tr>
				<td>{ mail.id }</td>
				<td>{ mail.from }</td>
				<td>{ mail.title }</td>
			</tr>
		);
	});

	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>From</th>
					<th>Subject</th>
				</tr>
			</thead>
			<tbody>
				{ mailTableBody }
			</tbody>
		</table>
	);
};

module.exports = MailContainer;

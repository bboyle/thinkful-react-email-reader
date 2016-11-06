const React = require( 'react' );

const MailContainer = require( './MailContainer' );


const MailboxContainer = function( props ) {
	const MAILBOX_ID = props.params.mailboxId;
	const MAILBOX = require( '../constants/mailbox.js' )[ MAILBOX_ID ];

	return (
		<section className={ MAILBOX_ID }>
			<header>
				<h2>{ MAILBOX.title }</h2>
			</header>
			<MailContainer mailboxId={ MAILBOX_ID } />
		</section>
	);
};

module.exports = MailboxContainer;

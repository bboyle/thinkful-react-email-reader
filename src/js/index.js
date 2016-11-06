const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const router = require( 'react-router' );
const Router = router.Router;
const Route = router.Route;
var IndexRoute = router.IndexRoute;

const App = require( './components/App' );
const MailContainer = require( './components/MailContainer' );
const MailboxContainer = require( './components/MailboxContainer' );
const Mail = require( './components/Mail' );


            // <IndexRoute component={ MailContainer } />
const routes = (
	<Router history={ router.hashHistory }>
        <Route path="/" component={ App }>
            <Route path=":mailboxId" component={ MailboxContainer }>
            	<Route path=":emailId" component={ Mail } />
            </Route>
        </Route>
	</Router>
);

document.addEventListener( 'DOMContentLoaded', function() {
	ReactDOM.render( routes, document.getElementById( 'app' ));
});

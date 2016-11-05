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


const routes = (
	<Router history={ router.hashHistory }>
        <Route path="/" component={ App }>
            <IndexRoute component={ MailContainer } />
            <Route path=":mailboxName" component={ MailboxContainer }>
            	<Route path=":email" component={ Mail } />
            </Route>
        </Route>
	</Router>
);

document.addEventListener( 'DOMContentLoaded', function() {
	ReactDOM.render( routes, document.getElementById( 'app' ));
});

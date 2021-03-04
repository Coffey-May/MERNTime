import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';



export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        backgroundSize: 'cover',
        color: 'turquoise'
    },
    heading: {
        padding: '2vw',
        textDecoration: 'none',
        color: 'turquoise',
        fontSize: '4vw'
    },
    image: {
        marginLeft: '15px',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '250px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
        color: 'white'
    },
    a: {
        color: 'white'
    },

    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
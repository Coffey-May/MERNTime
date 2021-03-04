
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: '2vh'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100px',
        flexWrap: 'wrap',
        zIndex: 1
    },
    container: {
        position: 'relative',
        width: '280px',
        height: '400px',
        margin: '30px',
        boxShadow: ' 20px 20px 50px rgba(0,0,0,0.5)',
        borderRadius: '15px',
        background: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '10px solid rgba(255,255,255,0.5)',
        borderLeft: '10px solid rgba(255,255,255,0.5)',
        backdropFilter: 'blur(5px)'
    },
    card: {
        position: 'relative',
        width: '280px',
        height: '400px',
        margin: '30px',
        boxShadow: ' 20px 20px 50px rgba(0,0,0,0.5)',
        borderRadius: '15px',
        background: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '10px solid rgba(255,255,255,0.5)',
        borderLeft: '10px solid rgba(255,255,255,0.5)',
        backdropFilter: 'blur(5px)'
    },
    container: {
        position: 'absolute',
        top: '-40px',
        right: '30px',
        fontFamily: '8em'
    },
    card: {
        position: 'absolute',
        top: '-40px',
        right: '30px',
        fontFamily: '8em'
    },
    content: {
        position: 'absolute',
        top: '-40px',
        right: '30px',
        fontFamily: '8em'
    },
    h2: {
        position: 'absolute',
        top: '-40px',
        right: '30px',
        fontFamily: '8em'
    }
}));
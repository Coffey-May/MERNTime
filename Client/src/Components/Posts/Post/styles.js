import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
        "& .MuiPaper-Root": {
            backgroundColor: 'rgba(100, 100, 100, 0.3) !important',

        }

    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundBlendMode: 'darken',

    },
    border: {
        border: 'solid',

    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '18px',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        boxShadow: '-10px -10px 30px rgba(255, 255, 255),15px 15px 15px rgba(0, 0, 0, 0.60),-10px -10px 30px rgba(200, 200, 200,0.6) inset,15px 15px 15px rgba(255, 255, 255, 0.3)inset'
    },
    box: {
        borderRadius: '15px'
    },

    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0',
        backgroundColor: 'rbga(155,155,155)',

    },
    title: {
        padding: '0 16px',

    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },


});
import { makeStyles } from '@mui/styles';
import colors from 'utils/styles/colors';

export const useStyles = makeStyles({
    loginContainer: {
        backgroundColor: colors.backgroundSolidDark,
        height: '100vh',
    },
    loginCard: {
        backgroundColor: colors.backgroundDark,
        borderRadius: 7,
    },
    loginTitle: {
        paddingTop: 20,
        color: colors.white,
        fontWeight: 'bold',
    },
    // inputText: {
    //     color: colors.white,
    //     fontSize: 22,
    // },
    imgLogo: {
        height: 100,
    },
    lineSeparator: {
        backgroundColor: colors.grey,
        height: '2px',
        border: 'none',
        margin: '20px auto',
        width: '70%',
    },
});

import { makeStyles } from '@mui/styles';
import colors from 'utils/styles/colors';

export const useStyles = makeStyles({
    homeContainer: {
        backgroundColor: colors.backgroundDark,
    },
    cardGrid: {
        padding: '40px 0',
    },
    cardContainer: {
        backgroundColor: colors.backgroundSolidDark,
        color: colors.grey,
    },
    cardTitle: {
        backgroundColor: colors.backgroundSolidDark,
        color: colors.grey,
    },
    cardTitlePadding: {
        paddingBottom: '8px',
    },
});

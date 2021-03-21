import React from 'react';
import { GridList as MUIGridList, GridListTile, GridListTileBar, IconButton, makeStyles, Typography, } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { Loader } from '../../..';
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1100,
    },
    gridItem: {
        ':hover': {
            pointer: 'cursor',
        },
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    noData: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '20rem',
    },
}));
const GridList = ({ data = [], onItemClick, loading, cols = 3, emptyPlaceholder, }) => {
    const classes = useStyles();
    if (loading) {
        return React.createElement(Loader, null);
    }
    if (data.length === 0) {
        return (React.createElement(Typography, { variant: "h5", gutterBottom: true, className: classes.noData }, emptyPlaceholder || 'No data to display'));
    }
    return (React.createElement("div", { className: classes.root },
        React.createElement(MUIGridList, { cellHeight: 300, className: classes.gridList, cols: cols }, data.map(item => (React.createElement(GridListTile, { key: item.imgUrl, className: classes.gridItem, onClick: () => onItemClick(item) },
            React.createElement("img", { src: item.imgUrl, alt: item.imgUrl }),
            React.createElement(GridListTileBar, { title: item.name, subtitle: React.createElement("span", null,
                    "type: ",
                    item.mediaType), actionIcon: React.createElement(IconButton, { "aria-label": `info about ${item.name}`, className: classes.icon },
                    React.createElement(InfoIcon, null)) })))))));
};
export { GridList };
//# sourceMappingURL=GridList.js.map
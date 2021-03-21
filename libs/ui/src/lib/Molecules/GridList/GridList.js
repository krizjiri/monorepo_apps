import React from 'react';
import { GridList as MUIGridList, GridListTile, GridListTileBar, IconButton, ListSubheader, makeStyles, } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
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
}));
const GridList = ({ data = [], onItemClick }) => {
    const classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(MUIGridList, { cellHeight: 300, className: classes.gridList, cols: 3 },
            React.createElement(GridListTile, { key: "Subheader", cols: 3, style: { height: 'auto' } },
                React.createElement(ListSubheader, { component: "div" }, "Search results")),
            data.map(item => (React.createElement(GridListTile, { key: item.imgUrl, className: classes.gridItem, onClick: () => onItemClick(item) },
                React.createElement("img", { src: item.imgUrl, alt: item.imgUrl }),
                React.createElement(GridListTileBar, { title: item.name, subtitle: React.createElement("span", null,
                        "type: ",
                        item.mediaType), actionIcon: React.createElement(IconButton, { "aria-label": `info about ${item.name}`, className: classes.icon },
                        React.createElement(InfoIcon, null)) })))))));
};
export { GridList };
//# sourceMappingURL=GridList.js.map
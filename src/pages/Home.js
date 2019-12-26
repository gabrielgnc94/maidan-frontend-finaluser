import React, { Component } from 'react';

//Components
import SlideMenu from '../components/SlideMenu';
import VirtualizedList from '../components/CodigoTeste/ListTeste';
import VerticalMenuSectionAndProductsPaper from '../components/VerticalMenuSectionAndProductsPaper';
import HorizontalMenuSectionPaper from '../components/HorizontalMenuSectionPaper';

import BusinessInfo from '../components/ApiBusinessInfo';
import Menu from '../components/ApiMenu';





//Material UI
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

//List Related
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Paper from '@material-ui/core/Paper';

//Icons
import LocalBarIcon from '@material-ui/icons/LocalBar';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ViewListIcon from '@material-ui/icons/ViewList';





const styles = (theme) => ({
    gridbusinessInfoRoot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    productPhoto: {
        height: '80px',
        width: '80px'
    },
    eachPaperProduct: {
        backgroundColor: '#ecf0f1',
        margin: theme.spacing(1),
    },
    gridTopRoot: {
        backgroundColor: '#ecf0f1',
        height: '5vh'
    },
    gridProductsSectionRoot: {
      display: 'flex',
      // alignItems: 'center',
      backgroundColor: '#ecf0f1',
      height: '9vh'
    },
    gridRoot: {
        backgroundColor: '#ecf0f1',
        height: '80vh'

    },
    gridLeftMenu: {

        paddingTop: '4px',
        backgroundColor: '#ecf0f1'

    }, 
   paperProductsList: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    maxHeight: '75vh',
    overflow: 'auto',
    margin: theme.spacing(1),
   
    // marginRight: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    // backgroundColor: 'black'
   },

 appBar: {
        top: 'auto',
        bottom: 0,
        
      },
  appToolBar: {
       
  },
 fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
 },
 grow: {
    flexGrow: 1,
  },
  button: {
    // margin: theme.spacing(0),
    marginTop: theme.spacing(1)
  },
  businessName: {
    // marginTop: theme.spacing(2), 
  },
  businessInfoPaper: {
    padding: theme.spacing(1),
  }

  
});

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



export class Home extends Component {

    componentDidMount() {
      console.log('BusinessInfo');
      console.log(BusinessInfo);

      console.log('Menu');
      console.log(Menu);

      
    }
    
    render() {
         //Nunca esqucer disso abaixo
       const { classes } = this.props;

        return (
            <React.Fragment>
      
     
        
         <Grid 
          container 
          spacing ={0}
          className={classes.gridTopRoot}
          >
               
         <Grid
                 item 
                 xs={12}
                 className={classes.gridbusinessInfoRoot}
        
          >
            <Paper className={classes.businessInfoPaper}>
            <Typography
            className={classes.businessName}
            variant="body1" 
            align="center" 
            color="textPrimary" 
            >
             {BusinessInfo.name}
            </Typography>
            </Paper>

            </Grid>

        </Grid>


        <Grid 
          container 
          spacing ={0}
          className={classes.gridProductsSectionRoot}
          >
               
            <Grid
                    item 
                    xs={12}
            >
                <HorizontalMenuSectionPaper />

              </Grid>

        </Grid>
            
        
       
       

          
          <Grid 
          container 
          spacing={0}
          className={classes.gridRoot}
          >


          

          
          <Grid
                 item 
                 xs={12}
          >

            <Paper 
            className={classes.paperProductsList} 
            elevation={3} 
            >
                  
                    {/* {Menu.map(eachMenuSection => (
                        
                        <ProductPaper  menuSectionInfo={eachMenuSection}  key={eachMenuSection.itens[0].description}/>
                    
                    ))}  */}
                    
                    <VerticalMenuSectionAndProductsPaper  menuSections={Menu}  key={Menu.code}/>
                    
                    
            </Paper>
        </Grid>

          </Grid>
       
       
     
     

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.appToolBar}>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >

        <Grid item xs={2}>
         <IconButton  color="inherit" aria-label="open drawer">
             <HomeIcon />
          </IconButton>
        </Grid>

        <Grid item xs={2}>
        <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Grid>

        <Grid item xs={2}>
        <IconButton color="inherit">
            <ViewListIcon />
          </IconButton>
        </Grid>

        <Grid item xs={2}>
        <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
        </Grid>

        </Grid>


          


        </Toolbar>
      </AppBar>
    </React.Fragment>
           
    )
    }
}

// export default Home
export default withStyles(styles)(Home);


import React, { Component } from 'react'

export class ProductItemForVerticalList extends Component {
    render() {
        return (
            <Grid 
                  container 
                  spacing={0}
                  direction = 'row'
                  className={classes.gridRoot}
                  >
        
                        <Grid
                            item 
                            xs={5}
                            className={classes.productPhotoGrid}
                        >
                                <img
                                className={classes.productPhoto}
                                // src="https://source.unsplash.com/random"
                                src="https://source.unsplash.com/random"
                                title="Image title"
                                />
        
                        </Grid>
        
                        <Grid 
                            container
                            item 
                            xs={7}
                        >
        
                            <Grid 
                            item 
                            xs={12}
                            >
                                <Typography variant="subtitle2" gutterBottom>
                                {eachMenuSection.name}
                                </Typography>
                                
                            </Grid>
        
                            <Grid 
                            item 
                            xs={8}
                            >
                                <Typography variant="subtitle2" gutterBottom>
                                    10,00 R$
                                </Typography>
        
                            </Grid>
        
                            <Grid 
                            item 
                            xs={4}
                            >
                                <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                                    <AddIcon />
                                </Fab>
        
                            </Grid>
                        </Grid>
                    </Grid>   
        )
    }
}

export default ProductItemForVerticalList

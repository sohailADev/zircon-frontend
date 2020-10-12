import React from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Container, CardHeader, CardActions, Typography, IconButton, } from '@material-ui/core'
import axios from './axios';
import requests from './requests';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import moment from 'moment'


class Post extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            error: null,
            isLoaded: false,
            posts: [{
                "id": 1,
                "caption ": "little caption for the post",
                "image ": 'image/somefoldername',
                "author ": 'some author',
                "create_date ": '2001.0.2',
            }]
        }
    }//construtor end


    fetchPosts = () => {
        return axios.get(requests.fetchPosts, {
            headers: {
                'Authorization': 'Token 9b2927815f2793202683f56de5583530e16db4bd'
            }
        })
            .then((response) => {
                // handle success
                console.log(response)
                this.setState({
                    isLoaded: true,
                    posts: response.data
                })
            })
            .catch((error) => {
                // handle error
                console.log(error)
                this.setState({
                    isLoaded: true,
                    error
                })
            })
            .then(() => {
                // always executed
                console.log('done the request')
            })
    }//end fetch posts


    componentDidMount() {
        this.fetchPosts()
    }//end componentdidmount
    render() {
        const { error, isLoaded, posts } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Container maxWidth="sm" >


                    {
                        posts.map(post => (

                            <Card key={post.id} className="postcard">
                                <CardHeader

                                    title={post.caption}

                                />
                                <CardContent>
                                    <Typography variant="body1" >
                                        <img src={post.image} alt='' />



                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Posted at: {moment(post.create_date).format('MMMM Do YYYY, h:mm:ss a')}
                                    </Typography>


                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="Upvote" >
                                        <ThumbUpIcon />
                                    </IconButton>
                                    <IconButton aria-label="downvote" >
                                        <ThumbDownIcon />
                                    </IconButton>

                                </CardActions>
                            </Card>


                        ))
                    }




                </Container >
            );









        }
    }
}
export default Post;
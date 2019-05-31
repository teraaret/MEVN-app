const express = require('express')
const router = express.Router()
const Post = require('../models/post-model')
const Tag = require('../models/tag-model')

router.get('/test', (req, res) => {
    Post.findOne({title: "222"})
    .then( (post)=>{ 
        post.findTag( post.tag_id, (err, tag) =>{
            post.tag = tag;
            res.send( { post: post } );
        });
    }, 
    (reject)=>{ 
        console.log("Пиздец");
    });
    
})


// Get one post 
//
router.get('/posts/:id', (req, res) => {
    
    Post.findById(req.params.id)
    .then( (post) => {
        post.findTag( post.tag_id, (err, tag) => {
            post.tag = tag;
            res.send( post );
        });
    }, (error) => {
        res.sendStatus(500)
    } );
    
})


// Get all posts 
//
router.get('/posts', (req, res) => {
    
    Post.find({}, 'title description tag_id tag')
    .sort({ _id: -1 })
    .then( (posts) => {
        var step = 0;
        posts.forEach( async function(post, index, array) {
            
            // Ожидаем эту срань при помощи await
            await post.findTag(post.tag_id, (err, tag) => {
                post.tag = tag || {};
            });
            
            step++;
            if (step === array.length) {
                res.send({ posts: posts });
            }
        })
    }, (error) => {
        res.sendStatus(500)
    })
    
})


// Add new post 
//
router.post('/posts', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        tag_id: req.body.tag_id,
    })
    post.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Post with ID_${data._id} saved successfully!`
            })
        }
    })
})


// Update post 
//
router.put('/posts/:id', (req, res) => {
    Post.findById(req.params.id, 'title description tag_id', (err, post) => {
        if (err) {
            console.log(err)
        } else {
            if (req.body.title) {
                post.title = req.body.title
            }
            if (req.body.description) {
                post.description = req.body.description
            }
            if (req.body.tag_id) {
                post.tag_id = req.body.tag_id
            }
            post.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

// Delete post 
//
router.delete('/posts/:id', (req, res) => {
    Post.remove({
        _id: req.params.id
    }, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router;
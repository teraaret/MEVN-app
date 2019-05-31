const express = require('express')
const router = express.Router()
const Tag = require('../models/tag-model')
const Post = require('../models/post-model')

router.get('/tags', (req, res) => {
    Tag.find({}, 'title', (err, tags) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({
                tags: tags
            })
        }
    }).sort({
        _id: -1
    })
})

router.post('/tags', (req, res) => {
    const tag = new Tag({
        title: req.body.title,
    })
    tag.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `Tag with ID_${data._id} saved successfully!`
            })
        }
    })
})


// Get tag and posts with this tag
//
router.get('/tags/:id', (req, res) => 
{
    Tag.findOne( { _id: req.params.id }, (err, tag) => 
    {
        if (err) 
        {
            res.sendStatus(500)
        } 
        else 
        {
            Post.find( { tag_id: tag._id }, (err, posts) => 
            {
                if (err || !posts.length) 
                {
                    res.send( { tag: tag, posts: [] } );
                } 
                else 
                {
                    var step = 0;
                    posts.forEach( async function(post, index, array) 
                    {
                        // Ожидаем эту срань при помощи await
                        await post.findTag(post.tag_id, (err, tag) => 
                        {
                            post.tag = tag;
                        });
                        step++;
                        if (step === array.length) 
                        {
                            res.send( { tag: tag, posts: posts } );
                        }
                    })
                }
            })
        }
    })
})
                
                
router.put('/tags/:id', (req, res) => {
    Tag.findById(req.params.id, 'title', (err, tag) => {
        if (err) {
            console.log(err)
        } else {
            if (req.body.title) {
                tag.title = req.body.title
            }
            tag.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

router.delete('/tags/:id', (req, res) => {
    Tag.remove({
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
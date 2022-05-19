const defineTags = async (req,res,next) => {
    if ( req.body.tags ){
        const newTags = req.body.tags.split(/\W+/);
        res.locals.tags = newTags;
        next();
    } else {
        next();
    }
}

export default defineTags;